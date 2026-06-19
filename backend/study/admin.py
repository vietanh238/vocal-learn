from django.contrib import admin
from .models import StudySession, UserStats, Achievement, UserAchievement


@admin.register(StudySession)
class StudySessionAdmin(admin.ModelAdmin):
    list_display = ('user', 'session_type', 'cards_studied', 'correct_count', 'xp_earned', 'started_at')
    list_filter = ('session_type', 'user', 'started_at')


@admin.register(UserStats)
class UserStatsAdmin(admin.ModelAdmin):
    list_display = ('user', 'level', 'total_xp', 'current_streak', 'longest_streak', 'cards_mastered')
    list_filter = ('level',)


@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = ('name_en', 'code', 'condition_type', 'condition_value', 'xp_reward', 'icon')
    list_filter = ('condition_type',)


@admin.register(UserAchievement)
class UserAchievementAdmin(admin.ModelAdmin):
    list_display = ('user', 'achievement', 'unlocked_at')
    list_filter = ('achievement', 'user')
