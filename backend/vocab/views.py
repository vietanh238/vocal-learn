"""
Views for the vocabulary system: CRUD for folders, decks, words,
and spaced repetition review endpoints.
"""
from datetime import date

from django.db.models import Count, Q
from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend

from .models import Folder, Deck, Word, CardReview
from .serializers import (
    FolderSerializer,
    DeckSerializer,
    WordSerializer,
    WordBulkImportSerializer,
    CardReviewSerializer,
    ReviewSubmitSerializer,
    SRSStatsSerializer,
)
from .srs_engine import sm2_review, leitner_review, get_due_cards, get_srs_stats


class FolderViewSet(viewsets.ModelViewSet):
    """
    CRUD operations for vocabulary folders.
    
    list:   GET    /api/folders/
    create: POST   /api/folders/
    read:   GET    /api/folders/{id}/
    update: PUT    /api/folders/{id}/
    delete: DELETE /api/folders/{id}/
    """
    serializer_class = FolderSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = None
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['name', 'description']
    ordering_fields = ['name', 'created_at', 'updated_at']
    
    def get_queryset(self):
        return Folder.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class DeckViewSet(viewsets.ModelViewSet):
    """
    CRUD operations for vocabulary decks.
    
    list:   GET    /api/decks/
    create: POST   /api/decks/
    read:   GET    /api/decks/{id}/
    update: PUT    /api/decks/{id}/
    delete: DELETE /api/decks/{id}/
    """
    serializer_class = DeckSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = None
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['folder']
    search_fields = ['name', 'description']
    ordering_fields = ['name', 'created_at', 'updated_at']
    
    def get_queryset(self):
        return (
            Deck.objects.filter(user=self.request.user)
            .annotate(_word_count=Count('words'))
            .select_related('folder')
        )
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class WordViewSet(viewsets.ModelViewSet):
    """
    CRUD operations for vocabulary words.
    
    list:        GET    /api/words/
    create:      POST   /api/words/
    read:        GET    /api/words/{id}/
    update:      PUT    /api/words/{id}/
    delete:      DELETE /api/words/{id}/
    bulk_import: POST   /api/words/bulk_import/
    search:      GET    /api/words/search/?q=term
    """
    serializer_class = WordSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = None
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['deck', 'part_of_speech']
    search_fields = ['term', 'definition_en', 'definition_vi']
    ordering_fields = ['term', 'created_at', 'updated_at', 'part_of_speech']
    
    def get_queryset(self):
        return Word.objects.filter(user=self.request.user).select_related('deck')
    
    def perform_create(self, serializer):
        word = serializer.save(user=self.request.user)
        # Automatically create a CardReview entry for the new word
        CardReview.objects.get_or_create(
            user=self.request.user,
            word=word,
            defaults={'status': 'new'}
        )
    
    @action(detail=False, methods=['post'], url_path='bulk_import')
    def bulk_import(self, request):
        """
        POST /api/words/bulk_import/
        Bulk import words into a deck. Creates words additively (skips duplicates).
        
        Payload:
        {
            "deck_id": 1,
            "words": [
                {"term": "word", "definition_vi": "nghĩa", ...},
                ...
            ]
        }
        """
        serializer = WordBulkImportSerializer(
            data=request.data,
            context={'request': request}
        )
        serializer.is_valid(raise_exception=True)
        
        deck_id = serializer.validated_data['deck_id']
        words_data = serializer.validated_data['words']
        deck = Deck.objects.get(id=deck_id)
        
        created_words = []
        skipped_words = []
        errors = []
        
        for word_data in words_data:
            term = word_data.get('term', '').strip()
            if not term:
                continue
            
            # Check for duplicate
            if Word.objects.filter(user=request.user, deck=deck, term=term).exists():
                skipped_words.append(term)
                continue
            
            try:
                word = Word.objects.create(
                    user=request.user,
                    deck=deck,
                    term=term,
                    ipa=word_data.get('ipa', ''),
                    part_of_speech=word_data.get('part_of_speech', 'noun'),
                    definition_en=word_data.get('definition_en', ''),
                    definition_vi=word_data.get('definition_vi', ''),
                    example_sentences=word_data.get('example_sentences', []),
                    audio_url=word_data.get('audio_url', ''),
                    collocations=word_data.get('collocations', []),
                    synonyms=word_data.get('synonyms', []),
                    antonyms=word_data.get('antonyms', []),
                    context_paragraph=word_data.get('context_paragraph', ''),
                    user_notes=word_data.get('user_notes', ''),
                    user_explanation=word_data.get('user_explanation', ''),
                )
                # Create CardReview for the new word
                CardReview.objects.get_or_create(
                    user=request.user,
                    word=word,
                    defaults={'status': 'new'}
                )
                created_words.append(term)
            except Exception as e:
                errors.append({'term': term, 'error': str(e)})
        
        return Response({
            'message': f'Imported {len(created_words)} words.',
            'created': created_words,
            'skipped': skipped_words,
            'errors': errors,
        }, status=status.HTTP_201_CREATED)
    
    @action(detail=False, methods=['get'], url_path='search')
    def search(self, request):
        """
        GET /api/words/search/?q=term&deck=1
        Search words by term, definition, or notes.
        """
        query = request.query_params.get('q', '').strip()
        deck_id = request.query_params.get('deck', None)
        
        if not query:
            return Response(
                {'error': 'Search query "q" is required.'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        queryset = self.get_queryset().filter(
            Q(term__icontains=query) |
            Q(definition_en__icontains=query) |
            Q(definition_vi__icontains=query) |
            Q(user_notes__icontains=query)
        )
        
        if deck_id:
            queryset = queryset.filter(deck_id=deck_id)
        
        serializer = self.get_serializer(queryset[:50], many=True)
        return Response(serializer.data)


class ReviewViewSet(viewsets.GenericViewSet):
    """
    Spaced repetition review endpoints.
    
    due_cards:     GET  /api/reviews/due_cards/?deck=1,2
    submit_review: POST /api/reviews/submit_review/
    stats:         GET  /api/reviews/stats/?deck=1,2
    """
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return CardReview.objects.filter(user=self.request.user)
    
    @action(detail=False, methods=['get'], url_path='due_cards')
    def due_cards(self, request):
        """
        GET /api/reviews/due_cards/?deck=1,2&max_cards=30
        Get cards due for review with interleaving.
        """
        deck_param = request.query_params.get('deck', '')
        max_cards = int(request.query_params.get('max_cards', 30))
        
        deck_ids = None
        if deck_param:
            try:
                deck_ids = [int(d) for d in deck_param.split(',')]
            except ValueError:
                return Response(
                    {'error': 'Invalid deck IDs. Use comma-separated integers.'},
                    status=status.HTTP_400_BAD_REQUEST
                )
        
        cards = get_due_cards(request.user, deck_ids=deck_ids, max_cards=max_cards)
        serializer = CardReviewSerializer(cards, many=True, context={'request': request})
        return Response({
            'count': len(cards),
            'cards': serializer.data,
        })
    
    @action(detail=False, methods=['post'], url_path='submit_review')
    def submit_review(self, request):
        """
        POST /api/reviews/submit_review/
        Submit a review for a word using SM-2 or Leitner algorithm.
        
        Payload:
        {
            "word_id": 1,
            "algorithm": "sm2",  // or "leitner"
            "quality": 4,        // for SM-2 (0-5)
            "correct": true      // for Leitner
        }
        """
        serializer = ReviewSubmitSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        word_id = serializer.validated_data['word_id']
        algorithm = serializer.validated_data.get('algorithm', 'sm2')
        
        # Get or create CardReview
        try:
            word = Word.objects.get(id=word_id, user=request.user)
        except Word.DoesNotExist:
            return Response(
                {'error': 'Word not found.'},
                status=status.HTTP_404_NOT_FOUND
            )
        
        card, created = CardReview.objects.get_or_create(
            user=request.user,
            word=word,
            defaults={'status': 'new'}
        )
        
        # Apply the chosen algorithm
        if algorithm == 'sm2':
            quality = serializer.validated_data['quality']
            card = sm2_review(card, quality)
        else:
            correct = serializer.validated_data['correct']
            card = leitner_review(card, correct)
        
        card.save()
        
        result_serializer = CardReviewSerializer(card, context={'request': request})
        return Response({
            'message': 'Review submitted successfully.',
            'card': result_serializer.data,
        })
    
    @action(detail=False, methods=['get'], url_path='stats')
    def stats(self, request):
        """
        GET /api/reviews/stats/?deck=1,2
        Get SRS statistics for the user.
        """
        deck_param = request.query_params.get('deck', '')
        
        deck_ids = None
        if deck_param:
            try:
                deck_ids = [int(d) for d in deck_param.split(',')]
            except ValueError:
                return Response(
                    {'error': 'Invalid deck IDs.'},
                    status=status.HTTP_400_BAD_REQUEST
                )
        
        stats_data = get_srs_stats(request.user, deck_ids=deck_ids)
        serializer = SRSStatsSerializer(stats_data)
        return Response(serializer.data)
