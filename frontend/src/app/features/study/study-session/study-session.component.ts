import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { CardReview } from '../../../core/models';

@Component({
  selector: 'app-study-session',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './study-session.component.html',
  styleUrl: './study-session.component.scss'
})
export class StudySessionComponent implements OnInit {
  private apiService = inject(ApiService);
  private route = inject(ActivatedRoute);

  isFlipped = false;
  dueCards: CardReview[] = [];
  currentIndex = 0;
  
  // Settings loaded from LocalStorage
  feynmanEnabled = true;
  srsAlgorithm = 'sm2';
  
  // Local state for Feynman input
  userExplanation = '';
  isSavingExplanation = false;

  stats = {
    new: 0,
    learning: 0,
    due: 0
  };

  ngOnInit() {
    // Load local settings
    this.feynmanEnabled = localStorage.getItem('feynman_enabled') !== 'false';
    this.srsAlgorithm = localStorage.getItem('srs_algorithm') || 'sm2';

    // Parse route parameter
    this.route.paramMap.subscribe(params => {
      const mode = params.get('mode') || 'today';
      let deckIds: number[] | undefined = undefined;

      if (mode.startsWith('deck-')) {
        const deckId = Number(mode.split('-')[1]);
        if (!isNaN(deckId)) {
          deckIds = [deckId];
        }
      }

      this.loadDueCards(deckIds);
    });
  }

  loadDueCards(deckIds?: number[]) {
    this.apiService.getDueCards(deckIds).subscribe({
      next: (res) => {
        this.dueCards = res.cards;
        this.currentIndex = 0;
        this.updateStats();
      },
      error: (err) => {
        console.error('Failed to load due cards:', err);
      }
    });
  }

  updateStats() {
    this.stats.due = this.dueCards.length - this.currentIndex;
    
    // Count stats for remaining cards
    let newCount = 0;
    let learningCount = 0;
    
    for (let i = this.currentIndex; i < this.dueCards.length; i++) {
      const status = this.dueCards[i].status;
      if (status === 'new') {
        newCount++;
      } else if (status === 'learning' || status === 'relearn') {
        learningCount++;
      }
    }
    
    this.stats.new = newCount;
    this.stats.learning = learningCount;
  }

  get currentCard() {
    if (this.currentIndex >= 0 && this.currentIndex < this.dueCards.length) {
      return this.dueCards[this.currentIndex];
    }
    return null;
  }

  flipCard() {
    if (!this.isFlipped) {
      this.isFlipped = true;
      // Pre-fill feynman explanation from current card
      const card = this.currentCard;
      if (card) {
        this.userExplanation = card.word_user_explanation || '';
      }
    }
  }

  saveFeynmanExplanation() {
    const card = this.currentCard;
    if (!card) return;

    this.isSavingExplanation = true;
    this.apiService.updateWord(card.word, { user_explanation: this.userExplanation }).subscribe({
      next: (updatedWord) => {
        card.word_user_explanation = updatedWord.user_explanation;
        this.isSavingExplanation = false;
        alert('Đã lưu lời giải thích của bạn!');
      },
      error: (err) => {
        console.error('Failed to save explanation:', err);
        this.isSavingExplanation = false;
      }
    });
  }

  submitReview(quality: number) {
    const card = this.currentCard;
    if (!card) return;

    // Depending on the algorithm selected in settings:
    let payload: any = {
      word_id: card.word,
      algorithm: this.srsAlgorithm
    };

    if (this.srsAlgorithm === 'sm2') {
      payload.quality = quality; // 1, 2, 4, 5
    } else {
      // Leitner system: Q >= 3 is correct (true), Q < 3 is incorrect (false)
      payload.correct = quality >= 3;
    }

    this.apiService.submitReview(payload).subscribe({
      next: (res) => {
        console.log('Review submitted successfully:', res);
        window.dispatchEvent(new Event('statsUpdated'));
        this.proceedToNext();
      },
      error: (err) => {
        console.error('Failed to submit review:', err);
        // Fallback: still proceed to next card in UI
        this.proceedToNext();
      }
    });
  }

  private proceedToNext() {
    this.isFlipped = false;
    this.userExplanation = '';
    
    // Slight delay for flip animation reset
    setTimeout(() => {
      this.currentIndex++;
      this.updateStats();
    }, 150);
  }
}
