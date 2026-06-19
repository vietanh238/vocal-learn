"""
Serializers for study sessions, user stats, and achievements.
"""
from rest_framework import serializers
from .models import StudySession, UserStats, Achievement, UserAchievement


class StudySessionSerializer(serializers.ModelSerializer):
    """Serializer for study sessions."""
    
    accuracy = serializers.ReadOnlyField()
    
    class Meta:
        model = StudySession
        fields = (
            'id', 'session_type', 'started_at', 'ended_at',
            'cards_studied', 'correct_count', 'xp_earned',
            'pomodoro_count', 'accuracy',
        )
        read_only_fields = ('id', 'started_at', 'xp_earned', 'accuracy')


class UserStatsSerializer(serializers.ModelSerializer):
    """Serializer for user statistics and gamification."""
    
    xp_for_next_level = serializers.ReadOnlyField()
    username = serializers.CharField(source='user.username', read_only=True)
    
    class Meta:
        model = UserStats
        fields = (
            'username', 'total_xp', 'level', 'xp_for_next_level',
            'current_streak', 'longest_streak',
            'cards_mastered', 'total_reviews', 'last_study_date',
        )
        read_only_fields = fields


class AchievementSerializer(serializers.ModelSerializer):
    """Serializer for achievement definitions."""
    
    unlocked = serializers.SerializerMethodField()
    unlocked_at = serializers.SerializerMethodField()
    
    class Meta:
        model = Achievement
        fields = (
            'id', 'code', 'name_en', 'name_vi',
            'description_en', 'description_vi',
            'icon', 'condition_type', 'condition_value',
            'xp_reward', 'unlocked', 'unlocked_at',
        )
    
    def get_unlocked(self, obj):
        request = self.context.get('request')
        if not request or not request.user.is_authenticated:
            return False
        return UserAchievement.objects.filter(
            user=request.user, achievement=obj
        ).exists()
    
    def get_unlocked_at(self, obj):
        request = self.context.get('request')
        if not request or not request.user.is_authenticated:
            return None
        ua = UserAchievement.objects.filter(
            user=request.user, achievement=obj
        ).first()
        return ua.unlocked_at if ua else None


class UserAchievementSerializer(serializers.ModelSerializer):
    """Serializer for user's unlocked achievements."""
    
    achievement = AchievementSerializer(read_only=True)
    
    class Meta:
        model = UserAchievement
        fields = ('id', 'achievement', 'unlocked_at')
        read_only_fields = fields


class StartSessionSerializer(serializers.Serializer):
    """Serializer for starting a new study session."""
    
    session_type = serializers.ChoiceField(choices=StudySession.SESSION_TYPES)


class EndSessionSerializer(serializers.Serializer):
    """Serializer for ending a study session."""
    
    cards_studied = serializers.IntegerField(min_value=0)
    correct_count = serializers.IntegerField(min_value=0)
    pomodoro_count = serializers.IntegerField(min_value=0, default=0)
