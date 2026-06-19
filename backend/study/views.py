"""
Views for study sessions, user statistics, and achievements.
"""
from datetime import date

from django.utils import timezone
from rest_framework import viewsets, status, permissions, generics
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import StudySession, UserStats, Achievement, UserAchievement
from .serializers import (
    StudySessionSerializer,
    UserStatsSerializer,
    AchievementSerializer,
    UserAchievementSerializer,
    StartSessionSerializer,
    EndSessionSerializer,
)


class StudySessionViewSet(viewsets.GenericViewSet):
    """
    Study session management.
    
    start:   POST /api/study/sessions/start/
    end:     POST /api/study/sessions/{id}/end/
    history: GET  /api/study/sessions/history/
    """
    serializer_class = StudySessionSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return StudySession.objects.filter(user=self.request.user)
    
    @action(detail=False, methods=['post'], url_path='start')
    def start_session(self, request):
        """Start a new study session."""
        serializer = StartSessionSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        session = StudySession.objects.create(
            user=request.user,
            session_type=serializer.validated_data['session_type'],
        )
        
        return Response(
            StudySessionSerializer(session).data,
            status=status.HTTP_201_CREATED,
        )
    
    @action(detail=True, methods=['post'], url_path='end')
    def end_session(self, request, pk=None):
        """
        End a study session and update user stats.
        
        XP Calculation:
        - Base: 2 XP per card studied
        - Bonus: +1 XP per correct answer
        - Pomodoro bonus: 25 XP per pomodoro
        """
        try:
            session = StudySession.objects.get(id=pk, user=request.user)
        except StudySession.DoesNotExist:
            return Response(
                {'error': 'Session not found.'},
                status=status.HTTP_404_NOT_FOUND,
            )
        
        if session.ended_at:
            return Response(
                {'error': 'Session already ended.'},
                status=status.HTTP_400_BAD_REQUEST,
            )
        
        serializer = EndSessionSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        session.ended_at = timezone.now()
        session.cards_studied = serializer.validated_data['cards_studied']
        session.correct_count = serializer.validated_data['correct_count']
        session.pomodoro_count = serializer.validated_data.get('pomodoro_count', 0)
        
        # Calculate XP
        xp = (session.cards_studied * 2) + session.correct_count + (session.pomodoro_count * 25)
        session.xp_earned = xp
        session.save()
        
        # Update user stats
        user_stats, created = UserStats.objects.get_or_create(user=request.user)
        user_stats.total_xp += xp
        user_stats.total_reviews += session.cards_studied
        user_stats.update_streak()
        user_stats.calculate_level()
        user_stats.save()
        
        # Check achievements
        new_achievements = self._check_achievements(request.user, user_stats)
        
        return Response({
            'session': StudySessionSerializer(session).data,
            'stats': UserStatsSerializer(user_stats).data,
            'new_achievements': AchievementSerializer(
                new_achievements, many=True, context={'request': request}
            ).data,
        })
    
    @action(detail=False, methods=['get'], url_path='history')
    def history(self, request):
        """
        GET /api/study/sessions/history/?days=30
        Get study session history.
        """
        days = int(request.query_params.get('days', 30))
        from datetime import timedelta
        since = timezone.now() - timedelta(days=days)
        
        sessions = self.get_queryset().filter(started_at__gte=since)
        serializer = StudySessionSerializer(sessions, many=True)
        
        # Daily summary
        from django.db.models import Sum, Count
        daily = (
            sessions.extra(select={'day': "date(started_at)"})
            .values('day')
            .annotate(
                sessions_count=Count('id'),
                total_cards=Sum('cards_studied'),
                total_correct=Sum('correct_count'),
                total_xp=Sum('xp_earned'),
            )
            .order_by('-day')
        )
        
        return Response({
            'sessions': serializer.data,
            'daily_summary': list(daily),
        })
    
    def _check_achievements(self, user, user_stats):
        """Check and unlock any newly earned achievements."""
        new_achievements = []
        all_achievements = Achievement.objects.all()
        
        for achievement in all_achievements:
            # Skip already unlocked
            if UserAchievement.objects.filter(user=user, achievement=achievement).exists():
                continue
            
            # Check condition
            unlocked = False
            ct = achievement.condition_type
            cv = achievement.condition_value
            
            if ct == 'streak' and user_stats.current_streak >= cv:
                unlocked = True
            elif ct == 'cards_mastered' and user_stats.cards_mastered >= cv:
                unlocked = True
            elif ct == 'total_reviews' and user_stats.total_reviews >= cv:
                unlocked = True
            elif ct == 'level' and user_stats.level >= cv:
                unlocked = True
            elif ct == 'total_xp' and user_stats.total_xp >= cv:
                unlocked = True
            
            if unlocked:
                UserAchievement.objects.create(user=user, achievement=achievement)
                user_stats.total_xp += achievement.xp_reward
                new_achievements.append(achievement)
        
        if new_achievements:
            user_stats.calculate_level()
            user_stats.save()
        
        return new_achievements


class UserStatsView(generics.RetrieveAPIView):
    """
    GET /api/study/stats/
    Get the current user's statistics.
    """
    serializer_class = UserStatsSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_object(self):
        stats, created = UserStats.objects.get_or_create(user=self.request.user)
        return stats


class AchievementViewSet(viewsets.ReadOnlyModelViewSet):
    """
    GET /api/study/achievements/       — List all achievements
    GET /api/study/achievements/{id}/  — Achievement detail
    GET /api/study/achievements/mine/  — User's unlocked achievements
    """
    serializer_class = AchievementSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = None
    queryset = Achievement.objects.all()
    
    @action(detail=False, methods=['get'], url_path='mine')
    def mine(self, request):
        """Get user's unlocked achievements."""
        user_achievements = UserAchievement.objects.filter(
            user=request.user
        ).select_related('achievement').order_by('-unlocked_at')
        
        serializer = UserAchievementSerializer(user_achievements, many=True)
        return Response(serializer.data)
