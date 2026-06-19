"""
User model for VocaLearn.
Extends AbstractUser with profile fields for vocabulary learning preferences.
"""
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    """Custom user model with language preference and learning goals."""
    
    LANGUAGE_CHOICES = [
        ('vi', 'Vietnamese'),
        ('en', 'English'),
    ]
    
    preferred_language = models.CharField(
        max_length=5,
        choices=LANGUAGE_CHOICES,
        default='vi',
        help_text='Preferred language for definitions and UI.'
    )
    avatar = models.ImageField(
        upload_to='avatars/',
        null=True,
        blank=True,
        help_text='User profile picture.'
    )
    daily_goal = models.IntegerField(
        default=20,
        help_text='Number of cards to review per day.'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'
    
    def __str__(self):
        return self.username
