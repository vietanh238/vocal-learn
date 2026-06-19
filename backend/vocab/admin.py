from django.contrib import admin
from .models import Folder, Deck, Word, CardReview


@admin.register(Folder)
class FolderAdmin(admin.ModelAdmin):
    list_display = ('name', 'user', 'icon', 'color', 'created_at')
    list_filter = ('user', 'created_at')
    search_fields = ('name', 'description')


@admin.register(Deck)
class DeckAdmin(admin.ModelAdmin):
    list_display = ('name', 'user', 'folder', 'created_at')
    list_filter = ('user', 'folder', 'created_at')
    search_fields = ('name', 'description')


@admin.register(Word)
class WordAdmin(admin.ModelAdmin):
    list_display = ('term', 'part_of_speech', 'definition_vi', 'deck', 'user', 'created_at')
    list_filter = ('part_of_speech', 'deck', 'user')
    search_fields = ('term', 'definition_en', 'definition_vi')
    readonly_fields = ('created_at', 'updated_at')


@admin.register(CardReview)
class CardReviewAdmin(admin.ModelAdmin):
    list_display = (
        'word', 'user', 'status', 'leitner_box',
        'ease_factor', 'interval', 'next_review_date', 'total_reviews',
    )
    list_filter = ('status', 'leitner_box', 'user')
    search_fields = ('word__term',)
