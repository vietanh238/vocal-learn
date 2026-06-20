import {
  RouterLink
} from "./chunk-YPDWKRJV.js";
import {
  ApiService
} from "./chunk-C2MBYHGA.js";
import "./chunk-EX2AIKSR.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgForOf,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-G7WC3NMJ.js";

// src/app/features/decks/decks.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = (a0) => ["/study", a0];
var _c2 = () => ["/ai-cards"];
function DecksComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
}
function DecksComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, DecksComponent_div_8_div_1_Template, 1, 0, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function DecksComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Ch\u01B0a c\xF3 b\u1ED9 th\u1EBB n\xE0o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "T\u1EA1o b\u1ED9 th\u1EBB \u0111\u1EA7u ti\xEAn \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u h\xE0nh tr\xECnh h\u1ECDc t\u1EEB v\u1EF1ng v\u1EDBi AI!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 1);
    \u0275\u0275listener("click", function DecksComponent_div_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createDeck());
    });
    \u0275\u0275text(8, "+ T\u1EA1o Deck \u0111\u1EA7u ti\xEAn");
    \u0275\u0275elementEnd()();
  }
}
function DecksComponent_div_10_div_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deck_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(deck_r5.description);
  }
}
function DecksComponent_div_10_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deck_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, deck_r5.created_at, "dd/MM/yy"), " ");
  }
}
function DecksComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementStart(2, "div", 15)(3, "div", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, DecksComponent_div_10_div_1_p_8_Template, 2, 1, "p", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 19)(10, "div", 20)(11, "span", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 22);
    \u0275\u0275text(14, "t\u1EEB v\u1EF1ng");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, DecksComponent_div_10_div_1_div_15_Template, 3, 4, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 24)(17, "button", 25);
    \u0275\u0275text(18, " \u{1F3AF} Study ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 26);
    \u0275\u0275listener("click", function DecksComponent_div_10_div_1_Template_button_click_19_listener($event) {
      const deck_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openWordList(deck_r5, $event));
    });
    \u0275\u0275text(20, " \u{1F441}\uFE0F View ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 27);
    \u0275\u0275text(22, " \u{1F916} Add ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 28);
    \u0275\u0275listener("click", function DecksComponent_div_10_div_1_Template_button_click_23_listener($event) {
      const deck_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteDeck(deck_r5.id, $event));
    });
    \u0275\u0275text(24, " \u{1F5D1}\uFE0F ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const deck_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("--deck-color", ctx_r1.getDeckColor(i_r6))("animation-delay", i_r6 * 0.06 + "s");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.getDeckColor(i_r6));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.getDeckColor(i_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getDeckIcon(i_r6), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(deck_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", deck_r5.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(deck_r5.word_count || 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", deck_r5.created_at);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c1, "deck-" + deck_r5.id));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(17, _c2));
  }
}
function DecksComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, DecksComponent_div_10_div_1_Template, 25, 18, "div", 10);
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275listener("click", function DecksComponent_div_10_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createDeck());
    });
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "T\u1EA1o Deck m\u1EDBi");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.decks);
  }
}
function DecksComponent_div_11_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "div", 41);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u0110ang t\u1EA3i danh s\xE1ch t\u1EEB v\u1EF1ng...");
    \u0275\u0275elementEnd()();
  }
}
function DecksComponent_div_11_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Ch\u01B0a c\xF3 t\u1EEB v\u1EF1ng n\xE0o trong b\u1ED9 th\u1EBB n\xE0y.");
    \u0275\u0275elementEnd()();
  }
}
function DecksComponent_div_11_div_13_div_4_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const word_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(word_r9.ipa);
  }
}
function DecksComponent_div_11_div_13_div_4_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, "\u2022");
    \u0275\u0275elementEnd();
  }
}
function DecksComponent_div_11_div_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "span", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong", 51);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, DecksComponent_div_11_div_13_div_4_span_6_Template, 2, 1, "span", 52)(7, DecksComponent_div_11_div_13_div_4_span_7_Template, 2, 0, "span", 53);
    \u0275\u0275elementStart(8, "span", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 55);
    \u0275\u0275listener("click", function DecksComponent_div_11_div_13_div_4_Template_button_click_10_listener($event) {
      const word_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(word_r9, $event));
    });
    \u0275\u0275text(11, " \u{1F517} ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const word_r9 = ctx.$implicit;
    const idx_r10 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", idx_r10 + 1, ".");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(word_r9.term);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", word_r9.ipa);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", word_r9.ipa || word_r9.definition_vi);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(word_r9.definition_vi);
  }
}
function DecksComponent_div_11_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275template(4, DecksComponent_div_11_div_13_div_4_Template, 12, 5, "div", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" T\u1EEB v\u1EF1ng (", ctx_r1.selectedDeckWords.length, " t\u1EEB) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.selectedDeckWords);
  }
}
function DecksComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function DecksComponent_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeWordList());
    });
    \u0275\u0275elementStart(1, "div", 31);
    \u0275\u0275listener("click", function DecksComponent_div_11_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 32)(3, "div", 33)(4, "span", 34);
    \u0275\u0275text(5, "\u{1F393}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 35);
    \u0275\u0275listener("click", function DecksComponent_div_11_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeWordList());
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 36);
    \u0275\u0275template(11, DecksComponent_div_11_div_11_Template, 4, 0, "div", 37)(12, DecksComponent_div_11_div_12_Template, 5, 0, "div", 38)(13, DecksComponent_div_11_div_13_Template, 5, 2, "div", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedDeckName);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingWords);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingWords && ctx_r1.selectedDeckWords.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingWords && ctx_r1.selectedDeckWords.length > 0);
  }
}
var DecksComponent = class _DecksComponent {
  apiService = inject(ApiService);
  decks = [];
  isLoading = true;
  // Word list modal state
  showWordListModal = false;
  selectedDeckWords = [];
  selectedDeckName = "";
  isLoadingWords = false;
  // Cycle through icons for visual variety
  deckIcons = ["\u{1F4D8}", "\u{1F4D7}", "\u{1F4D9}", "\u{1F4D5}", "\u{1F4D2}", "\u{1F4D3}", "\u{1F4D4}", "\u{1F5C2}\uFE0F"];
  deckColors = [
    "rgba(96, 165, 250, 0.1)",
    "rgba(74, 222, 128, 0.1)",
    "rgba(251, 146, 60, 0.1)",
    "rgba(244, 114, 182, 0.1)",
    "rgba(167, 139, 250, 0.1)",
    "rgba(45, 212, 191, 0.1)"
  ];
  getDeckIcon(index) {
    return this.deckIcons[index % this.deckIcons.length];
  }
  getDeckColor(index) {
    return this.deckColors[index % this.deckColors.length];
  }
  ngOnInit() {
    this.loadDecks();
  }
  loadDecks() {
    this.isLoading = true;
    this.apiService.getDecks().subscribe({
      next: (decks) => {
        this.decks = decks;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  createDeck() {
    const name = prompt("Nh\u1EADp t\xEAn b\u1ED9 th\u1EBB m\u1EDBi:");
    if (!name || !name.trim())
      return;
    this.apiService.createDeck({ name: name.trim() }).subscribe({
      next: (newDeck) => {
        this.decks.unshift(newDeck);
      },
      error: (err) => {
        console.error("Failed to create deck:", err);
      }
    });
  }
  deleteDeck(id, event) {
    event.stopPropagation();
    if (confirm("B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1ED9 th\u1EBB n\xE0y? T\u1EA5t c\u1EA3 t\u1EEB v\u1EF1ng \u0111i k\xE8m c\u0169ng s\u1EBD b\u1ECB x\xF3a.")) {
      this.apiService.deleteDeck(id).subscribe({
        next: () => {
          this.decks = this.decks.filter((d) => d.id !== id);
        },
        error: (err) => console.error("Failed to delete deck:", err)
      });
    }
  }
  openWordList(deck, event) {
    event.stopPropagation();
    this.selectedDeckName = deck.name;
    this.selectedDeckWords = [];
    this.showWordListModal = true;
    this.isLoadingWords = true;
    this.apiService.getWords(deck.id).subscribe({
      next: (words) => {
        this.selectedDeckWords = words;
        this.isLoadingWords = false;
      },
      error: (err) => {
        console.error("Failed to load words for deck:", err);
        this.isLoadingWords = false;
      }
    });
  }
  closeWordList() {
    this.showWordListModal = false;
    this.selectedDeckWords = [];
    this.selectedDeckName = "";
  }
  copyToClipboard(word, event) {
    event.stopPropagation();
    const textToCopy = `${word.term} ${word.ipa || ""} \u2022 ${word.definition_vi}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      const target = event.target;
      const originalText = target.innerText;
      target.innerText = "\u2705";
      setTimeout(() => {
        target.innerText = originalText;
      }, 1500);
    });
  }
  static \u0275fac = function DecksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DecksComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DecksComponent, selectors: [["app-decks"]], decls: 12, vars: 5, consts: [[1, "page-header", "flex-header"], [1, "btn", "btn-primary", 3, "click"], ["class", "decks-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "word-list-backdrop", 3, "click", 4, "ngIf"], [1, "decks-grid"], ["class", "deck-card skeleton-card", 4, "ngFor", "ngForOf"], [1, "deck-card", "skeleton-card"], [1, "empty-state"], [1, "empty-icon"], ["class", "deck-card", 3, "--deck-color", "animation-delay", 4, "ngFor", "ngForOf"], [1, "deck-card", "add-card", 3, "click"], [1, "add-icon"], [1, "deck-card"], [1, "deck-color-stripe"], [1, "deck-header"], [1, "deck-icon"], [1, "deck-meta"], [4, "ngIf"], [1, "deck-stats"], [1, "deck-word-count"], [1, "count"], [1, "label"], ["class", "deck-date", 4, "ngIf"], [1, "deck-actions"], [1, "btn-action", "study", 3, "routerLink"], [1, "btn-action", "view-words", 3, "click"], [1, "btn-action", "ai", 3, "routerLink"], [1, "btn-action", "delete", 3, "click"], [1, "deck-date"], [1, "word-list-backdrop", 3, "click"], [1, "word-list-modal", 3, "click"], [1, "modal-header"], [1, "header-title"], [1, "grad-icon"], [1, "close-modal-btn", 3, "click"], [1, "modal-body"], ["class", "modal-loading animate-pulse", 4, "ngIf"], ["class", "modal-empty", 4, "ngIf"], ["class", "words-table-container", 4, "ngIf"], [1, "modal-loading", "animate-pulse"], [1, "modal-spinner"], [1, "modal-empty"], [1, "empty-emoji"], [1, "words-table-container"], [1, "words-count-stripe"], [1, "word-row-list"], ["class", "word-row-item", 4, "ngFor", "ngForOf"], [1, "word-row-item"], [1, "word-row-left"], [1, "word-number"], [1, "word-term"], ["class", "word-ipa", 4, "ngIf"], ["class", "word-dot-sep", 4, "ngIf"], [1, "word-meaning"], ["title", "Sao ch\xE9p t\u1EEB v\u1EF1ng", 1, "word-share-btn", 3, "click"], [1, "word-ipa"], [1, "word-dot-sep"]], template: function DecksComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1");
      \u0275\u0275text(3, "\u{1F4DA} My Decks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 1);
      \u0275\u0275listener("click", function DecksComponent_Template_button_click_6_listener() {
        return ctx.createDeck();
      });
      \u0275\u0275text(7, " + New Deck ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, DecksComponent_div_8_Template, 2, 2, "div", 2)(9, DecksComponent_div_9_Template, 9, 0, "div", 3)(10, DecksComponent_div_10_Template, 7, 1, "div", 2)(11, DecksComponent_div_11_Template, 14, 4, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.decks.length, " b\u1ED9 th\u1EBB \xB7 Qu\u1EA3n l\xFD t\u1EEB v\u1EF1ng c\u1EE7a b\u1EA1n");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.decks.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.decks.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showWordListModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterLink], styles: ['\n\n.decks-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 24px;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  height: 200px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.03) 25%,\n      rgba(255, 255, 255, 0.07) 50%,\n      rgba(255, 255, 255, 0.03) 75%);\n  background-size: 200% auto;\n  animation: shimmer 1.5s infinite;\n  border-radius: 14px;\n}\n.deck-card[_ngcontent-%COMP%] {\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 14px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  position: relative;\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.25s ease;\n  animation: fadeInUp 0.5s ease-out both;\n  cursor: default;\n}\n.deck-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -75%;\n  width: 50%;\n  height: 200%;\n  background:\n    linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.04) 50%,\n      rgba(255, 255, 255, 0) 100%);\n  transform: skewX(-15deg);\n  transition: left 0.6s ease;\n  pointer-events: none;\n}\n.deck-card[_ngcontent-%COMP%]:hover::after {\n  left: 125%;\n}\n.deck-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.deck-card[_ngcontent-%COMP%]   .deck-color-stripe[_ngcontent-%COMP%] {\n  height: 3px;\n  opacity: 0.8;\n}\n.deck-card[_ngcontent-%COMP%]   .deck-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n  padding: 24px 24px 8px;\n}\n.deck-card[_ngcontent-%COMP%]   .deck-header[_ngcontent-%COMP%]   .deck-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 48px;\n  height: 48px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.deck-card[_ngcontent-%COMP%]   .deck-header[_ngcontent-%COMP%]   .deck-meta[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.deck-card[_ngcontent-%COMP%]   .deck-header[_ngcontent-%COMP%]   .deck-meta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #e8e9f0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 2px;\n}\n.deck-card[_ngcontent-%COMP%]   .deck-header[_ngcontent-%COMP%]   .deck-meta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.deck-card[_ngcontent-%COMP%]   .deck-stats[_ngcontent-%COMP%] {\n  padding: 0 24px 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n.deck-card[_ngcontent-%COMP%]   .deck-stats[_ngcontent-%COMP%]   .deck-word-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.deck-card[_ngcontent-%COMP%]   .deck-stats[_ngcontent-%COMP%]   .deck-word-count[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 900;\n  color: #e8e9f0;\n  line-height: 1;\n}\n.deck-card[_ngcontent-%COMP%]   .deck-stats[_ngcontent-%COMP%]   .deck-word-count[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.deck-card[_ngcontent-%COMP%]   .deck-stats[_ngcontent-%COMP%]   .deck-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.deck-card[_ngcontent-%COMP%]   .deck-actions[_ngcontent-%COMP%] {\n  padding: 8px 24px 16px;\n  display: flex;\n  gap: 8px;\n  margin-top: auto;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n}\n.deck-card[_ngcontent-%COMP%]   .deck-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 4px 8px;\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  border: 1px solid transparent;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n}\n.deck-card[_ngcontent-%COMP%]   .deck-actions[_ngcontent-%COMP%]   .btn-action.study[_ngcontent-%COMP%] {\n  background: rgba(96, 165, 250, 0.1);\n  color: #60a5fa;\n  border-color: rgba(96, 165, 250, 0.2);\n}\n.deck-card[_ngcontent-%COMP%]   .deck-actions[_ngcontent-%COMP%]   .btn-action.study[_ngcontent-%COMP%]:hover {\n  background: rgba(96, 165, 250, 0.2);\n  transform: translateY(-1px);\n}\n.deck-card[_ngcontent-%COMP%]   .deck-actions[_ngcontent-%COMP%]   .btn-action.view-words[_ngcontent-%COMP%] {\n  background: rgba(45, 212, 191, 0.1);\n  color: #2dd4bf;\n  border-color: rgba(45, 212, 191, 0.2);\n}\n.deck-card[_ngcontent-%COMP%]   .deck-actions[_ngcontent-%COMP%]   .btn-action.view-words[_ngcontent-%COMP%]:hover {\n  background: rgba(45, 212, 191, 0.2);\n  transform: translateY(-1px);\n}\n.deck-card[_ngcontent-%COMP%]   .deck-actions[_ngcontent-%COMP%]   .btn-action.ai[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.1);\n  color: #a78bfa;\n  border-color: rgba(167, 139, 250, 0.2);\n}\n.deck-card[_ngcontent-%COMP%]   .deck-actions[_ngcontent-%COMP%]   .btn-action.ai[_ngcontent-%COMP%]:hover {\n  background: rgba(167, 139, 250, 0.2);\n  transform: translateY(-1px);\n}\n.deck-card[_ngcontent-%COMP%]   .deck-actions[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%] {\n  flex: 0;\n  padding: 4px 8px;\n  background: rgba(248, 113, 113, 0.08);\n  color: #f87171;\n  border-color: rgba(248, 113, 113, 0.15);\n}\n.deck-card[_ngcontent-%COMP%]   .deck-actions[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.18);\n  transform: translateY(-1px);\n}\n.add-card[_ngcontent-%COMP%] {\n  border: 2px dashed rgba(255, 255, 255, 0.08);\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 200px;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.add-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(96, 165, 250, 0.3);\n  background: rgba(96, 165, 250, 0.04);\n  transform: translateY(-4px);\n}\n.add-card[_ngcontent-%COMP%]:hover   .add-icon[_ngcontent-%COMP%] {\n  color: #60a5fa;\n  border-color: rgba(96, 165, 250, 0.3);\n}\n.add-card[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: #60a5fa;\n}\n.add-card[_ngcontent-%COMP%]   .add-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  border: 2px dashed rgba(255, 255, 255, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.8rem;\n  color: #6b7280;\n  transition: all 0.25s ease;\n}\n.add-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 600;\n  transition: color 0.15s ease;\n}\n.word-list-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.65);\n  backdrop-filter: blur(8px);\n  z-index: 200;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: fadeIn 0.25s ease-out;\n}\n.word-list-modal[_ngcontent-%COMP%] {\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  background: rgba(26, 27, 46, 0.85);\n  border-radius: 14px;\n  width: 90%;\n  max-width: 600px;\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6);\n  animation: _ngcontent-%COMP%_scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  overflow: hidden;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   .grad-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #60a5fa;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 800;\n  color: #e8e9f0;\n  margin: 0;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-modal-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #6b7280;\n  font-size: 1.1rem;\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: #e8e9f0;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 24px 24px;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 999px;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 0;\n  gap: 8px;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-loading[_ngcontent-%COMP%]   .modal-spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid rgba(96, 165, 250, 0.1);\n  border-top-color: #60a5fa;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3b0;\n  font-size: 0.875rem;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 0;\n  color: #6b7280;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-empty[_ngcontent-%COMP%]   .empty-emoji[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 8px;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .words-table-container[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.04);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .words-table-container[_ngcontent-%COMP%]   .words-count-stripe[_ngcontent-%COMP%] {\n  background: rgba(96, 165, 250, 0.06);\n  color: #60a5fa;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 4px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .words-table-container[_ngcontent-%COMP%]   .word-row-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 55vh;\n  overflow-y: auto;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .words-table-container[_ngcontent-%COMP%]   .word-row-list[_ngcontent-%COMP%]   .word-row-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.03);\n  transition: background 0.15s ease;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .words-table-container[_ngcontent-%COMP%]   .word-row-list[_ngcontent-%COMP%]   .word-row-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .words-table-container[_ngcontent-%COMP%]   .word-row-list[_ngcontent-%COMP%]   .word-row-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .words-table-container[_ngcontent-%COMP%]   .word-row-list[_ngcontent-%COMP%]   .word-row-item[_ngcontent-%COMP%]   .word-row-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n  font-size: 0.875rem;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .words-table-container[_ngcontent-%COMP%]   .word-row-list[_ngcontent-%COMP%]   .word-row-item[_ngcontent-%COMP%]   .word-row-left[_ngcontent-%COMP%]   .word-number[_ngcontent-%COMP%] {\n  color: #60a5fa;\n  font-weight: 700;\n  width: 20px;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .words-table-container[_ngcontent-%COMP%]   .word-row-list[_ngcontent-%COMP%]   .word-row-item[_ngcontent-%COMP%]   .word-row-left[_ngcontent-%COMP%]   .word-term[_ngcontent-%COMP%] {\n  color: #e8e9f0;\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .words-table-container[_ngcontent-%COMP%]   .word-row-list[_ngcontent-%COMP%]   .word-row-item[_ngcontent-%COMP%]   .word-row-left[_ngcontent-%COMP%]   .word-ipa[_ngcontent-%COMP%] {\n  color: #60a5fa;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.75rem;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .words-table-container[_ngcontent-%COMP%]   .word-row-list[_ngcontent-%COMP%]   .word-row-item[_ngcontent-%COMP%]   .word-row-left[_ngcontent-%COMP%]   .word-dot-sep[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .words-table-container[_ngcontent-%COMP%]   .word-row-list[_ngcontent-%COMP%]   .word-row-item[_ngcontent-%COMP%]   .word-row-left[_ngcontent-%COMP%]   .word-meaning[_ngcontent-%COMP%] {\n  color: #9ca3b0;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .words-table-container[_ngcontent-%COMP%]   .word-row-list[_ngcontent-%COMP%]   .word-row-item[_ngcontent-%COMP%]   .word-share-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n}\n.word-list-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .words-table-container[_ngcontent-%COMP%]   .word-row-list[_ngcontent-%COMP%]   .word-row-item[_ngcontent-%COMP%]   .word-share-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #e8e9f0;\n}\n@keyframes _ngcontent-%COMP%_scaleUp {\n  from {\n    opacity: 0;\n    transform: scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=decks.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DecksComponent, [{
    type: Component,
    args: [{ selector: "app-decks", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="page-header flex-header">
  <div>
    <h1>\u{1F4DA} My Decks</h1>
    <p>{{ decks.length }} b\u1ED9 th\u1EBB \xB7 Qu\u1EA3n l\xFD t\u1EEB v\u1EF1ng c\u1EE7a b\u1EA1n</p>
  </div>
  <button class="btn btn-primary" (click)="createDeck()">
    + New Deck
  </button>
</div>

<!-- Loading skeleton -->
<div class="decks-grid" *ngIf="isLoading">
  <div class="deck-card skeleton-card" *ngFor="let i of [1,2,3,4]"></div>
</div>

<!-- Empty state -->
<div class="empty-state" *ngIf="!isLoading && decks.length === 0">
  <span class="empty-icon">\u{1F4ED}</span>
  <h3>Ch\u01B0a c\xF3 b\u1ED9 th\u1EBB n\xE0o</h3>
  <p>T\u1EA1o b\u1ED9 th\u1EBB \u0111\u1EA7u ti\xEAn \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u h\xE0nh tr\xECnh h\u1ECDc t\u1EEB v\u1EF1ng v\u1EDBi AI!</p>
  <button class="btn btn-primary" (click)="createDeck()">+ T\u1EA1o Deck \u0111\u1EA7u ti\xEAn</button>
</div>

<!-- Decks Grid -->
<div class="decks-grid" *ngIf="!isLoading && decks.length > 0">
  <div class="deck-card"
       *ngFor="let deck of decks; let i = index"
       [style.--deck-color]="getDeckColor(i)"
       [style.animation-delay]="(i * 0.06) + 's'">

    <div class="deck-color-stripe" [style.background]="getDeckColor(i)"></div>

    <div class="deck-header">
      <div class="deck-icon" [style.background]="getDeckColor(i)">
        {{ getDeckIcon(i) }}
      </div>
      <div class="deck-meta">
        <h3>{{ deck.name }}</h3>
        <p *ngIf="deck.description">{{ deck.description }}</p>
      </div>
    </div>

    <div class="deck-stats">
      <div class="deck-word-count">
        <span class="count">{{ deck.word_count || 0 }}</span>
        <span class="label">t\u1EEB v\u1EF1ng</span>
      </div>
      <div class="deck-date" *ngIf="deck.created_at">
        {{ deck.created_at | date:'dd/MM/yy' }}
      </div>
    </div>

    <div class="deck-actions">
      <button class="btn-action study" [routerLink]="['/study', 'deck-' + deck.id]">
        \u{1F3AF} Study
      </button>
      <button class="btn-action view-words" (click)="openWordList(deck, $event)">
        \u{1F441}\uFE0F View
      </button>
      <button class="btn-action ai" [routerLink]="['/ai-cards']">
        \u{1F916} Add
      </button>
      <button class="btn-action delete" (click)="deleteDeck(deck.id, $event)">
        \u{1F5D1}\uFE0F
      </button>
    </div>
  </div>

  <!-- Add new card -->
  <div class="deck-card add-card" (click)="createDeck()">
    <div class="add-icon">+</div>
    <p>T\u1EA1o Deck m\u1EDBi</p>
  </div>
</div>

<!-- Word List Modal Overlay -->
<div class="word-list-backdrop" *ngIf="showWordListModal" (click)="closeWordList()">
  <div class="word-list-modal" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <div class="header-title">
        <span class="grad-icon">\u{1F393}</span>
        <h2>{{ selectedDeckName }}</h2>
      </div>
      <button class="close-modal-btn" (click)="closeWordList()">\u2715</button>
    </div>

    <div class="modal-body">
      <!-- Loading state -->
      <div class="modal-loading animate-pulse" *ngIf="isLoadingWords">
        <div class="modal-spinner"></div>
        <p>\u0110ang t\u1EA3i danh s\xE1ch t\u1EEB v\u1EF1ng...</p>
      </div>

      <!-- Empty state -->
      <div class="modal-empty" *ngIf="!isLoadingWords && selectedDeckWords.length === 0">
        <span class="empty-emoji">\u{1F4ED}</span>
        <p>Ch\u01B0a c\xF3 t\u1EEB v\u1EF1ng n\xE0o trong b\u1ED9 th\u1EBB n\xE0y.</p>
      </div>

      <!-- Word list view -->
      <div class="words-table-container" *ngIf="!isLoadingWords && selectedDeckWords.length > 0">
        <div class="words-count-stripe">
          T\u1EEB v\u1EF1ng ({{ selectedDeckWords.length }} t\u1EEB)
        </div>
        
        <div class="word-row-list">
          <div class="word-row-item" *ngFor="let word of selectedDeckWords; let idx = index">
            <div class="word-row-left">
              <span class="word-number">{{ idx + 1 }}.</span>
              <strong class="word-term">{{ word.term }}</strong>
              <span class="word-ipa" *ngIf="word.ipa">{{ word.ipa }}</span>
              <span class="word-dot-sep" *ngIf="word.ipa || word.definition_vi">\u2022</span>
              <span class="word-meaning">{{ word.definition_vi }}</span>
            </div>
            <button class="word-share-btn" title="Sao ch\xE9p t\u1EEB v\u1EF1ng" (click)="copyToClipboard(word, $event)">
              \u{1F517}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ['/* src/app/features/decks/decks.component.scss */\n.decks-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 24px;\n}\n.skeleton-card {\n  height: 200px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.03) 25%,\n      rgba(255, 255, 255, 0.07) 50%,\n      rgba(255, 255, 255, 0.03) 75%);\n  background-size: 200% auto;\n  animation: shimmer 1.5s infinite;\n  border-radius: 14px;\n}\n.deck-card {\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 14px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  position: relative;\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.25s ease;\n  animation: fadeInUp 0.5s ease-out both;\n  cursor: default;\n}\n.deck-card::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -75%;\n  width: 50%;\n  height: 200%;\n  background:\n    linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.04) 50%,\n      rgba(255, 255, 255, 0) 100%);\n  transform: skewX(-15deg);\n  transition: left 0.6s ease;\n  pointer-events: none;\n}\n.deck-card:hover::after {\n  left: 125%;\n}\n.deck-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.deck-card .deck-color-stripe {\n  height: 3px;\n  opacity: 0.8;\n}\n.deck-card .deck-header {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n  padding: 24px 24px 8px;\n}\n.deck-card .deck-header .deck-icon {\n  font-size: 1.5rem;\n  width: 48px;\n  height: 48px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.deck-card .deck-header .deck-meta {\n  flex: 1;\n  min-width: 0;\n}\n.deck-card .deck-header .deck-meta h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #e8e9f0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 2px;\n}\n.deck-card .deck-header .deck-meta p {\n  font-size: 0.75rem;\n  color: #6b7280;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.deck-card .deck-stats {\n  padding: 0 24px 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n.deck-card .deck-stats .deck-word-count {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.deck-card .deck-stats .deck-word-count .count {\n  font-size: 1.6rem;\n  font-weight: 900;\n  color: #e8e9f0;\n  line-height: 1;\n}\n.deck-card .deck-stats .deck-word-count .label {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.deck-card .deck-stats .deck-date {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.deck-card .deck-actions {\n  padding: 8px 24px 16px;\n  display: flex;\n  gap: 8px;\n  margin-top: auto;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n}\n.deck-card .deck-actions .btn-action {\n  flex: 1;\n  padding: 4px 8px;\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  border: 1px solid transparent;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n}\n.deck-card .deck-actions .btn-action.study {\n  background: rgba(96, 165, 250, 0.1);\n  color: #60a5fa;\n  border-color: rgba(96, 165, 250, 0.2);\n}\n.deck-card .deck-actions .btn-action.study:hover {\n  background: rgba(96, 165, 250, 0.2);\n  transform: translateY(-1px);\n}\n.deck-card .deck-actions .btn-action.view-words {\n  background: rgba(45, 212, 191, 0.1);\n  color: #2dd4bf;\n  border-color: rgba(45, 212, 191, 0.2);\n}\n.deck-card .deck-actions .btn-action.view-words:hover {\n  background: rgba(45, 212, 191, 0.2);\n  transform: translateY(-1px);\n}\n.deck-card .deck-actions .btn-action.ai {\n  background: rgba(167, 139, 250, 0.1);\n  color: #a78bfa;\n  border-color: rgba(167, 139, 250, 0.2);\n}\n.deck-card .deck-actions .btn-action.ai:hover {\n  background: rgba(167, 139, 250, 0.2);\n  transform: translateY(-1px);\n}\n.deck-card .deck-actions .btn-action.delete {\n  flex: 0;\n  padding: 4px 8px;\n  background: rgba(248, 113, 113, 0.08);\n  color: #f87171;\n  border-color: rgba(248, 113, 113, 0.15);\n}\n.deck-card .deck-actions .btn-action.delete:hover {\n  background: rgba(248, 113, 113, 0.18);\n  transform: translateY(-1px);\n}\n.add-card {\n  border: 2px dashed rgba(255, 255, 255, 0.08);\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 200px;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.add-card:hover {\n  border-color: rgba(96, 165, 250, 0.3);\n  background: rgba(96, 165, 250, 0.04);\n  transform: translateY(-4px);\n}\n.add-card:hover .add-icon {\n  color: #60a5fa;\n  border-color: rgba(96, 165, 250, 0.3);\n}\n.add-card:hover p {\n  color: #60a5fa;\n}\n.add-card .add-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  border: 2px dashed rgba(255, 255, 255, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.8rem;\n  color: #6b7280;\n  transition: all 0.25s ease;\n}\n.add-card p {\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 600;\n  transition: color 0.15s ease;\n}\n.word-list-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.65);\n  backdrop-filter: blur(8px);\n  z-index: 200;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: fadeIn 0.25s ease-out;\n}\n.word-list-modal {\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  background: rgba(26, 27, 46, 0.85);\n  border-radius: 14px;\n  width: 90%;\n  max-width: 600px;\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6);\n  animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  overflow: hidden;\n}\n.word-list-modal .modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.word-list-modal .modal-header .header-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.word-list-modal .modal-header .header-title .grad-icon {\n  font-size: 1.5rem;\n  color: #60a5fa;\n}\n.word-list-modal .modal-header .header-title h2 {\n  font-size: 1.125rem;\n  font-weight: 800;\n  color: #e8e9f0;\n  margin: 0;\n}\n.word-list-modal .modal-header .close-modal-btn {\n  background: transparent;\n  border: none;\n  color: #6b7280;\n  font-size: 1.1rem;\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n}\n.word-list-modal .modal-header .close-modal-btn:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: #e8e9f0;\n}\n.word-list-modal .modal-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 24px 24px;\n}\n.word-list-modal .modal-body::-webkit-scrollbar {\n  width: 6px;\n}\n.word-list-modal .modal-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.word-list-modal .modal-body::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 999px;\n}\n.word-list-modal .modal-body::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.word-list-modal .modal-body .modal-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 0;\n  gap: 8px;\n}\n.word-list-modal .modal-body .modal-loading .modal-spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid rgba(96, 165, 250, 0.1);\n  border-top-color: #60a5fa;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.word-list-modal .modal-body .modal-loading p {\n  color: #9ca3b0;\n  font-size: 0.875rem;\n}\n.word-list-modal .modal-body .modal-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 0;\n  color: #6b7280;\n}\n.word-list-modal .modal-body .modal-empty .empty-emoji {\n  font-size: 2rem;\n  margin-bottom: 8px;\n}\n.word-list-modal .modal-body .words-table-container {\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.04);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.word-list-modal .modal-body .words-table-container .words-count-stripe {\n  background: rgba(96, 165, 250, 0.06);\n  color: #60a5fa;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 4px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n}\n.word-list-modal .modal-body .words-table-container .word-row-list {\n  display: flex;\n  flex-direction: column;\n  max-height: 55vh;\n  overflow-y: auto;\n}\n.word-list-modal .modal-body .words-table-container .word-row-list .word-row-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.03);\n  transition: background 0.15s ease;\n}\n.word-list-modal .modal-body .words-table-container .word-row-list .word-row-item:last-child {\n  border-bottom: none;\n}\n.word-list-modal .modal-body .words-table-container .word-row-list .word-row-item:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n.word-list-modal .modal-body .words-table-container .word-row-list .word-row-item .word-row-left {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n  font-size: 0.875rem;\n}\n.word-list-modal .modal-body .words-table-container .word-row-list .word-row-item .word-row-left .word-number {\n  color: #60a5fa;\n  font-weight: 700;\n  width: 20px;\n}\n.word-list-modal .modal-body .words-table-container .word-row-list .word-row-item .word-row-left .word-term {\n  color: #e8e9f0;\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.word-list-modal .modal-body .words-table-container .word-row-list .word-row-item .word-row-left .word-ipa {\n  color: #60a5fa;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.75rem;\n}\n.word-list-modal .modal-body .words-table-container .word-row-list .word-row-item .word-row-left .word-dot-sep {\n  color: #6b7280;\n}\n.word-list-modal .modal-body .words-table-container .word-row-list .word-row-item .word-row-left .word-meaning {\n  color: #9ca3b0;\n}\n.word-list-modal .modal-body .words-table-container .word-row-list .word-row-item .word-share-btn {\n  background: transparent;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n}\n.word-list-modal .modal-body .words-table-container .word-row-list .word-row-item .word-share-btn:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #e8e9f0;\n}\n@keyframes scaleUp {\n  from {\n    opacity: 0;\n    transform: scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=decks.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DecksComponent, { className: "DecksComponent", filePath: "src/app/features/decks/decks.component.ts", lineNumber: 14 });
})();
export {
  DecksComponent
};
//# sourceMappingURL=chunk-MK74JKJA.js.map
