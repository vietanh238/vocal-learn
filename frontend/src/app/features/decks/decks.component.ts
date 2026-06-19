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

  ngOnInit() {
    this.loadDecks();
  }

  loadDecks() {
    this.apiService.getDecks().subscribe({
      next: (decks: Deck[]) => {
        this.decks = decks;
      },
      error: (err: any) => {
        console.error('Failed to load decks:', err);
      }
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

  deleteDeck(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa bộ thẻ này không? Tất cả từ vựng đi kèm cũng sẽ bị xóa.')) {
      this.apiService.deleteDeck(id).subscribe({
        next: () => {
          this.decks = this.decks.filter(d => d.id !== id);
          alert('Đã xóa bộ thẻ thành công!');
        },
        error: (err: any) => {
          console.error('Failed to delete deck:', err);
        }
      });
    }
  }
}
