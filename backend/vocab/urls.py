"""
URL patterns for the vocab app using DRF DefaultRouter.
"""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FolderViewSet, DeckViewSet, WordViewSet, ReviewViewSet

app_name = 'vocab'

router = DefaultRouter()
router.register(r'folders', FolderViewSet, basename='folder')
router.register(r'decks', DeckViewSet, basename='deck')
router.register(r'words', WordViewSet, basename='word')
router.register(r'reviews', ReviewViewSet, basename='review')

urlpatterns = [
    path('', include(router.urls)),
]
