"""
Models for the vocabulary system: Folders, Decks, Words, and CardReview (SRS).
"""
from django.db import models
from django.conf import settings


class Folder(models.Model):
    """
    Organizational container for decks.
    Users can group related decks into folders (e.g., TOEIC, IELTS, Daily).
    """
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='folders'
    )
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    icon = models.CharField(max_length=50, default='📁')
    color = models.CharField(max_length=7, default='#60a5fa')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-updated_at']
        verbose_name = 'Folder'
        verbose_name_plural = 'Folders'
    
    def __str__(self):
        return self.name


class Deck(models.Model):
    """
    A collection of vocabulary words/flashcards.
    Each deck belongs to a user and optionally to a folder.
    """
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='decks'
    )
    folder = models.ForeignKey(
        Folder,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='decks'
    )
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-updated_at']
        verbose_name = 'Deck'
        verbose_name_plural = 'Decks'
    
    def __str__(self):
        return self.name


class Word(models.Model):
    """
    A vocabulary word/phrase with comprehensive learning data.
    Supports English definitions, Vietnamese translations, IPA, examples,
    collocations, synonyms, antonyms, context paragraphs, and user notes.
    """
    PART_OF_SPEECH_CHOICES = [
        ('noun', 'Noun'),
        ('verb', 'Verb'),
        ('adj', 'Adjective'),
        ('adv', 'Adverb'),
        ('prep', 'Preposition'),
        ('conj', 'Conjunction'),
        ('pron', 'Pronoun'),
        ('det', 'Determiner'),
        ('interj', 'Interjection'),
        ('phrase', 'Phrase'),
        ('idiom', 'Idiom'),
    ]
    
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='words'
    )
    deck = models.ForeignKey(
        Deck,
        on_delete=models.CASCADE,
        related_name='words'
    )
    term = models.CharField(max_length=300, help_text='English word or phrase.')
    ipa = models.CharField(max_length=200, blank=True, help_text='IPA pronunciation.')
    part_of_speech = models.CharField(
        max_length=20,
        choices=PART_OF_SPEECH_CHOICES,
        default='noun'
    )
    definition_en = models.TextField(blank=True, help_text='English definition.')
    definition_vi = models.TextField(blank=True, help_text='Vietnamese meaning.')
    example_sentences = models.JSONField(
        default=list, blank=True,
        help_text='List of example sentences.'
    )
    image = models.ImageField(upload_to='word_images/', null=True, blank=True)
    audio_url = models.URLField(blank=True, help_text='URL to pronunciation audio.')
    collocations = models.JSONField(default=list, blank=True)
    synonyms = models.JSONField(default=list, blank=True)
    antonyms = models.JSONField(default=list, blank=True)
    context_paragraph = models.TextField(
        blank=True,
        help_text='A paragraph using the word in natural context.'
    )
    user_notes = models.TextField(blank=True, help_text="User's own notes.")
    user_explanation = models.TextField(
        blank=True,
        help_text="User's explanation (Feynman technique)."
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
        unique_together = ['user', 'deck', 'term']
        verbose_name = 'Word'
        verbose_name_plural = 'Words'
    
    def __str__(self):
        return f"{self.term} ({self.definition_vi})"


class CardReview(models.Model):
    """
    Tracks spaced repetition state for each word per user.
    Supports both SM-2 algorithm and Leitner Box system.
    """
    STATUS_CHOICES = [
        ('new', 'New'),
        ('learning', 'Learning'),
        ('young', 'Young'),
        ('mature', 'Mature'),
        ('relearn', 'Relearn'),
    ]
    
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='card_reviews'
    )
    word = models.ForeignKey(
        Word,
        on_delete=models.CASCADE,
        related_name='reviews'
    )
    
    # SM-2 algorithm fields
    repetitions = models.IntegerField(default=0)
    ease_factor = models.FloatField(default=2.5)
    interval = models.IntegerField(default=0, help_text='Interval in days.')
    next_review_date = models.DateField(null=True, blank=True)
    
    # Leitner Box system
    leitner_box = models.IntegerField(default=1, help_text='Leitner box number (1-5).')
    
    # Statistics
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='new')
    quality_history = models.JSONField(
        default=list, blank=True,
        help_text='History of review quality ratings.'
    )
    total_reviews = models.IntegerField(default=0)
    correct_count = models.IntegerField(default=0)
    last_reviewed_at = models.DateTimeField(null=True, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        unique_together = ['user', 'word']
        verbose_name = 'Card Review'
        verbose_name_plural = 'Card Reviews'
    
    def __str__(self):
        return f"{self.word.term} - Box {self.leitner_box} - EF {self.ease_factor}"
