"""
URL patterns for the accounts app.
"""
from django.urls import path
from .views import RegisterView, UserProfileView, ChangePasswordView

app_name = 'accounts'

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('change-password/', ChangePasswordView.as_view(), name='change-password'),
]
