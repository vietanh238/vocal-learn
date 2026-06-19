"""
Serializers for the vocabulary system.
"""
from rest_framework import serializers
from .models import Folder, Deck, Word, CardReview


class FolderSerializer(serializers.ModelSerializer):
    """Serializer for vocabulary folders."""
    
    decks_count = serializers.SerializerMethodField()
    words_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Folder
        fields = (
            'id', 'name', 'description', 'icon', 'color',
            'decks_count', 'words_count',
            'created_at', 'updated_at',
        )
        read_only_fields = ('id', 'created_at', 'updated_at')
    
    def get_decks_count(self, obj):
        return obj.decks.count()
    
    def get_words_count(self, obj):
        return Word.objects.filter(deck__folder=obj).count()


class DeckSerializer(serializers.ModelSerializer):
    """Serializer for vocabulary decks with word count."""
    
    word_count = serializers.SerializerMethodField()
    folder_name = serializers.CharField(source='folder.name', read_only=True, default=None)
    
    class Meta:
        model = Deck
        fields = (
            'id', 'folder', 'folder_name', 'name', 'description',
            'word_count', 'created_at', 'updated_at',
        )
        read_only_fields = ('id', 'created_at', 'updated_at')
    
    def get_word_count(self, obj):
        if hasattr(obj, '_word_count'):
            return obj._word_count
        return obj.words.count()
    
    def validate_folder(self, value):
        """Ensure folder belongs to the current user."""
        if value and value.user != self.context['request'].user:
            raise serializers.ValidationError('Folder does not belong to you.')
        return value


class WordSerializer(serializers.ModelSerializer):
    """Serializer for vocabulary words with all fields."""
    
    review_status = serializers.SerializerMethodField()
    
    class Meta:
        model = Word
        fields = (
            'id', 'deck', 'term', 'ipa', 'part_of_speech',
            'definition_en', 'definition_vi',
            'example_sentences', 'image', 'audio_url',
            'collocations', 'synonyms', 'antonyms',
            'context_paragraph', 'user_notes', 'user_explanation',
            'review_status', 'created_at', 'updated_at',
        )
        read_only_fields = ('id', 'created_at', 'updated_at')
    
    def get_review_status(self, obj):
        """Get the SRS review status for this word."""
        request = self.context.get('request')
        if not request or not request.user.is_authenticated:
            return None
        review = CardReview.objects.filter(user=request.user, word=obj).first()
        if review:
            return {
                'status': review.status,
                'leitner_box': review.leitner_box,
                'ease_factor': review.ease_factor,
                'next_review_date': review.next_review_date,
                'total_reviews': review.total_reviews,
                'correct_count': review.correct_count,
            }
        return None
    
    def validate_deck(self, value):
        """Ensure deck belongs to the current user."""
        if value.user != self.context['request'].user:
            raise serializers.ValidationError('Deck does not belong to you.')
        return value


class WordBulkImportSerializer(serializers.Serializer):
    """Serializer for bulk importing words into a deck."""
    
    deck_id = serializers.IntegerField()
    words = serializers.ListField(
        child=serializers.DictField(),
        min_length=1,
        max_length=200,
        help_text='List of word objects to import.'
    )
    
    def validate_deck_id(self, value):
        """Ensure deck exists and belongs to the current user."""
        try:
            deck = Deck.objects.get(id=value)
        except Deck.DoesNotExist:
            raise serializers.ValidationError('Deck not found.')
        if deck.user != self.context['request'].user:
            raise serializers.ValidationError('Deck does not belong to you.')
        return value
    
    def validate_words(self, value):
        """Validate each word in the list."""
        for i, word_data in enumerate(value):
            if 'term' not in word_data or not word_data['term'].strip():
                raise serializers.ValidationError(
                    f'Word at index {i} is missing a "term" field.'
                )
        return value


class CardReviewSerializer(serializers.ModelSerializer):
    """Serializer for card review data."""
    
    word_term = serializers.CharField(source='word.term', read_only=True)
    word_definition_vi = serializers.CharField(source='word.definition_vi', read_only=True)
    word_definition_en = serializers.CharField(source='word.definition_en', read_only=True)
    word_ipa = serializers.CharField(source='word.ipa', read_only=True)
    word_example_sentences = serializers.JSONField(source='word.example_sentences', read_only=True)
    word_image = serializers.ImageField(source='word.image', read_only=True)
    word_part_of_speech = serializers.CharField(source='word.part_of_speech', read_only=True)
    word_collocations = serializers.JSONField(source='word.collocations', read_only=True)
    word_synonyms = serializers.JSONField(source='word.synonyms', read_only=True)
    word_antonyms = serializers.JSONField(source='word.antonyms', read_only=True)
    word_context_paragraph = serializers.CharField(source='word.context_paragraph', read_only=True)
    word_user_notes = serializers.CharField(source='word.user_notes', read_only=True)
    word_user_explanation = serializers.CharField(source='word.user_explanation', read_only=True)
    word_audio_url = serializers.URLField(source='word.audio_url', read_only=True)
    deck_name = serializers.CharField(source='word.deck.name', read_only=True)
    
    class Meta:
        model = CardReview
        fields = (
            'id', 'word', 'word_term', 'word_definition_vi', 'word_definition_en',
            'word_ipa', 'word_example_sentences', 'word_image',
            'word_part_of_speech', 'word_collocations', 'word_synonyms',
            'word_antonyms', 'word_context_paragraph', 'word_user_notes',
            'word_user_explanation', 'word_audio_url', 'deck_name',
            'repetitions', 'ease_factor', 'interval', 'next_review_date',
            'leitner_box', 'status', 'quality_history',
            'total_reviews', 'correct_count', 'last_reviewed_at',
            'created_at', 'updated_at',
        )
        read_only_fields = fields


class ReviewSubmitSerializer(serializers.Serializer):
    """Serializer for submitting a review (SM-2 or Leitner)."""
    
    ALGORITHM_CHOICES = [('sm2', 'SM-2'), ('leitner', 'Leitner')]
    
    word_id = serializers.IntegerField(help_text='ID of the word being reviewed.')
    algorithm = serializers.ChoiceField(
        choices=ALGORITHM_CHOICES,
        default='sm2',
        help_text='Which SRS algorithm to use.'
    )
    quality = serializers.IntegerField(
        required=False, min_value=0, max_value=5,
        help_text='Quality rating for SM-2 (0-5).'
    )
    correct = serializers.BooleanField(
        required=False,
        help_text='Whether the answer was correct (for Leitner).'
    )
    
    def validate(self, attrs):
        algorithm = attrs.get('algorithm', 'sm2')
        if algorithm == 'sm2' and 'quality' not in attrs:
            raise serializers.ValidationError({
                'quality': 'Quality rating is required for SM-2 algorithm.'
            })
        if algorithm == 'leitner' and 'correct' not in attrs:
            raise serializers.ValidationError({
                'correct': 'Correct field is required for Leitner algorithm.'
            })
        return attrs


class SRSStatsSerializer(serializers.Serializer):
    """Serializer for SRS statistics response."""
    
    status = serializers.DictField(child=serializers.IntegerField())
    leitner_boxes = serializers.DictField(child=serializers.IntegerField())
    due_count = serializers.IntegerField()
    total = serializers.IntegerField()
