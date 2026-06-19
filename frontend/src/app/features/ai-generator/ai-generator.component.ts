import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Deck } from '../../core/models';

@Component({
  selector: 'app-ai-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-generator.component.html',
  styleUrl: './ai-generator.component.scss'
})
export class AiGeneratorComponent implements OnInit {
  private apiService = inject(ApiService);

  sourceWords = '';
  generatedPrompt = '';
  jsonInput = '';
  isLoading = false;
  generatedCards: any[] = [];
  decks: Deck[] = [];
  selectedDeckId: string = '';

  ngOnInit() {
    this.loadDecks();
  }

  loadDecks() {
    this.apiService.getDecks().subscribe({
      next: (decks: Deck[]) => {
        this.decks = decks;
        if (decks.length > 0) {
          this.selectedDeckId = decks[0].id.toString();
        } else {
          this.selectedDeckId = '';
        }
      },
      error: (err: any) => {
        console.error('Failed to load decks:', err);
      }
    });
  }

  onDeckChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'new') {
      const name = prompt('Nhập tên bộ thẻ mới:');
      if (!name || !name.trim()) {
        // Reset selection to the first deck if canceled
        if (this.decks.length > 0) {
          this.selectedDeckId = this.decks[0].id.toString();
        } else {
          this.selectedDeckId = '';
        }
        return;
      }

      this.apiService.createDeck({ name: name.trim() }).subscribe({
        next: (newDeck: Deck) => {
          this.decks.push(newDeck);
          this.selectedDeckId = newDeck.id.toString();
          alert(`Đã tạo bộ thẻ "${newDeck.name}" thành công!`);
        },
        error: (err: any) => {
          console.error('Failed to create deck:', err);
          alert('Không thể tạo bộ thẻ mới.');
        }
      });
    }
  }

  generatePrompt() {
    if (!this.sourceWords.trim()) return;

    this.generatedPrompt = `I want to create vocabulary flashcards for the following words:
${this.sourceWords}

Please output a JSON array of objects. Each object MUST have exactly these keys:
- "term" (the English word)
- "ipa" (the phonetic pronunciation)
- "part_of_speech" (e.g. noun, verb, adj)
- "definition_vi" (the Vietnamese meaning)
- "definition_en" (the English definition)
- "example_sentences" (an array containing exactly 1 example sentence string)

Do not include any other text or markdown formatting. Output ONLY the raw JSON array.`;
  }

  copyPrompt() {
    navigator.clipboard.writeText(this.generatedPrompt).then(() => {
      alert('Prompt copied to clipboard! Paste it into ChatGPT or Gemini.');
    });
  }

  parseJson() {
    try {
      this.isLoading = true;
      let cleanedJson = this.jsonInput.trim();
      
      // Remove potential markdown code blocks if the AI included them
      if (cleanedJson.startsWith('```json')) {
        cleanedJson = cleanedJson.replace(/```json/g, '').replace(/```/g, '').trim();
      } else if (cleanedJson.startsWith('```')) {
        cleanedJson = cleanedJson.replace(/```/g, '').trim();
      }

      const parsed = JSON.parse(cleanedJson);
      if (Array.isArray(parsed)) {
        this.generatedCards = parsed;
      } else {
        alert('Error: The JSON must be an array of objects.');
      }
    } catch (e) {
      alert('Invalid JSON! Please make sure you copied the exact JSON format from the AI.');
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }

  removeCard(index: number) {
    this.generatedCards.splice(index, 1);
  }

  saveToDeck() {
    if (!this.selectedDeckId || this.selectedDeckId === 'new') {
      alert('Vui lòng chọn hoặc tạo một bộ thẻ trước khi lưu.');
      return;
    }

    const deckId = Number(this.selectedDeckId);
    if (isNaN(deckId)) {
      alert('Bộ thẻ không hợp lệ.');
      return;
    }

    this.isLoading = true;
    this.apiService.bulkImportWords(deckId, this.generatedCards).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        alert(`Đã lưu thành công ${res.created?.length || 0} từ vựng vào bộ thẻ!`);
        this.generatedCards = [];
        this.sourceWords = '';
        this.generatedPrompt = '';
        this.jsonInput = '';
      },
      error: (err: any) => {
        this.isLoading = false;
        console.error('Failed to bulk import words:', err);
        alert('Có lỗi xảy ra khi lưu từ vựng. Vui lòng kiểm tra lại định dạng JSON.');
      }
    });
  }
}

