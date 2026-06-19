import {
  ApiService
} from "./chunk-C2MBYHGA.js";
import "./chunk-EX2AIKSR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-CRWT6FOD.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G7WC3NMJ.js";

// src/app/features/ai-generator/ai-generator.component.ts
function AiGeneratorComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "h3");
    \u0275\u0275text(2, "Step 2: Copy & Paste to AI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5)(4, "textarea", 12);
    \u0275\u0275twoWayListener("ngModelChange", function AiGeneratorComponent_div_16_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.generatedPrompt, $event) || (ctx_r1.generatedPrompt = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(5, "        ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 13);
    \u0275\u0275listener("click", function AiGeneratorComponent_div_16_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyPrompt());
    });
    \u0275\u0275text(7, " 2. Copy Prompt ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 14);
    \u0275\u0275text(9, "Open ChatGPT/Gemini, paste this prompt, and copy the JSON result.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.generatedPrompt);
  }
}
function AiGeneratorComponent_div_25_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deck_r4 = ctx.$implicit;
    \u0275\u0275property("value", deck_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(deck_r4.name);
  }
}
function AiGeneratorComponent_div_25_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 28)(7, "p", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 30);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 31);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 32);
    \u0275\u0275listener("click", function AiGeneratorComponent_div_25_div_11_Template_button_click_13_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeCard(i_r6));
    });
    \u0275\u0275text(14, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r7.term);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r7.part_of_speech);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r7.definition_vi);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r7.definition_en);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('"', card_r7.example_sentences[0], '"');
  }
}
function AiGeneratorComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "h2");
    \u0275\u0275text(2, "Preview & Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "label");
    \u0275\u0275text(5, "Select Deck");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function AiGeneratorComponent_div_25_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedDeckId, $event) || (ctx_r1.selectedDeckId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AiGeneratorComponent_div_25_Template_select_change_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDeckChange($event));
    });
    \u0275\u0275template(7, AiGeneratorComponent_div_25_option_7_Template, 2, 2, "option", 18);
    \u0275\u0275elementStart(8, "option", 19);
    \u0275\u0275text(9, "+ Create New Deck");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 20);
    \u0275\u0275template(11, AiGeneratorComponent_div_25_div_11_Template, 15, 5, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 22)(13, "button", 23);
    \u0275\u0275listener("click", function AiGeneratorComponent_div_25_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveToDeck());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedDeckId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.decks);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.generatedCards);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isLoading ? "Saving..." : "Save " + ctx_r1.generatedCards.length + " Cards to Deck", " ");
  }
}
var AiGeneratorComponent = class _AiGeneratorComponent {
  apiService = inject(ApiService);
  sourceWords = "";
  generatedPrompt = "";
  jsonInput = "";
  isLoading = false;
  generatedCards = [];
  decks = [];
  selectedDeckId = "";
  ngOnInit() {
    this.loadDecks();
  }
  loadDecks() {
    this.apiService.getDecks().subscribe({
      next: (decks) => {
        this.decks = decks;
        if (decks.length > 0) {
          this.selectedDeckId = decks[0].id.toString();
        } else {
          this.selectedDeckId = "";
        }
      },
      error: (err) => {
        console.error("Failed to load decks:", err);
      }
    });
  }
  onDeckChange(event) {
    const value = event.target.value;
    if (value === "new") {
      const name = prompt("Nh\u1EADp t\xEAn b\u1ED9 th\u1EBB m\u1EDBi:");
      if (!name || !name.trim()) {
        if (this.decks.length > 0) {
          this.selectedDeckId = this.decks[0].id.toString();
        } else {
          this.selectedDeckId = "";
        }
        return;
      }
      this.apiService.createDeck({ name: name.trim() }).subscribe({
        next: (newDeck) => {
          this.decks.push(newDeck);
          this.selectedDeckId = newDeck.id.toString();
          alert(`\u0110\xE3 t\u1EA1o b\u1ED9 th\u1EBB "${newDeck.name}" th\xE0nh c\xF4ng!`);
        },
        error: (err) => {
          console.error("Failed to create deck:", err);
          alert("Kh\xF4ng th\u1EC3 t\u1EA1o b\u1ED9 th\u1EBB m\u1EDBi.");
        }
      });
    }
  }
  generatePrompt() {
    if (!this.sourceWords.trim())
      return;
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
      alert("Prompt copied to clipboard! Paste it into ChatGPT or Gemini.");
    });
  }
  parseJson() {
    try {
      this.isLoading = true;
      let cleanedJson = this.jsonInput.trim();
      if (cleanedJson.startsWith("```json")) {
        cleanedJson = cleanedJson.replace(/```json/g, "").replace(/```/g, "").trim();
      } else if (cleanedJson.startsWith("```")) {
        cleanedJson = cleanedJson.replace(/```/g, "").trim();
      }
      const parsed = JSON.parse(cleanedJson);
      if (Array.isArray(parsed)) {
        this.generatedCards = parsed;
      } else {
        alert("Error: The JSON must be an array of objects.");
      }
    } catch (e) {
      alert("Invalid JSON! Please make sure you copied the exact JSON format from the AI.");
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }
  removeCard(index) {
    this.generatedCards.splice(index, 1);
  }
  saveToDeck() {
    if (!this.selectedDeckId || this.selectedDeckId === "new") {
      alert("Vui l\xF2ng ch\u1ECDn ho\u1EB7c t\u1EA1o m\u1ED9t b\u1ED9 th\u1EBB tr\u01B0\u1EDBc khi l\u01B0u.");
      return;
    }
    const deckId = Number(this.selectedDeckId);
    if (isNaN(deckId)) {
      alert("B\u1ED9 th\u1EBB kh\xF4ng h\u1EE3p l\u1EC7.");
      return;
    }
    this.isLoading = true;
    this.apiService.bulkImportWords(deckId, this.generatedCards).subscribe({
      next: (res) => {
        this.isLoading = false;
        alert(`\u0110\xE3 l\u01B0u th\xE0nh c\xF4ng ${res.created?.length || 0} t\u1EEB v\u1EF1ng v\xE0o b\u1ED9 th\u1EBB!`);
        this.generatedCards = [];
        this.sourceWords = "";
        this.generatedPrompt = "";
        this.jsonInput = "";
      },
      error: (err) => {
        this.isLoading = false;
        console.error("Failed to bulk import words:", err);
        alert("C\xF3 l\u1ED7i x\u1EA3y ra khi l\u01B0u t\u1EEB v\u1EF1ng. Vui l\xF2ng ki\u1EC3m tra l\u1EA1i \u0111\u1ECBnh d\u1EA1ng JSON.");
      }
    });
  }
  static \u0275fac = function AiGeneratorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiGeneratorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiGeneratorComponent, selectors: [["app-ai-generator"]], decls: 26, vars: 6, consts: [[1, "page-header"], [1, "header-content"], [1, "ai-container"], [1, "input-section"], [1, "step-card"], [1, "form-group"], ["rows", "3", "placeholder", "e.g., good, leave, abundant, scarcity", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-secondary", 3, "click", "disabled"], ["class", "step-card", 4, "ngIf"], ["rows", "4", "placeholder", "Paste the [ { ... } ] JSON array here", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "preview-section", 4, "ngIf"], ["rows", "6", "readonly", "", 1, "prompt-box", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-secondary", 3, "click"], [1, "help-text"], [1, "preview-section"], [1, "form-group", "deck-select"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "new"], [1, "preview-cards"], ["class", "preview-card", 4, "ngFor", "ngForOf"], [1, "actions"], [1, "btn", "btn-primary", "btn-full", 3, "click", "disabled"], [3, "value"], [1, "preview-card"], [1, "card-header"], [1, "pos"], [1, "card-body"], [1, "vi"], [1, "en"], [1, "example"], [1, "btn-remove", 3, "click"]], template: function AiGeneratorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "AI Flashcard Generator \u{1F916}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Generate vocabulary cards using ChatGPT or Gemini.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "h3");
      \u0275\u0275text(10, "Step 1: Enter Words");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 5)(12, "textarea", 6);
      \u0275\u0275twoWayListener("ngModelChange", function AiGeneratorComponent_Template_textarea_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sourceWords, $event) || (ctx.sourceWords = $event);
        return $event;
      });
      \u0275\u0275text(13, "        ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 7);
      \u0275\u0275listener("click", function AiGeneratorComponent_Template_button_click_14_listener() {
        return ctx.generatePrompt();
      });
      \u0275\u0275text(15, " 1. Generate Prompt ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, AiGeneratorComponent_div_16_Template, 10, 1, "div", 8);
      \u0275\u0275elementStart(17, "div", 4)(18, "h3");
      \u0275\u0275text(19, "Step 3: Paste JSON Result");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 5)(21, "textarea", 9);
      \u0275\u0275twoWayListener("ngModelChange", function AiGeneratorComponent_Template_textarea_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.jsonInput, $event) || (ctx.jsonInput = $event);
        return $event;
      });
      \u0275\u0275text(22, "        ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "button", 10);
      \u0275\u0275listener("click", function AiGeneratorComponent_Template_button_click_23_listener() {
        return ctx.parseJson();
      });
      \u0275\u0275text(24, " 3. Parse JSON & Preview ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(25, AiGeneratorComponent_div_25_Template, 15, 5, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.sourceWords);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.sourceWords.trim());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.generatedPrompt);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.jsonInput);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.jsonInput.trim());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.generatedCards.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: [`

.ai-container[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  animation: fadeIn 0.4s ease-out;
}
@media (max-width: 900px) {
  .ai-container[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.input-section[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.step-card[_ngcontent-%COMP%] {
  background: rgba(30, 32, 51, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  padding: 24px;
  border-radius: 14px;
  animation: fadeInUp 0.4s ease-out both;
}
.step-card[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -75%;
  width: 50%;
  height: 200%;
  background:
    linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.04) 50%,
      rgba(255, 255, 255, 0) 100%);
  transform: skewX(-15deg);
  transition: left 0.6s ease;
  pointer-events: none;
}
.step-card[_ngcontent-%COMP%]:hover::after {
  left: 125%;
}
.step-card[_ngcontent-%COMP%]:nth-child(1) {
  animation-delay: 0.05s;
}
.step-card[_ngcontent-%COMP%]:nth-child(2) {
  animation-delay: 0.1s;
}
.step-card[_ngcontent-%COMP%]:nth-child(3) {
  animation-delay: 0.15s;
}
.step-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #60a5fa;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.step-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 14px;
  background: #60a5fa;
  border-radius: 999px;
}
.step-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {
  margin-bottom: 16px;
}
.step-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  width: 100%;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: #e8e9f0;
  border-radius: 10px;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  resize: vertical;
  transition: all 0.15s ease;
}
.step-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {
  border-color: rgba(96, 165, 250, 0.5);
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.08);
  outline: none;
}
.step-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.prompt-box[_ngcontent-%COMP%] {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  color: #2dd4bf;
  background: rgba(0, 0, 0, 0.35);
  border-color: rgba(45, 212, 191, 0.2);
  line-height: 1.6;
}
.step-card[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 8px;
  line-height: 1.5;
}
.preview-section[_ngcontent-%COMP%] {
  background: rgba(30, 32, 51, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 32px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  animation: fadeInUp 0.4s ease-out 0.2s both;
}
.preview-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  font-weight: 700;
  color: #e8e9f0;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.preview-section[_ngcontent-%COMP%]   .deck-select[_ngcontent-%COMP%] {
  margin-bottom: 24px;
}
.preview-section[_ngcontent-%COMP%]   .deck-select[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #6b7280;
  margin-bottom: 6px;
}
.preview-section[_ngcontent-%COMP%]   .deck-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  width: 100%;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.2);
  color: #e8e9f0;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  cursor: pointer;
}
.preview-section[_ngcontent-%COMP%]   .deck-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {
  border-color: rgba(96, 165, 250, 0.5);
  outline: none;
}
.preview-section[_ngcontent-%COMP%]   .deck-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  background: #181926;
}
.preview-section[_ngcontent-%COMP%]   .preview-cards[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  max-height: 380px;
  overflow-y: auto;
  padding-right: 4px;
  margin-bottom: 24px;
}
.preview-section[_ngcontent-%COMP%]   .preview-cards[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 6px;
}
.preview-section[_ngcontent-%COMP%]   .preview-cards[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: transparent;
}
.preview-section[_ngcontent-%COMP%]   .preview-cards[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}
.preview-section[_ngcontent-%COMP%]   .preview-cards[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
.preview-section[_ngcontent-%COMP%]   .preview-card[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 16px;
  position: relative;
  transition: all 0.15s ease;
}
.preview-section[_ngcontent-%COMP%]   .preview-card[_ngcontent-%COMP%]:hover {
  border-color: rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
}
.preview-section[_ngcontent-%COMP%]   .preview-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}
.preview-section[_ngcontent-%COMP%]   .preview-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  font-weight: 800;
  color: #e8e9f0;
}
.preview-section[_ngcontent-%COMP%]   .preview-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .pos[_ngcontent-%COMP%] {
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 8px;
  background: rgba(96, 165, 250, 0.1);
  color: #60a5fa;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 1px solid rgba(96, 165, 250, 0.15);
}
.preview-section[_ngcontent-%COMP%]   .preview-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .vi[_ngcontent-%COMP%] {
  font-weight: 700;
  color: #4ade80;
  margin-bottom: 2px;
  font-size: 0.875rem;
}
.preview-section[_ngcontent-%COMP%]   .preview-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .en[_ngcontent-%COMP%] {
  color: #9ca3b0;
  font-size: 0.75rem;
  margin-bottom: 6px;
  line-height: 1.5;
}
.preview-section[_ngcontent-%COMP%]   .preview-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%] {
  font-style: italic;
  color: #6b7280;
  font-size: 0.75rem;
  line-height: 1.5;
}
.preview-section[_ngcontent-%COMP%]   .preview-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]::before {
  content: '"';
}
.preview-section[_ngcontent-%COMP%]   .preview-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]::after {
  content: '"';
}
.preview-section[_ngcontent-%COMP%]   .preview-card[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%] {
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: #6b7280;
  font-size: 1.3rem;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.15s ease;
}
.preview-section[_ngcontent-%COMP%]   .preview-card[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%]:hover {
  color: #f87171;
  background: rgba(248, 113, 113, 0.1);
}
.preview-section[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-full[_ngcontent-%COMP%] {
  width: 100%;
  justify-content: center;
  padding: 16px 24px;
  font-size: 1rem;
}
/*# sourceMappingURL=ai-generator.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiGeneratorComponent, [{
    type: Component,
    args: [{ selector: "app-ai-generator", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-header">
  <div class="header-content">
    <h1>AI Flashcard Generator \u{1F916}</h1>
    <p>Generate vocabulary cards using ChatGPT or Gemini.</p>
  </div>
</div>

<div class="ai-container">
  
  <!-- Left Side: Prompt Generation & Workflow -->
  <div class="input-section">
    <!-- Step 1 -->
    <div class="step-card">
      <h3>Step 1: Enter Words</h3>
      <div class="form-group">
        <textarea 
          rows="3" 
          placeholder="e.g., good, leave, abundant, scarcity"
          [(ngModel)]="sourceWords">
        </textarea>
      </div>
      <button class="btn btn-secondary" (click)="generatePrompt()" [disabled]="!sourceWords.trim()">
        1. Generate Prompt
      </button>
    </div>

    <!-- Step 2 -->
    <div class="step-card" *ngIf="generatedPrompt">
      <h3>Step 2: Copy & Paste to AI</h3>
      <div class="form-group">
        <textarea 
          rows="6" 
          readonly
          class="prompt-box"
          [(ngModel)]="generatedPrompt">
        </textarea>
      </div>
      <button class="btn btn-secondary" (click)="copyPrompt()">
        2. Copy Prompt
      </button>
      <p class="help-text">Open ChatGPT/Gemini, paste this prompt, and copy the JSON result.</p>
    </div>

    <!-- Step 3 -->
    <div class="step-card">
      <h3>Step 3: Paste JSON Result</h3>
      <div class="form-group">
        <textarea 
          rows="4" 
          placeholder="Paste the [ { ... } ] JSON array here"
          [(ngModel)]="jsonInput">
        </textarea>
      </div>
      <button class="btn btn-primary" (click)="parseJson()" [disabled]="!jsonInput.trim()">
        3. Parse JSON & Preview
      </button>
    </div>
  </div>

  <!-- Right Side: Preview -->
  <div class="preview-section" *ngIf="generatedCards.length > 0">
    <h2>Preview & Save</h2>
    
    <div class="form-group deck-select">
      <label>Select Deck</label>
      <select class="form-control" [(ngModel)]="selectedDeckId" (change)="onDeckChange($event)">
        <option *ngFor="let deck of decks" [value]="deck.id">{{ deck.name }}</option>
        <option value="new">+ Create New Deck</option>
      </select>
    </div>

    <div class="preview-cards">
      <div class="preview-card" *ngFor="let card of generatedCards; let i = index">
        <div class="card-header">
          <strong>{{ card.term }}</strong>
          <span class="pos">{{ card.part_of_speech }}</span>
        </div>
        <div class="card-body">
          <p class="vi">{{ card.definition_vi }}</p>
          <p class="en">{{ card.definition_en }}</p>
          <p class="example">"{{ card.example_sentences[0] }}"</p>
        </div>
        <button class="btn-remove" (click)="removeCard(i)">\xD7</button>
      </div>
    </div>
    
    <div class="actions">
      <button class="btn btn-primary btn-full" (click)="saveToDeck()" [disabled]="isLoading">
        {{ isLoading ? 'Saving...' : 'Save ' + generatedCards.length + ' Cards to Deck' }}
      </button>
    </div>
  </div>

</div>
`, styles: [`/* src/app/features/ai-generator/ai-generator.component.scss */
.ai-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  animation: fadeIn 0.4s ease-out;
}
@media (max-width: 900px) {
  .ai-container {
    grid-template-columns: 1fr;
  }
}
.input-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.step-card {
  background: rgba(30, 32, 51, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  padding: 24px;
  border-radius: 14px;
  animation: fadeInUp 0.4s ease-out both;
}
.step-card::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -75%;
  width: 50%;
  height: 200%;
  background:
    linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.04) 50%,
      rgba(255, 255, 255, 0) 100%);
  transform: skewX(-15deg);
  transition: left 0.6s ease;
  pointer-events: none;
}
.step-card:hover::after {
  left: 125%;
}
.step-card:nth-child(1) {
  animation-delay: 0.05s;
}
.step-card:nth-child(2) {
  animation-delay: 0.1s;
}
.step-card:nth-child(3) {
  animation-delay: 0.15s;
}
.step-card h3 {
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #60a5fa;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.step-card h3::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 14px;
  background: #60a5fa;
  border-radius: 999px;
}
.step-card .form-group {
  margin-bottom: 16px;
}
.step-card .form-group textarea {
  width: 100%;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: #e8e9f0;
  border-radius: 10px;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  resize: vertical;
  transition: all 0.15s ease;
}
.step-card .form-group textarea:focus {
  border-color: rgba(96, 165, 250, 0.5);
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.08);
  outline: none;
}
.step-card .form-group textarea.prompt-box {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  color: #2dd4bf;
  background: rgba(0, 0, 0, 0.35);
  border-color: rgba(45, 212, 191, 0.2);
  line-height: 1.6;
}
.step-card .help-text {
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 8px;
  line-height: 1.5;
}
.preview-section {
  background: rgba(30, 32, 51, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 32px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  animation: fadeInUp 0.4s ease-out 0.2s both;
}
.preview-section h2 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #e8e9f0;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.preview-section .deck-select {
  margin-bottom: 24px;
}
.preview-section .deck-select label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #6b7280;
  margin-bottom: 6px;
}
.preview-section .deck-select select {
  width: 100%;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.2);
  color: #e8e9f0;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  cursor: pointer;
}
.preview-section .deck-select select:focus {
  border-color: rgba(96, 165, 250, 0.5);
  outline: none;
}
.preview-section .deck-select select option {
  background: #181926;
}
.preview-section .preview-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  max-height: 380px;
  overflow-y: auto;
  padding-right: 4px;
  margin-bottom: 24px;
}
.preview-section .preview-cards::-webkit-scrollbar {
  width: 6px;
}
.preview-section .preview-cards::-webkit-scrollbar-track {
  background: transparent;
}
.preview-section .preview-cards::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}
.preview-section .preview-cards::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
.preview-section .preview-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 16px;
  position: relative;
  transition: all 0.15s ease;
}
.preview-section .preview-card:hover {
  border-color: rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
}
.preview-section .preview-card .card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}
.preview-section .preview-card .card-header strong {
  font-size: 1.1rem;
  font-weight: 800;
  color: #e8e9f0;
}
.preview-section .preview-card .card-header .pos {
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 8px;
  background: rgba(96, 165, 250, 0.1);
  color: #60a5fa;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 1px solid rgba(96, 165, 250, 0.15);
}
.preview-section .preview-card .card-body .vi {
  font-weight: 700;
  color: #4ade80;
  margin-bottom: 2px;
  font-size: 0.875rem;
}
.preview-section .preview-card .card-body .en {
  color: #9ca3b0;
  font-size: 0.75rem;
  margin-bottom: 6px;
  line-height: 1.5;
}
.preview-section .preview-card .card-body .example {
  font-style: italic;
  color: #6b7280;
  font-size: 0.75rem;
  line-height: 1.5;
}
.preview-section .preview-card .card-body .example::before {
  content: '"';
}
.preview-section .preview-card .card-body .example::after {
  content: '"';
}
.preview-section .preview-card .btn-remove {
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: #6b7280;
  font-size: 1.3rem;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.15s ease;
}
.preview-section .preview-card .btn-remove:hover {
  color: #f87171;
  background: rgba(248, 113, 113, 0.1);
}
.preview-section .actions .btn-full {
  width: 100%;
  justify-content: center;
  padding: 16px 24px;
  font-size: 1rem;
}
/*# sourceMappingURL=ai-generator.component.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiGeneratorComponent, { className: "AiGeneratorComponent", filePath: "src/app/features/ai-generator/ai-generator.component.ts", lineNumber: 14 });
})();
export {
  AiGeneratorComponent
};
//# sourceMappingURL=chunk-LXC5AHT2.js.map
