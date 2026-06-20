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
  isLoading = true;
  isSubmitting = false;

  // Study Mode: 'flashcard' | 'spelling'
  studyMode: 'flashcard' | 'spelling' = 'flashcard';

  // Spelling Mode variables
  spellingAnswer = '';
  shuffledLetters: string[] = [];
  shownHintsCount = 0;

  // Feynman
  feynmanEnabled = true;
  srsAlgorithm = 'sm2';
  userExplanation = '';
  isSavingExplanation = false;
  feynmanSaved = false;

  // Session stats
  sessionCorrect = 0;
  sessionTotal = 0;
  lastRating: string | null = null;

  stats = { new: 0, learning: 0, due: 0 };

  ngOnInit() {
    this.feynmanEnabled = localStorage.getItem('feynman_enabled') !== 'false';
    this.srsAlgorithm  = localStorage.getItem('srs_algorithm') || 'sm2';

    this.route.paramMap.subscribe(params => {
      const mode = params.get('mode') || 'today';
      let deckIds: number[] | undefined;

      if (mode.startsWith('deck-')) {
        const id = Number(mode.split('-')[1]);
        if (!isNaN(id)) deckIds = [id];
      }
      this.loadDueCards(deckIds);
    });
  }

  loadDueCards(deckIds?: number[]) {
    this.isLoading = true;
    this.apiService.getDueCards(deckIds).subscribe({
      next: (res) => {
        this.dueCards = res.cards;
        this.currentIndex = 0;
        this.isLoading = false;
        this.updateStats();
        this.onCardActive();
      },
      error: () => { this.isLoading = false; }
    });
  }

  updateStats() {
    this.stats.due = this.dueCards.length - this.currentIndex;
    let newCount = 0, learningCount = 0;
    for (let i = this.currentIndex; i < this.dueCards.length; i++) {
      const s = this.dueCards[i].status;
      if (s === 'new') newCount++;
      else if (s === 'learning' || s === 'relearn') learningCount++;
    }
    this.stats.new = newCount;
    this.stats.learning = learningCount;
  }

  get currentCard(): CardReview | null {
    return (this.currentIndex >= 0 && this.currentIndex < this.dueCards.length)
      ? this.dueCards[this.currentIndex]
      : null;
  }

  get progressPercent(): number {
    if (this.dueCards.length === 0) return 100;
    return Math.round((this.currentIndex / this.dueCards.length) * 100);
  }

  get accuracyPercent(): number {
    if (this.sessionTotal === 0) return 0;
    return Math.round((this.sessionCorrect / this.sessionTotal) * 100);
  }

  onCardActive() {
    const card = this.currentCard;
    if (!card) return;

    this.setupSpellingExercise();

    if (this.studyMode === 'spelling') {
      setTimeout(() => this.speakWord(card.word_term), 100);
    }
  }

  setStudyMode(mode: 'flashcard' | 'spelling') {
    this.studyMode = mode;
    if (mode === 'spelling' && this.currentCard) {
      this.speakWord(this.currentCard.word_term);
    }
  }

  // Text-To-Speech (TTS) Pronunciation
  speakWord(term: string) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(term);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn('Speech synthesis not supported in this browser');
    }
  }

  // Spelling exercise setup
  setupSpellingExercise() {
    const card = this.currentCard;
    if (!card) return;

    const term = card.word_term.trim();
    this.spellingAnswer = '';
    this.shownHintsCount = 0;

    // Filter alphabet letters to build shuffled letter tiles
    const letters = term.replace(/[^a-zA-Z]/g, '').toUpperCase().split('');
    // Fisher-Yates shuffle
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    this.shuffledLetters = letters;
  }

  handleLetterClick(letter: string) {
    const term = this.currentCard?.word_term || '';
    if (this.spellingAnswer.length < term.length) {
      this.spellingAnswer += letter.toLowerCase();
      this.onSpellingInputChange();
    }
  }

  onSpellingInputChange() {
    // Keep letters, spaces and hyphens
    this.spellingAnswer = this.spellingAnswer.replace(/[^a-zA-Z\s\-]/g, '');
    this.checkSpellingCompletion();
  }

  getLetterState(index: number): 'correct' | 'wrong' | 'empty' | 'special' {
    const term = (this.currentCard?.word_term || '').toLowerCase();
    if (index >= term.length) return 'empty';

    const targetChar = term[index];
    if (targetChar === ' ' || targetChar === '-' || targetChar === '_') {
      return 'special';
    }

    if (index >= this.spellingAnswer.length) {
      return 'empty';
    }

    const typedChar = this.spellingAnswer[index].toLowerCase();
    return typedChar === targetChar ? 'correct' : 'wrong';
  }

  revealHint() {
    const term = (this.currentCard?.word_term || '').toLowerCase();
    if (this.spellingAnswer.length < term.length) {
      const nextCorrectChar = term[this.spellingAnswer.length];
      if (nextCorrectChar) {
        this.spellingAnswer += nextCorrectChar;
        this.shownHintsCount++;
        this.checkSpellingCompletion();
      }
    }
  }

  clearSpelling() {
    this.spellingAnswer = '';
  }

  checkSpellingCompletion() {
    const term = (this.currentCard?.word_term || '').trim().toLowerCase();
    if (this.spellingAnswer.trim().toLowerCase() === term) {
      // Auto-submit as Good (quality 5) after a delay
      setTimeout(() => {
        this.submitReview(5);
      }, 700);
    }
  }

  flipCard() {
    if (!this.isFlipped) {
      this.isFlipped = true;
      this.feynmanSaved = false;
      const card = this.currentCard;
      if (card) this.userExplanation = card.word_user_explanation || '';
    }
  }

  saveFeynmanExplanation() {
    const card = this.currentCard;
    if (!card || !this.userExplanation.trim()) return;

    this.isSavingExplanation = true;
    this.apiService.patchWord(card.word, { user_explanation: this.userExplanation }).subscribe({
      next: (updatedWord) => {
        card.word_user_explanation = updatedWord.user_explanation;
        this.isSavingExplanation = false;
        this.feynmanSaved = true;
      },
      error: () => { this.isSavingExplanation = false; }
    });
  }

  submitReview(quality: number) {
    const card = this.currentCard;
    if (!card || this.isSubmitting) return;

    this.isSubmitting = true;
    this.sessionTotal++;

    let payload: any = { word_id: card.word, algorithm: this.srsAlgorithm };

    if (this.srsAlgorithm === 'sm2') {
      payload.quality = quality;
      this.lastRating = quality >= 4 ? 'good' : quality >= 3 ? 'hard' : 'again';
      if (quality >= 3) this.sessionCorrect++;
    } else {
      payload.correct = quality >= 3;
      this.lastRating = quality >= 3 ? 'good' : 'again';
      if (quality >= 3) this.sessionCorrect++;
    }

    this.apiService.submitReview(payload).subscribe({
      next: () => {
        window.dispatchEvent(new Event('statsUpdated'));
        setTimeout(() => this.proceedToNext(), 300);
      },
      error: () => { setTimeout(() => this.proceedToNext(), 300); }
    });
  }

  private proceedToNext() {
    this.isFlipped = false;
    this.userExplanation = '';
    this.feynmanSaved = false;
    this.isSubmitting = false;
    this.lastRating = null;

    setTimeout(() => {
      this.currentIndex++;
      this.updateStats();
      this.onCardActive();
    }, 180);
  }

  getRatingLabel(quality: number): string {
    if (this.srsAlgorithm === 'leitner') return quality >= 3 ? 'Correct ✓' : 'Incorrect ✗';
    const labels: Record<number, string> = { 1: 'Again', 2: 'Hard', 4: 'Good', 5: 'Easy' };
    return labels[quality] || '';
  }
}
