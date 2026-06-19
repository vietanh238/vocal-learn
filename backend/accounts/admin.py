from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ('username', 'email', 'preferred_language', 'daily_goal', 'is_staff')
    list_filter = ('preferred_language', 'is_staff', 'is_active')
    fieldsets = BaseUserAdmin.fieldsets + (
        ('VocaLearn Settings', {
            'fields': ('preferred_language', 'avatar', 'daily_goal'),
        }),
    )
