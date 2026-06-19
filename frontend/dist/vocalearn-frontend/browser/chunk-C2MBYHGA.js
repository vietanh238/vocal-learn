import {
  HttpClient,
  HttpParams
} from "./chunk-EX2AIKSR.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-G7WC3NMJ.js";

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  http;
  BASE_URL = "http://localhost:8000/api";
  constructor(http) {
    this.http = http;
  }
  // Folders
  getFolders() {
    return this.http.get(`${this.BASE_URL}/folders/`);
  }
  getFolder(id) {
    return this.http.get(`${this.BASE_URL}/folders/${id}/`);
  }
  createFolder(data) {
    return this.http.post(`${this.BASE_URL}/folders/`, data);
  }
  updateFolder(id, data) {
    return this.http.put(`${this.BASE_URL}/folders/${id}/`, data);
  }
  deleteFolder(id) {
    return this.http.delete(`${this.BASE_URL}/folders/${id}/`);
  }
  // Decks
  getDecks(folderId) {
    let params = new HttpParams();
    if (folderId)
      params = params.set("folder", folderId.toString());
    return this.http.get(`${this.BASE_URL}/decks/`, { params });
  }
  getDeck(id) {
    return this.http.get(`${this.BASE_URL}/decks/${id}/`);
  }
  createDeck(data) {
    return this.http.post(`${this.BASE_URL}/decks/`, data);
  }
  updateDeck(id, data) {
    return this.http.put(`${this.BASE_URL}/decks/${id}/`, data);
  }
  deleteDeck(id) {
    return this.http.delete(`${this.BASE_URL}/decks/${id}/`);
  }
  // Words
  getWords(deckId, search) {
    let params = new HttpParams();
    if (deckId)
      params = params.set("deck", deckId.toString());
    if (search)
      params = params.set("search", search);
    return this.http.get(`${this.BASE_URL}/words/`, { params });
  }
  getWord(id) {
    return this.http.get(`${this.BASE_URL}/words/${id}/`);
  }
  createWord(data) {
    return this.http.post(`${this.BASE_URL}/words/`, data);
  }
  updateWord(id, data) {
    return this.http.put(`${this.BASE_URL}/words/${id}/`, data);
  }
  patchWord(id, data) {
    return this.http.patch(`${this.BASE_URL}/words/${id}/`, data);
  }
  deleteWord(id) {
    return this.http.delete(`${this.BASE_URL}/words/${id}/`);
  }
  bulkImportWords(deckId, words) {
    return this.http.post(`${this.BASE_URL}/words/bulk_import/`, { deck_id: deckId, words });
  }
  // Reviews
  getDueCards(deckIds) {
    let params = new HttpParams();
    if (deckIds?.length)
      params = params.set("deck", deckIds.join(","));
    params = params.set("max_cards", "30");
    return this.http.get(`${this.BASE_URL}/reviews/due_cards/`, { params });
  }
  submitReview(data) {
    return this.http.post(`${this.BASE_URL}/reviews/submit_review/`, data);
  }
  getSRSStats(deckIds) {
    let params = new HttpParams();
    if (deckIds?.length)
      params = params.set("deck", deckIds.join(","));
    return this.http.get(`${this.BASE_URL}/reviews/stats/`, { params });
  }
  // Study Sessions
  startSession(type) {
    return this.http.post(`${this.BASE_URL}/study/sessions/start/`, { session_type: type });
  }
  endSession(id, data) {
    return this.http.post(`${this.BASE_URL}/study/sessions/${id}/end/`, data);
  }
  // Stats & Achievements
  getUserStats() {
    return this.http.get(`${this.BASE_URL}/study/stats/`);
  }
  getAchievements() {
    return this.http.get(`${this.BASE_URL}/study/achievements/`);
  }
  // AI
  generateAIPrompt(words) {
    return this.http.post(`${this.BASE_URL}/ai/generate-prompt/`, { words });
  }
  parseAIResult(jsonText, deckId) {
    return this.http.post(`${this.BASE_URL}/ai/parse-result/`, { json_text: jsonText, deck_id: deckId });
  }
  // Data Management
  exportData() {
    return this.http.get(`${this.BASE_URL}/data/export/`, { responseType: "blob" });
  }
  importData(data) {
    return this.http.post(`${this.BASE_URL}/data/import/`, data);
  }
  static \u0275fac = function ApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ApiService
};
//# sourceMappingURL=chunk-C2MBYHGA.js.map
