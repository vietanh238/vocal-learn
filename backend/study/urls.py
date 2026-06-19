"""
URL patterns for the study app.
"""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudySessionViewSet, UserStatsView, AchievementViewSet

app_name = 'study'

router = DefaultRouter()
router.register(r'study/sessions', StudySessionViewSet, basename='session')
router.register(r'study/achievements', AchievementViewSet, basename='achievement')

urlpatterns = [
    path('study/stats/', UserStatsView.as_view(), name='user-stats'),
    path('', include(router.urls)),
]
