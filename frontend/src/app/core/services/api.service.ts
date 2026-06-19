import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Folder, Deck, Word, CardReview, SRSStats, StudySession, UserStatsData, Achievement } from '../models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly BASE_URL = 'http://localhost:8000/api';
  
  constructor(private http: HttpClient) {}
  
  // Folders
  getFolders(): Observable<Folder[]> { return this.http.get<Folder[]>(`${this.BASE_URL}/folders/`); }
  getFolder(id: number): Observable<Folder> { return this.http.get<Folder>(`${this.BASE_URL}/folders/${id}/`); }
  createFolder(data: Partial<Folder>): Observable<Folder> { return this.http.post<Folder>(`${this.BASE_URL}/folders/`, data); }
  updateFolder(id: number, data: Partial<Folder>): Observable<Folder> { return this.http.put<Folder>(`${this.BASE_URL}/folders/${id}/`, data); }
  deleteFolder(id: number): Observable<void> { return this.http.delete<void>(`${this.BASE_URL}/folders/${id}/`); }
  
  // Decks
  getDecks(folderId?: number): Observable<Deck[]> {
    let params = new HttpParams();
    if (folderId) params = params.set('folder', folderId.toString());
    return this.http.get<Deck[]>(`${this.BASE_URL}/decks/`, { params });
  }
  getDeck(id: number): Observable<Deck> { return this.http.get<Deck>(`${this.BASE_URL}/decks/${id}/`); }
  createDeck(data: Partial<Deck>): Observable<Deck> { return this.http.post<Deck>(`${this.BASE_URL}/decks/`, data); }
  updateDeck(id: number, data: Partial<Deck>): Observable<Deck> { return this.http.put<Deck>(`${this.BASE_URL}/decks/${id}/`, data); }
  deleteDeck(id: number): Observable<void> { return this.http.delete<void>(`${this.BASE_URL}/decks/${id}/`); }
  
  // Words
  getWords(deckId?: number, search?: string): Observable<Word[]> {
    let params = new HttpParams();
    if (deckId) params = params.set('deck', deckId.toString());
    if (search) params = params.set('search', search);
    return this.http.get<Word[]>(`${this.BASE_URL}/words/`, { params });
  }
  getWord(id: number): Observable<Word> { return this.http.get<Word>(`${this.BASE_URL}/words/${id}/`); }
  createWord(data: Partial<Word>): Observable<Word> { return this.http.post<Word>(`${this.BASE_URL}/words/`, data); }
  updateWord(id: number, data: Partial<Word>): Observable<Word> { return this.http.put<Word>(`${this.BASE_URL}/words/${id}/`, data); }
  patchWord(id: number, data: Partial<Word>): Observable<Word> { return this.http.patch<Word>(`${this.BASE_URL}/words/${id}/`, data); }
  deleteWord(id: number): Observable<void> { return this.http.delete<void>(`${this.BASE_URL}/words/${id}/`); }
  bulkImportWords(deckId: number, words: Partial<Word>[]): Observable<any> { return this.http.post<any>(`${this.BASE_URL}/words/bulk_import/`, { deck_id: deckId, words }); }
  
  // Reviews
  getDueCards(deckIds?: number[]): Observable<{ count: number; cards: CardReview[] }> {
    let params = new HttpParams();
    if (deckIds?.length) params = params.set('deck', deckIds.join(','));
    params = params.set('max_cards', '30');
    return this.http.get<{ count: number; cards: CardReview[] }>(`${this.BASE_URL}/reviews/due_cards/`, { params });
  }
  submitReview(data: { word_id: number; quality?: number; correct?: boolean; algorithm: 'sm2' | 'leitner' }): Observable<{ message: string; card: CardReview }> {
    return this.http.post<{ message: string; card: CardReview }>(`${this.BASE_URL}/reviews/submit_review/`, data);
  }
  getSRSStats(deckIds?: number[]): Observable<SRSStats> {
    let params = new HttpParams();
    if (deckIds?.length) params = params.set('deck', deckIds.join(','));
    return this.http.get<SRSStats>(`${this.BASE_URL}/reviews/stats/`, { params });
  }
  
  // Study Sessions
  startSession(type: string): Observable<StudySession> { return this.http.post<StudySession>(`${this.BASE_URL}/study/sessions/start/`, { session_type: type }); }
  endSession(id: number, data: any): Observable<{ session: StudySession; stats: UserStatsData; new_achievements: Achievement[] }> { 
    return this.http.post<{ session: StudySession; stats: UserStatsData; new_achievements: Achievement[] }>(`${this.BASE_URL}/study/sessions/${id}/end/`, data); 
  }
  
  // Stats & Achievements
  getUserStats(): Observable<UserStatsData> { return this.http.get<UserStatsData>(`${this.BASE_URL}/study/stats/`); }
  getAchievements(): Observable<Achievement[]> { return this.http.get<Achievement[]>(`${this.BASE_URL}/study/achievements/`); }
  
  // AI
  generateAIPrompt(words: string): Observable<{ prompt: string; chatgpt_url: string; gemini_url: string }> {
    return this.http.post<any>(`${this.BASE_URL}/ai/generate-prompt/`, { words });
  }
  parseAIResult(jsonText: string, deckId: number): Observable<Word[]> {
    return this.http.post<Word[]>(`${this.BASE_URL}/ai/parse-result/`, { json_text: jsonText, deck_id: deckId });
  }
  
  // Data Management
  exportData(): Observable<Blob> { return this.http.get(`${this.BASE_URL}/data/export/`, { responseType: 'blob' }); }
  importData(data: any): Observable<any> { return this.http.post(`${this.BASE_URL}/data/import/`, data); }
}
