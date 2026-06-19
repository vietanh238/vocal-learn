import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { Deck } from '../../core/models';

@Component({
  selector: 'app-decks',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './decks.component.html',
  styleUrl: './decks.component.scss'
})
export class DecksComponent implements OnInit {
  private apiService = inject(ApiService);
  decks: Deck[] = [];
  isLoading = true;

  // Cycle through icons for visual variety
  private deckIcons = ['📘', '📗', '📙', '📕', '📒', '📓', '📔', '🗂️'];
  private deckColors = [
    'rgba(96, 165, 250, 0.1)',
    'rgba(74, 222, 128, 0.1)',
    'rgba(251, 146, 60, 0.1)',
    'rgba(244, 114, 182, 0.1)',
    'rgba(167, 139, 250, 0.1)',
    'rgba(45, 212, 191, 0.1)',
  ];

  getDeckIcon(index: number): string {
    return this.deckIcons[index % this.deckIcons.length];
  }
  getDeckColor(index: number): string {
    return this.deckColors[index % this.deckColors.length];
  }

  ngOnInit() {
    this.loadDecks();
  }

  loadDecks() {
    this.isLoading = true;
    this.apiService.getDecks().subscribe({
      next: (decks: Deck[]) => {
        this.decks = decks;
        this.isLoading = false;
      },
      error: () => { this.isLoading = false; }
    });
  }

  createDeck() {
    const name = prompt('Nhập tên bộ thẻ mới:');
    if (!name || !name.trim()) return;

    this.apiService.createDeck({ name: name.trim() }).subscribe({
      next: (newDeck: Deck) => {
        this.decks.unshift(newDeck);
      },
      error: (err: any) => {
        console.error('Failed to create deck:', err);
      }
    });
  }

  deleteDeck(id: number, event: Event) {
    event.stopPropagation();
    if (confirm('Bạn có chắc chắn muốn xóa bộ thẻ này? Tất cả từ vựng đi kèm cũng sẽ bị xóa.')) {
      this.apiService.deleteDeck(id).subscribe({
        next: () => {
          this.decks = this.decks.filter(d => d.id !== id);
        },
        error: (err: any) => console.error('Failed to delete deck:', err)
      });
    }
  }
}
