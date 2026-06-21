import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../../core/services/api.service';
import { Word } from '../../../../core/models';

@Component({
  selector: 'app-create-flashcard-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-flashcard-modal.component.html',
  styleUrl: './create-flashcard-modal.component.scss'
})
export class CreateFlashcardModalComponent {
  @Input() deckId!: number;
  @Output() closeModal = new EventEmitter<Word | undefined>();

  private apiService = inject(ApiService);

  activeTab: 'ai' | 'manual' = 'manual';
  isSaving = false;

  // AI State
  aiJsonText = '';

  // Manual State
  wordData = {
    term: '',
    definition_vi: '',
    ipa: '',
    part_of_speech: 'noun',
    category: 'Daily Life',
    icon: '',
    description_en: '',
    description_vi: ''
  };

  examples: {en: string, vi: string}[] = [];
  currentExampleEn = '';
  currentExampleVi = '';

  partsOfSpeech = [
    { value: 'noun', label: 'Danh từ (Noun)' },
    { value: 'verb', label: 'Động từ (Verb)' },
    { value: 'adj', label: 'Tính từ (Adjective)' },
    { value: 'adv', label: 'Trạng từ (Adverb)' },
    { value: 'prep', label: 'Giới từ (Preposition)' },
    { value: 'conj', label: 'Liên từ (Conjunction)' },
    { value: 'interj', label: 'Thán từ (Interjection)' },
    { value: 'pron', label: 'Đại từ (Pronoun)' },
    { value: 'phrase', label: 'Cụm từ (Phrase)' }
  ];

  addExample() {
    if (this.currentExampleEn.trim() && this.currentExampleVi.trim()) {
      this.examples.push({
        en: this.currentExampleEn.trim(),
        vi: this.currentExampleVi.trim()
      });
      this.currentExampleEn = '';
      this.currentExampleVi = '';
    }
  }

  removeExample(index: number) {
    this.examples.splice(index, 1);
  }

  saveWord() {
    if (this.activeTab === 'manual') {
      if (!this.wordData.term || !this.wordData.definition_vi) {
        alert('Vui lòng nhập từ và nghĩa.');
        return;
      }
      
      this.isSaving = true;
      const data: Partial<Word> = {
        deck: this.deckId as any,
        term: this.wordData.term,
        definition_vi: this.wordData.definition_vi,
        ipa: this.wordData.ipa,
        part_of_speech: this.wordData.part_of_speech,
        example_sentences: this.examples
      };

      this.apiService.createWord(data).subscribe({
        next: (word) => {
          this.isSaving = false;
          this.closeModal.emit(word);
        },
        error: (err) => {
          console.error(err);
          alert('Có lỗi xảy ra khi lưu từ.');
          this.isSaving = false;
        }
      });
    } else {
      // AI Tab
      if (!this.aiJsonText.trim()) return;
      this.isSaving = true;
      
      this.apiService.parseAIResult(this.aiJsonText, this.deckId).subscribe({
        next: (words) => {
          this.isSaving = false;
          // Just close and let parent refresh, or emit the first word.
          // SeaVoca might show a success toast. Let's close and let parent reload.
          this.closeModal.emit(words[0]); // Return first to update list locally
        },
        error: (err) => {
          console.error(err);
          alert('Có lỗi khi xử lý JSON AI.');
          this.isSaving = false;
        }
      });
    }
  }

  cancel() {
    this.closeModal.emit();
  }
}
