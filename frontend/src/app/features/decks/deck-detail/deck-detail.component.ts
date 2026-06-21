import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { Deck, Word } from '../../../core/models';
import { CreateFlashcardModalComponent } from './create-flashcard-modal/create-flashcard-modal.component';

@Component({
  selector: 'app-deck-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, CreateFlashcardModalComponent],
  templateUrl: './deck-detail.component.html',
  styleUrl: './deck-detail.component.scss'
})
export class DeckDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);

  deckId!: number;
  deck: Deck | null = null;
  words: Word[] = [];
  isLoading = true;
  searchQuery = '';

  showCreateModal = false;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.deckId = +id;
        this.loadDeckData();
      }
    });
  }

  loadDeckData() {
    this.isLoading = true;
    this.apiService.getDeck(this.deckId).subscribe({
      next: (deck) => {
        this.deck = deck;
        this.loadWords();
      },
      error: (err) => {
        console.error('Error loading deck:', err);
        this.isLoading = false;
      }
    });
  }

  loadWords() {
    this.apiService.getWords(this.deckId, this.searchQuery).subscribe({
      next: (words) => {
        this.words = words;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading words:', err);
        this.isLoading = false;
      }
    });
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
    this.loadWords();
  }

  openCreateModal() {
    this.showCreateModal = true;
  }

  closeCreateModal(newWord?: Word) {
    this.showCreateModal = false;
    if (newWord) {
      this.words.unshift(newWord);
      if (this.deck) this.deck.word_count = (this.deck.word_count || 0) + 1;
    }
  }

  deleteWord(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa từ vựng này?')) {
      this.apiService.deleteWord(id).subscribe({
        next: () => {
          this.words = this.words.filter(w => w.id !== id);
          if (this.deck && this.deck.word_count) this.deck.word_count -= 1;
        },
        error: (err) => console.error('Error deleting word:', err)
      });
    }
  }
}
