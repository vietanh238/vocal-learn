"""
Models for study sessions, user statistics, and achievements/gamification.
"""
import math
from datetime import date, timedelta

from django.db import models
from django.conf import settings


class StudySession(models.Model):
    """Tracks individual study sessions with type, duration, and performance."""
    
    SESSION_TYPES = [
        ('flashcard', 'Flashcard'),
        ('quiz', 'Quiz'),
        ('listening', 'Listening'),
        ('speaking', 'Speaking'),
        ('typing', 'Typing'),
        ('matching', 'Matching'),
    ]
    
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='study_sessions'
    )
    session_type = models.CharField(max_length=20, choices=SESSION_TYPES)
    started_at = models.DateTimeField(auto_now_add=True)
    ended_at = models.DateTimeField(null=True, blank=True)
    cards_studied = models.IntegerField(default=0)
    correct_count = models.IntegerField(default=0)
    xp_earned = models.IntegerField(default=0)
    pomodoro_count = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['-started_at']
        verbose_name = 'Study Session'
        verbose_name_plural = 'Study Sessions'
    
    def __str__(self):
        return f"{self.user.username} - {self.session_type} - {self.started_at}"
    
    @property
    def accuracy(self):
        if self.cards_studied == 0:
            return 0
        return round(self.correct_count / self.cards_studied * 100, 1)


class UserStats(models.Model):
    """Aggregate statistics and gamification data for a user."""
    
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='stats'
    )
    total_xp = models.IntegerField(default=0)
    level = models.IntegerField(default=1)
    current_streak = models.IntegerField(default=0)
    longest_streak = models.IntegerField(default=0)
    cards_mastered = models.IntegerField(default=0)
    total_reviews = models.IntegerField(default=0)
    last_study_date = models.DateField(null=True, blank=True)
    
    class Meta:
        verbose_name = 'User Stats'
        verbose_name_plural = 'User Stats'
    
    def calculate_level(self):
        """Calculate level from XP using a curve: level = (xp/100)^(2/3) + 1."""
        self.level = max(1, int(math.pow(self.total_xp / 100, 1 / 1.5)) + 1)
        return self.level
    
    def update_streak(self):
        """Update the daily study streak."""
        today = date.today()
        if self.last_study_date == today:
            return  # Already studied today
        elif self.last_study_date == today - timedelta(days=1):
            self.current_streak += 1
        else:
            self.current_streak = 1
        
        if self.current_streak > self.longest_streak:
            self.longest_streak = self.current_streak
        self.last_study_date = today
    
    def xp_for_next_level(self):
        """Calculate XP needed to reach the next level."""
        next_level = self.level + 1
        return int(100 * math.pow(next_level - 1, 1.5))
    
    def __str__(self):
        return f"{self.user.username} - Level {self.level} - XP {self.total_xp}"


class Achievement(models.Model):
    """Defines an achievement that users can unlock."""
    
    code = models.CharField(max_length=50, unique=True)
    name_en = models.CharField(max_length=100)
    name_vi = models.CharField(max_length=100)
    description_en = models.TextField()
    description_vi = models.TextField()
    icon = models.CharField(max_length=10, default='🏆')
    condition_type = models.CharField(
        max_length=50,
        help_text='Type of condition: streak, cards_mastered, total_reviews, level, etc.'
    )
    condition_value = models.IntegerField(
        help_text='The value that must be reached to unlock.'
    )
    xp_reward = models.IntegerField(default=50)
    
    class Meta:
        ordering = ['condition_type', 'condition_value']
        verbose_name = 'Achievement'
        verbose_name_plural = 'Achievements'
    
    def __str__(self):
        return self.name_en


class UserAchievement(models.Model):
    """Tracks which achievements a user has unlocked."""
    
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='achievements'
    )
    achievement = models.ForeignKey(Achievement, on_delete=models.CASCADE)
    unlocked_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ['user', 'achievement']
        verbose_name = 'User Achievement'
        verbose_name_plural = 'User Achievements'
    
    def __str__(self):
        return f"{self.user.username} - {self.achievement.name_en}"
