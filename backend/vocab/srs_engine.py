"""
Spaced Repetition System (SRS) engine.
Implements SM-2 algorithm and Leitner Box system for vocabulary review scheduling.
"""
import random
from datetime import date, timedelta

from django.db import models

from .models import CardReview


def sm2_review(card: CardReview, quality: int) -> CardReview:
    """
    SM-2 Spaced Repetition Algorithm.
    
    Args:
        card: The CardReview instance to update.
        quality: Rating from 0-5:
            0 = Complete blackout (Again button)
            1 = Incorrect, but remembered vaguely
            2 = Incorrect, but easy to recall (Hard button)
            3 = Correct with serious difficulty
            4 = Correct with hesitation (Good button)
            5 = Perfect recall (Easy button)
    
    Returns:
        Updated CardReview instance (not yet saved).
    """
    if quality >= 3:  # Correct answer
        if card.repetitions == 0:
            card.interval = 1
        elif card.repetitions == 1:
            card.interval = 6
        else:
            card.interval = round(card.interval * card.ease_factor)
        card.repetitions += 1
        card.correct_count += 1
    else:  # Incorrect answer
        card.repetitions = 0
        card.interval = 1
    
    # Update ease factor using SM-2 formula
    card.ease_factor += (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    if card.ease_factor < 1.3:
        card.ease_factor = 1.3
    
    # Update status based on interval
    if card.repetitions == 0:
        card.status = 'relearn' if card.total_reviews > 0 else 'new'
    elif card.interval < 7:
        card.status = 'learning'
    elif card.interval < 21:
        card.status = 'young'
    else:
        card.status = 'mature'
    
    # Update review statistics
    card.total_reviews += 1
    history = card.quality_history or []
    history.append(quality)
    card.quality_history = history
    card.last_reviewed_at = date.today()
    card.next_review_date = date.today() + timedelta(days=card.interval)
    
    return card


def leitner_review(card: CardReview, correct: bool) -> CardReview:
    """
    Leitner Box System.
    
    Correct: Move up one box (max 5).
    Incorrect: Reset to box 1.
    
    Box intervals: {1: 1, 2: 2, 3: 4, 4: 9, 5: 14} days.
    
    Args:
        card: The CardReview instance to update.
        correct: Whether the answer was correct.
    
    Returns:
        Updated CardReview instance (not yet saved).
    """
    BOX_INTERVALS = {1: 1, 2: 2, 3: 4, 4: 9, 5: 14}
    
    if correct:
        card.leitner_box = min(card.leitner_box + 1, 5)
        card.correct_count += 1
    else:
        card.leitner_box = 1
    
    interval = BOX_INTERVALS.get(card.leitner_box, 14)
    card.interval = interval
    card.next_review_date = date.today() + timedelta(days=interval)
    
    # Update status based on box number
    if card.leitner_box <= 1:
        card.status = 'new' if card.total_reviews == 0 else 'relearn'
    elif card.leitner_box == 2:
        card.status = 'learning'
    elif card.leitner_box == 3:
        card.status = 'young'
    else:
        card.status = 'mature'
    
    card.total_reviews += 1
    history = card.quality_history or []
    history.append(5 if correct else 0)
    card.quality_history = history
    card.last_reviewed_at = date.today()
    
    return card


def get_due_cards(user, deck_ids=None, max_cards=30):
    """
    Get cards due for review with interleaving.
    
    Priority order: overdue > new > learning > young > mature.
    Interleaving: max 3 consecutive cards from the same deck.
    
    Args:
        user: The user whose cards to fetch.
        deck_ids: Optional list of deck IDs to filter by.
        max_cards: Maximum number of cards to return (default 30).
    
    Returns:
        List of CardReview instances due for review.
    """
    today = date.today()
    
    queryset = CardReview.objects.filter(user=user)
    if deck_ids:
        queryset = queryset.filter(word__deck_id__in=deck_ids)
    
    # Get due cards (next_review_date <= today or new cards with no review date)
    due_cards = list(
        queryset.filter(
            models.Q(next_review_date__lte=today) | models.Q(next_review_date__isnull=True)
        ).select_related('word', 'word__deck')
        .order_by(
            models.Case(
                models.When(status='relearn', then=0),
                models.When(status='new', then=1),
                models.When(status='learning', then=2),
                models.When(status='young', then=3),
                models.When(status='mature', then=4),
                default=5,
                output_field=models.IntegerField(),
            )
        )[:max_cards * 2]  # Get extra for interleaving
    )
    
    if not due_cards:
        return []
    
    # Apply interleaving — shuffle within same priority, max 3 consecutive from same deck
    priority_map = {'relearn': 0, 'new': 1, 'learning': 2, 'young': 3, 'mature': 4}
    remaining = list(due_cards)
    random.shuffle(remaining)
    remaining.sort(key=lambda c: (priority_map.get(c.status, 5), random.random()))
    
    interleaved = []
    consecutive_deck = 0
    last_deck_id = None
    skipped = []
    
    for card in remaining:
        if len(interleaved) >= max_cards:
            break
        
        current_deck = card.word.deck_id
        if current_deck == last_deck_id:
            consecutive_deck += 1
            if consecutive_deck >= 3:
                skipped.append(card)
                continue
        else:
            consecutive_deck = 1
            last_deck_id = current_deck
        
        interleaved.append(card)
    
    # Fill remaining slots with skipped cards
    for card in skipped:
        if len(interleaved) >= max_cards:
            break
        interleaved.append(card)
    
    return interleaved


def get_srs_stats(user, deck_ids=None):
    """
    Get SRS statistics for the user.
    
    Returns count per status, per Leitner box, due count, and total.
    
    Args:
        user: The user to get stats for.
        deck_ids: Optional list of deck IDs to filter by.
    
    Returns:
        Dictionary with status counts, Leitner box counts, due count, and total.
    """
    from django.db.models import Count, Q
    
    queryset = CardReview.objects.filter(user=user)
    if deck_ids:
        queryset = queryset.filter(word__deck_id__in=deck_ids)
    
    status_stats = dict(
        queryset.values('status')
        .annotate(count=Count('id'))
        .values_list('status', 'count')
    )
    
    box_stats = dict(
        queryset.values('leitner_box')
        .annotate(count=Count('id'))
        .values_list('leitner_box', 'count')
    )
    
    today = date.today()
    due_count = queryset.filter(
        Q(next_review_date__lte=today) | Q(next_review_date__isnull=True)
    ).count()
    
    return {
        'status': {
            'new': status_stats.get('new', 0),
            'learning': status_stats.get('learning', 0),
            'young': status_stats.get('young', 0),
            'mature': status_stats.get('mature', 0),
            'relearn': status_stats.get('relearn', 0),
        },
        'leitner_boxes': {
            1: box_stats.get(1, 0),
            2: box_stats.get(2, 0),
            3: box_stats.get(3, 0),
            4: box_stats.get(4, 0),
            5: box_stats.get(5, 0),
        },
        'due_count': due_count,
        'total': queryset.count(),
    }
