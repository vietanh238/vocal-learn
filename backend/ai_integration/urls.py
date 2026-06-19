"""
URL patterns for the AI integration app.
"""
from django.urls import path
from .views import GeneratePromptView, ParseAIResultView

app_name = 'ai_integration'

urlpatterns = [
    path('generate-prompt/', GeneratePromptView.as_view(), name='generate-prompt'),
    path('parse-result/', ParseAIResultView.as_view(), name='parse-result'),
]
