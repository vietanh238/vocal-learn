import {
  ActivatedRoute,
  RouterLink
} from "./chunk-YPDWKRJV.js";
import {
  ApiService
} from "./chunk-C2MBYHGA.js";
import "./chunk-EX2AIKSR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CRWT6FOD.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  UpperCasePipe,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G7WC3NMJ.js";

// src/app/features/study/study-session/study-session.component.ts
function StudySessionComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u0110ang t\u1EA3i th\u1EBB \xF4n t\u1EADp...");
    \u0275\u0275elementEnd()();
  }
}
function StudySessionComponent_ng_container_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F195} ", ctx_r1.stats.new, "");
  }
}
function StudySessionComponent_ng_container_2_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4D6} ", ctx_r1.stats.learning, "");
  }
}
function StudySessionComponent_ng_container_2_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F3AF} ", ctx_r1.accuracyPercent, "%");
  }
}
function StudySessionComponent_ng_container_2_div_20_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", ctx_r1.currentCard.deck_name, "");
  }
}
function StudySessionComponent_ng_container_2_div_20_ng_container_6_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentCard.word_ipa);
  }
}
function StudySessionComponent_ng_container_2_div_20_ng_container_6_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentCard.word_part_of_speech, " ");
  }
}
function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "span", 40);
    \u0275\u0275text(2, "\u{1F1EC}\u{1F1E7} English Definition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.currentCard.word_definition_en);
  }
}
function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "span", 40);
    \u0275\u0275text(2, "\u{1F4AC} Example");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(' "', ctx_r1.currentCard.word_example_sentences == null ? null : ctx_r1.currentCard.word_example_sentences[0], '" ');
  }
}
function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_22_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4, " ");
  }
}
function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "span", 40);
    \u0275\u0275text(2, "\u{1F517} Collocations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48);
    \u0275\u0275template(4, StudySessionComponent_ng_container_2_div_20_ng_container_6_div_22_span_4_Template, 2, 1, "span", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.currentCard.word_collocations);
  }
}
function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "\u2705 \u0110\xE3 l\u01B0u");
    \u0275\u0275elementEnd();
  }
}
function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_div_1_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 57)(2, "span", 58);
    \u0275\u0275text(3, "\u{1F9E0} Feynman Technique");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_div_1_span_4_Template, 2, 0, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 60);
    \u0275\u0275text(6, "Gi\u1EA3i th\xEDch t\u1EEB n\xE0y theo c\xE1ch hi\u1EC3u c\u1EE7a b\u1EA1n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 61)(8, "textarea", 62);
    \u0275\u0275twoWayListener("ngModelChange", function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_div_1_Template_textarea_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.userExplanation, $event) || (ctx_r1.userExplanation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("click", function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_div_1_Template_textarea_click_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(9, "              ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 63);
    \u0275\u0275listener("click", function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_div_1_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(5);
      ctx_r1.saveFeynmanExplanation();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.feynmanSaved);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userExplanation);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSavingExplanation || !ctx_r1.userExplanation.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSavingExplanation ? "..." : "L\u01B0u", " ");
  }
}
function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "button", 66);
    \u0275\u0275listener("click", function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_div_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.submitReview(1));
    });
    \u0275\u0275elementStart(2, "span", 67);
    \u0275\u0275text(3, "\u{1F635}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 68);
    \u0275\u0275text(5, "Again");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 69);
    \u0275\u0275text(7, "Qu\xEAn ho\xE0n to\xE0n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 70);
    \u0275\u0275listener("click", function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_div_4_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.submitReview(2));
    });
    \u0275\u0275elementStart(9, "span", 67);
    \u0275\u0275text(10, "\u{1F613}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 68);
    \u0275\u0275text(12, "Hard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 69);
    \u0275\u0275text(14, "Nh\u1EDB m\u01A1 h\u1ED3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 71);
    \u0275\u0275listener("click", function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_div_4_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.submitReview(4));
    });
    \u0275\u0275elementStart(16, "span", 67);
    \u0275\u0275text(17, "\u{1F60A}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 68);
    \u0275\u0275text(19, "Good");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 69);
    \u0275\u0275text(21, "Nh\u1EDB t\u1ED1t");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 72);
    \u0275\u0275listener("click", function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_div_4_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.submitReview(5));
    });
    \u0275\u0275elementStart(23, "span", 67);
    \u0275\u0275text(24, "\u{1F680}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 68);
    \u0275\u0275text(26, "Easy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 69);
    \u0275\u0275text(28, "R\u1EA5t d\u1EC5");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSubmitting);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting);
  }
}
function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "button", 66);
    \u0275\u0275listener("click", function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_div_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.submitReview(1));
    });
    \u0275\u0275elementStart(2, "span", 67);
    \u0275\u0275text(3, "\u274C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 68);
    \u0275\u0275text(5, "Incorrect");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 69);
    \u0275\u0275text(7, "V\u1EC1 H\u1ED9p 1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 72);
    \u0275\u0275listener("click", function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_div_5_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.submitReview(5));
    });
    \u0275\u0275elementStart(9, "span", 67);
    \u0275\u0275text(10, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 68);
    \u0275\u0275text(12, "Correct");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 69);
    \u0275\u0275text(14, "L\xEAn H\u1ED9p k\u1EBF");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSubmitting);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting);
  }
}
function StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_div_1_Template, 12, 4, "div", 52);
    \u0275\u0275elementStart(2, "p", 53);
    \u0275\u0275text(3, "B\u1EA1n nh\u1EDB t\u1EEB n\xE0y nh\u01B0 th\u1EBF n\xE0o?");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_div_4_Template, 29, 4, "div", 54)(5, StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_div_5_Template, 15, 2, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("@fadeInUp", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.feynmanEnabled);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.srsAlgorithm === "sm2");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.srsAlgorithm === "leitner");
  }
}
function StudySessionComponent_ng_container_2_div_20_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275listener("click", function StudySessionComponent_ng_container_2_div_20_ng_container_6_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.flipCard());
    });
    \u0275\u0275elementStart(2, "div", 30)(3, "div", 31)(4, "div", 32)(5, "div", 33)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, StudySessionComponent_ng_container_2_div_20_ng_container_6_p_8_Template, 2, 1, "p", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, StudySessionComponent_ng_container_2_div_20_ng_container_6_span_9_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 36)(11, "span");
    \u0275\u0275text(12, "Nh\u1EA5n \u0111\u1EC3 l\u1EADt th\u1EBB \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 37)(14, "div", 38)(15, "div", 39)(16, "span", 40);
    \u0275\u0275text(17, "\u{1F1FB}\u{1F1F3} Ngh\u0129a ti\u1EBFng Vi\u1EC7t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 41);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, StudySessionComponent_ng_container_2_div_20_ng_container_6_div_20_Template, 5, 1, "div", 42)(21, StudySessionComponent_ng_container_2_div_20_ng_container_6_div_21_Template, 5, 1, "div", 42)(22, StudySessionComponent_ng_container_2_div_20_ng_container_6_div_22_Template, 5, 1, "div", 42);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(23, StudySessionComponent_ng_container_2_div_20_ng_container_6_div_23_Template, 6, 4, "div", 43);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("flipped", ctx_r1.isFlipped);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.currentCard.word_term);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentCard.word_ipa);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentCard.word_part_of_speech);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.currentCard.word_definition_vi);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentCard.word_definition_en);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentCard.word_example_sentences == null ? null : ctx_r1.currentCard.word_example_sentences.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentCard.word_collocations == null ? null : ctx_r1.currentCard.word_collocations.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFlipped);
  }
}
function StudySessionComponent_ng_container_2_div_20_div_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentCard.word_ipa);
  }
}
function StudySessionComponent_ng_container_2_div_20_div_7_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1, "\u2022");
    \u0275\u0275elementEnd();
  }
}
function StudySessionComponent_ng_container_2_div_20_div_7_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentCard.word_part_of_speech);
  }
}
function StudySessionComponent_ng_container_2_div_20_div_7_ng_container_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const idx_r9 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("correct", ctx_r1.getLetterState(idx_r9) === "correct")("wrong", ctx_r1.getLetterState(idx_r9) === "wrong")("empty", ctx_r1.getLetterState(idx_r9) === "empty");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.spellingAnswer[idx_r9] || "", " ");
  }
}
function StudySessionComponent_ng_container_2_div_20_div_7_ng_container_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const idx_r9 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentCard.word_term[idx_r9], " ");
  }
}
function StudySessionComponent_ng_container_2_div_20_div_7_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StudySessionComponent_ng_container_2_div_20_div_7_ng_container_17_div_1_Template, 2, 7, "div", 97)(2, StudySessionComponent_ng_container_2_div_20_div_7_ng_container_17_div_2_Template, 2, 1, "div", 98);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const idx_r9 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getLetterState(idx_r9) !== "special");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getLetterState(idx_r9) === "special");
  }
}
function StudySessionComponent_ng_container_2_div_20_div_7_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 101);
    \u0275\u0275listener("click", function StudySessionComponent_ng_container_2_div_20_div_7_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.clearSpelling());
    });
    \u0275\u0275text(1, " \u2715 ");
    \u0275\u0275elementEnd();
  }
}
function StudySessionComponent_ng_container_2_div_20_div_7_div_24_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 104);
    \u0275\u0275listener("click", function StudySessionComponent_ng_container_2_div_20_div_7_div_24_button_1_Template_button_click_0_listener() {
      const letter_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.handleLetterClick(letter_r12));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const letter_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", letter_r12, " ");
  }
}
function StudySessionComponent_ng_container_2_div_20_div_7_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275template(1, StudySessionComponent_ng_container_2_div_20_div_7_div_24_button_1_Template, 2, 1, "button", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.shuffledLetters);
  }
}
function StudySessionComponent_ng_container_2_div_20_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75)(2, "h3");
    \u0275\u0275text(3, "Nh\u1EADp t\u1EEB m\xE0 b\u1EA1n nghe \u0111\u01B0\u1EE3c");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 76);
    \u0275\u0275template(5, StudySessionComponent_ng_container_2_div_20_div_7_span_5_Template, 2, 1, "span", 77)(6, StudySessionComponent_ng_container_2_div_20_div_7_span_6_Template, 2, 0, "span", 78)(7, StudySessionComponent_ng_container_2_div_20_div_7_span_7_Template, 2, 1, "span", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 80)(9, "button", 81);
    \u0275\u0275listener("click", function StudySessionComponent_ng_container_2_div_20_div_7_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.speakWord(ctx_r1.currentCard.word_term));
    });
    \u0275\u0275elementStart(10, "span", 82);
    \u0275\u0275text(11, "\u{1F50A}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 83);
    \u0275\u0275text(13, "Ngh\u0129a: ");
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 84);
    \u0275\u0275template(17, StudySessionComponent_ng_container_2_div_20_div_7_ng_container_17_Template, 3, 2, "ng-container", 85);
    \u0275\u0275elementStart(18, "button", 86);
    \u0275\u0275listener("click", function StudySessionComponent_ng_container_2_div_20_div_7_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.revealHint());
    });
    \u0275\u0275text(19, " \u{1F4A1} ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 87)(21, "div", 88)(22, "input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function StudySessionComponent_ng_container_2_div_20_div_7_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.spellingAnswer, $event) || (ctx_r1.spellingAnswer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function StudySessionComponent_ng_container_2_div_20_div_7_Template_input_ngModelChange_22_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onSpellingInputChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, StudySessionComponent_ng_container_2_div_20_div_7_button_23_Template, 2, 0, "button", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, StudySessionComponent_ng_container_2_div_20_div_7_div_24_Template, 2, 1, "div", 91);
    \u0275\u0275elementStart(25, "div", 92)(26, "button", 93);
    \u0275\u0275listener("click", function StudySessionComponent_ng_container_2_div_20_div_7_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.submitReview(1));
    });
    \u0275\u0275text(27, " \u23ED\uFE0F Kh\xF4ng nh\u1EDB (B\u1ECF qua) ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.currentCard.word_ipa);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentCard.word_ipa && ctx_r1.currentCard.word_part_of_speech);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentCard.word_part_of_speech);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.currentCard.word_definition_vi);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.currentCard.word_term.split(""));
    \u0275\u0275advance();
    \u0275\u0275classProp("hint-active", ctx_r1.shownHintsCount > 0);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("input-correct", ctx_r1.spellingAnswer.toLowerCase() === ctx_r1.currentCard.word_term.toLowerCase())("input-wrong", ctx_r1.spellingAnswer.length > 0 && ctx_r1.getLetterState(ctx_r1.spellingAnswer.length - 1) === "wrong");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.spellingAnswer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.spellingAnswer.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.shuffledLetters.length > 0);
  }
}
function StudySessionComponent_ng_container_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StudySessionComponent_ng_container_2_div_20_span_5_Template, 2, 1, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StudySessionComponent_ng_container_2_div_20_ng_container_6_Template, 24, 10, "ng-container", 3)(7, StudySessionComponent_ng_container_2_div_20_div_7_Template, 28, 14, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("type-" + ctx_r1.currentCard.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, ctx_r1.currentCard.status));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentCard.deck_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.studyMode === "flashcard");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.studyMode === "spelling");
  }
}
function StudySessionComponent_ng_container_2_ng_template_21_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "div", 112)(2, "span", 113);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 114);
    \u0275\u0275text(5, "th\u1EBB \u0111\xE3 h\u1ECDc");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "div", 115);
    \u0275\u0275elementStart(7, "div", 112)(8, "span", 113);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 114);
    \u0275\u0275text(11, "\u0111\u1ED9 ch\xEDnh x\xE1c");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "div", 115);
    \u0275\u0275elementStart(13, "div", 112)(14, "span", 113);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 114);
    \u0275\u0275text(17, "tr\u1EA3 l\u1EDDi \u0111\xFAng");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.sessionTotal);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.accuracyPercent, "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.sessionCorrect);
  }
}
function StudySessionComponent_ng_container_2_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 106);
    \u0275\u0275text(2, "\u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Ho\xE0n th\xE0nh r\u1ED3i!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "B\u1EA1n \u0111\xE3 \xF4n t\u1EADp xong t\u1EA5t c\u1EA3 th\u1EBB h\xF4m nay.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, StudySessionComponent_ng_container_2_ng_template_21_div_7_Template, 18, 3, "div", 107);
    \u0275\u0275elementStart(8, "div", 108)(9, "button", 109);
    \u0275\u0275text(10, "\u{1F3E0} V\u1EC1 Dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 110);
    \u0275\u0275text(12, "\u{1F4DA} My Decks");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.sessionTotal > 0);
  }
}
function StudySessionComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6)(2, "button", 7);
    \u0275\u0275text(3, "\u2190 Quay l\u1EA1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8)(5, "div", 9);
    \u0275\u0275element(6, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12)(10, "button", 13);
    \u0275\u0275listener("click", function StudySessionComponent_ng_container_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStudyMode("flashcard"));
    });
    \u0275\u0275text(11, " \u{1F5C2}\uFE0F Flashcard ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 13);
    \u0275\u0275listener("click", function StudySessionComponent_ng_container_2_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStudyMode("spelling"));
    });
    \u0275\u0275text(13, " \u270D\uFE0F Ch\xEDnh t\u1EA3 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 14);
    \u0275\u0275template(15, StudySessionComponent_ng_container_2_span_15_Template, 2, 1, "span", 15)(16, StudySessionComponent_ng_container_2_span_16_Template, 2, 1, "span", 16);
    \u0275\u0275elementStart(17, "span", 17);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, StudySessionComponent_ng_container_2_span_19_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, StudySessionComponent_ng_container_2_div_20_Template, 8, 8, "div", 19)(21, StudySessionComponent_ng_container_2_ng_template_21_Template, 13, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noCards_r13 = \u0275\u0275reference(22);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", ctx_r1.progressPercent, "%");
    \u0275\u0275classProp("complete", ctx_r1.progressPercent === 100);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.currentIndex, " / ", ctx_r1.dueCards.length, "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.studyMode === "flashcard");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.studyMode === "spelling");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.stats.new > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.learning > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CB} ", ctx_r1.stats.due, " c\xF2n l\u1EA1i");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sessionTotal > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentCard)("ngIfElse", noCards_r13);
  }
}
var StudySessionComponent = class _StudySessionComponent {
  apiService = inject(ApiService);
  route = inject(ActivatedRoute);
  isFlipped = false;
  dueCards = [];
  currentIndex = 0;
  isLoading = true;
  isSubmitting = false;
  // Study Mode: 'flashcard' | 'spelling'
  studyMode = "flashcard";
  // Spelling Mode variables
  spellingAnswer = "";
  shuffledLetters = [];
  shownHintsCount = 0;
  // Feynman
  feynmanEnabled = true;
  srsAlgorithm = "sm2";
  userExplanation = "";
  isSavingExplanation = false;
  feynmanSaved = false;
  // Session stats
  sessionCorrect = 0;
  sessionTotal = 0;
  lastRating = null;
  stats = { new: 0, learning: 0, due: 0 };
  ngOnInit() {
    this.feynmanEnabled = localStorage.getItem("feynman_enabled") !== "false";
    this.srsAlgorithm = localStorage.getItem("srs_algorithm") || "sm2";
    this.route.paramMap.subscribe((params) => {
      const mode = params.get("mode") || "today";
      let deckIds;
      if (mode.startsWith("deck-")) {
        const id = Number(mode.split("-")[1]);
        if (!isNaN(id))
          deckIds = [id];
      }
      this.loadDueCards(deckIds);
    });
  }
  loadDueCards(deckIds) {
    this.isLoading = true;
    this.apiService.getDueCards(deckIds).subscribe({
      next: (res) => {
        this.dueCards = res.cards;
        this.currentIndex = 0;
        this.isLoading = false;
        this.updateStats();
        this.onCardActive();
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  updateStats() {
    this.stats.due = this.dueCards.length - this.currentIndex;
    let newCount = 0, learningCount = 0;
    for (let i = this.currentIndex; i < this.dueCards.length; i++) {
      const s = this.dueCards[i].status;
      if (s === "new")
        newCount++;
      else if (s === "learning" || s === "relearn")
        learningCount++;
    }
    this.stats.new = newCount;
    this.stats.learning = learningCount;
  }
  get currentCard() {
    return this.currentIndex >= 0 && this.currentIndex < this.dueCards.length ? this.dueCards[this.currentIndex] : null;
  }
  get progressPercent() {
    if (this.dueCards.length === 0)
      return 100;
    return Math.round(this.currentIndex / this.dueCards.length * 100);
  }
  get accuracyPercent() {
    if (this.sessionTotal === 0)
      return 0;
    return Math.round(this.sessionCorrect / this.sessionTotal * 100);
  }
  onCardActive() {
    const card = this.currentCard;
    if (!card)
      return;
    this.setupSpellingExercise();
    if (this.studyMode === "spelling") {
      setTimeout(() => this.speakWord(card.word_term), 100);
    }
  }
  setStudyMode(mode) {
    this.studyMode = mode;
    if (mode === "spelling" && this.currentCard) {
      this.speakWord(this.currentCard.word_term);
    }
  }
  // Text-To-Speech (TTS) Pronunciation
  speakWord(term) {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(term);
      utterance.lang = "en-US";
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn("Speech synthesis not supported in this browser");
    }
  }
  // Spelling exercise setup
  setupSpellingExercise() {
    const card = this.currentCard;
    if (!card)
      return;
    const term = card.word_term.trim();
    this.spellingAnswer = "";
    this.shownHintsCount = 0;
    const letters = term.replace(/[^a-zA-Z]/g, "").toUpperCase().split("");
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    this.shuffledLetters = letters;
  }
  handleLetterClick(letter) {
    const term = this.currentCard?.word_term || "";
    if (this.spellingAnswer.length < term.length) {
      this.spellingAnswer += letter.toLowerCase();
      this.onSpellingInputChange();
    }
  }
  onSpellingInputChange() {
    this.spellingAnswer = this.spellingAnswer.replace(/[^a-zA-Z\s\-]/g, "");
    this.checkSpellingCompletion();
  }
  getLetterState(index) {
    const term = (this.currentCard?.word_term || "").toLowerCase();
    if (index >= term.length)
      return "empty";
    const targetChar = term[index];
    if (targetChar === " " || targetChar === "-" || targetChar === "_") {
      return "special";
    }
    if (index >= this.spellingAnswer.length) {
      return "empty";
    }
    const typedChar = this.spellingAnswer[index].toLowerCase();
    return typedChar === targetChar ? "correct" : "wrong";
  }
  revealHint() {
    const term = (this.currentCard?.word_term || "").toLowerCase();
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
    this.spellingAnswer = "";
  }
  checkSpellingCompletion() {
    const term = (this.currentCard?.word_term || "").trim().toLowerCase();
    if (this.spellingAnswer.trim().toLowerCase() === term) {
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
      if (card)
        this.userExplanation = card.word_user_explanation || "";
    }
  }
  saveFeynmanExplanation() {
    const card = this.currentCard;
    if (!card || !this.userExplanation.trim())
      return;
    this.isSavingExplanation = true;
    this.apiService.patchWord(card.word, { user_explanation: this.userExplanation }).subscribe({
      next: (updatedWord) => {
        card.word_user_explanation = updatedWord.user_explanation;
        this.isSavingExplanation = false;
        this.feynmanSaved = true;
      },
      error: () => {
        this.isSavingExplanation = false;
      }
    });
  }
  submitReview(quality) {
    const card = this.currentCard;
    if (!card || this.isSubmitting)
      return;
    this.isSubmitting = true;
    this.sessionTotal++;
    let payload = { word_id: card.word, algorithm: this.srsAlgorithm };
    if (this.srsAlgorithm === "sm2") {
      payload.quality = quality;
      this.lastRating = quality >= 4 ? "good" : quality >= 3 ? "hard" : "again";
      if (quality >= 3)
        this.sessionCorrect++;
    } else {
      payload.correct = quality >= 3;
      this.lastRating = quality >= 3 ? "good" : "again";
      if (quality >= 3)
        this.sessionCorrect++;
    }
    this.apiService.submitReview(payload).subscribe({
      next: () => {
        window.dispatchEvent(new Event("statsUpdated"));
        setTimeout(() => this.proceedToNext(), 300);
      },
      error: () => {
        setTimeout(() => this.proceedToNext(), 300);
      }
    });
  }
  proceedToNext() {
    this.isFlipped = false;
    this.userExplanation = "";
    this.feynmanSaved = false;
    this.isSubmitting = false;
    this.lastRating = null;
    setTimeout(() => {
      this.currentIndex++;
      this.updateStats();
      this.onCardActive();
    }, 180);
  }
  getRatingLabel(quality) {
    if (this.srsAlgorithm === "leitner")
      return quality >= 3 ? "Correct \u2713" : "Incorrect \u2717";
    const labels = { 1: "Again", 2: "Hard", 4: "Good", 5: "Easy" };
    return labels[quality] || "";
  }
  static \u0275fac = function StudySessionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudySessionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudySessionComponent, selectors: [["app-study-session"]], decls: 3, vars: 2, consts: [["noCards", ""], [1, "study-session-container"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "session-header"], ["routerLink", "/dashboard", 1, "btn", "btn-icon", "back-btn"], [1, "session-progress"], [1, "progress-track"], [1, "progress-fill"], [1, "progress-text"], [1, "study-mode-toggle"], [1, "toggle-mode-btn", 3, "click"], [1, "session-badges"], ["class", "badge badge-new", 4, "ngIf"], ["class", "badge badge-learn", 4, "ngIf"], [1, "badge", "badge-review"], ["class", "badge badge-acc", 4, "ngIf"], ["class", "flashcard-area", 4, "ngIf", "ngIfElse"], [1, "badge", "badge-new"], [1, "badge", "badge-learn"], [1, "badge", "badge-acc"], [1, "flashcard-area"], [1, "card-type-strip"], [1, "type-label"], ["class", "deck-name", 4, "ngIf"], ["class", "spelling-area", 4, "ngIf"], [1, "deck-name"], [1, "flashcard", 3, "click"], [1, "flashcard-inner"], [1, "flashcard-front"], [1, "front-content"], [1, "word-display"], ["class", "ipa", 4, "ngIf"], ["class", "pos-badge", 4, "ngIf"], [1, "click-hint"], [1, "flashcard-back"], [1, "back-scroll"], [1, "back-section", "vi-section"], [1, "section-label"], [1, "definition-vi"], ["class", "back-section", 4, "ngIf"], ["class", "review-actions", 4, "ngIf"], [1, "ipa"], [1, "pos-badge"], [1, "back-section"], [1, "example-sentence"], [1, "collocations"], ["class", "collocation-chip", 4, "ngFor", "ngForOf"], [1, "collocation-chip"], [1, "review-actions"], ["class", "feynman-section", 3, "click", 4, "ngIf"], [1, "rating-question"], ["class", "rating-grid sm2-grid", 4, "ngIf"], ["class", "rating-grid leitner-grid", 4, "ngIf"], [1, "feynman-section", 3, "click"], [1, "feynman-header"], [1, "feynman-title"], ["class", "feynman-saved", 4, "ngIf"], [1, "feynman-desc"], [1, "feynman-input-group"], ["placeholder", "V\xED d\u1EE5: 'Redundant l\xE0 khi th\u1EE9 g\xEC \u0111\xF3 kh\xF4ng c\u1EA7n thi\u1EBFt v\xEC \u0111\xE3 c\xF3 \u0111\u1EE7 r\u1ED3i...'", "rows", "2", 3, "ngModelChange", "click", "ngModel"], [1, "feynman-save-btn", 3, "click", "disabled"], [1, "feynman-saved"], [1, "rating-grid", "sm2-grid"], [1, "rating-btn", "again", 3, "click", "disabled"], [1, "btn-emoji"], [1, "btn-label"], [1, "btn-sub"], [1, "rating-btn", "hard", 3, "click", "disabled"], [1, "rating-btn", "good", 3, "click", "disabled"], [1, "rating-btn", "easy", 3, "click", "disabled"], [1, "rating-grid", "leitner-grid"], [1, "spelling-area"], [1, "spelling-card-header"], [1, "word-meta"], ["class", "word-ipa", 4, "ngIf"], ["class", "word-dot-sep", 4, "ngIf"], ["class", "word-pos", 4, "ngIf"], [1, "spelling-audio-section"], ["title", "Nghe ph\xE1t \xE2m", 1, "audio-btn", 3, "click"], [1, "audio-icon"], [1, "word-translation"], [1, "spelling-boxes-container"], [4, "ngFor", "ngForOf"], ["title", "G\u1EE3i \xFD ch\u1EEF c\xE1i", 1, "hint-btn", 3, "click"], [1, "spelling-input-wrapper"], [1, "spelling-input-group"], ["type", "text", "placeholder", "Nh\u1EADp c\xE2u tr\u1EA3 l\u1EDDi c\u1EE7a b\u1EA1n...", "autofocus", "", 1, "spelling-input-field", 3, "ngModelChange", "ngModel"], ["class", "spelling-clear-btn", "title", "X\xF3a h\u1EBFt", 3, "click", 4, "ngIf"], ["class", "spelling-tiles-group", 4, "ngIf"], [1, "spelling-actions-row"], [1, "btn", "btn-secondary", "skip-btn", 3, "click"], [1, "word-ipa"], [1, "word-dot-sep"], [1, "word-pos"], ["class", "spelling-box", 3, "correct", "wrong", "empty", 4, "ngIf"], ["class", "spelling-box-special", 4, "ngIf"], [1, "spelling-box"], [1, "spelling-box-special"], ["title", "X\xF3a h\u1EBFt", 1, "spelling-clear-btn", 3, "click"], [1, "spelling-tiles-group"], ["class", "letter-tile-btn", 3, "click", 4, "ngFor", "ngForOf"], [1, "letter-tile-btn", 3, "click"], [1, "done-screen"], [1, "done-emoji"], ["class", "done-stats", 4, "ngIf"], [1, "done-actions"], ["routerLink", "/dashboard", 1, "btn", "btn-primary"], ["routerLink", "/decks", 1, "btn", "btn-secondary"], [1, "done-stats"], [1, "done-stat"], [1, "done-val"], [1, "done-lbl"], [1, "done-divider"]], template: function StudySessionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, StudySessionComponent_div_1_Template, 4, 0, "div", 2)(2, StudySessionComponent_ng_container_2_Template, 23, 16, "ng-container", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, UpperCasePipe, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.study-session-container[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 24px 0 48px;\n  animation: fadeIn 0.3s ease-out;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 16px;\n  padding: 6rem 0;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid rgba(255, 255, 255, 0.08);\n  border-top-color: #60a5fa;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.session-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n}\n.session-header[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.session-header[_ngcontent-%COMP%]   .session-progress[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.session-header[_ngcontent-%COMP%]   .session-progress[_ngcontent-%COMP%]   .progress-track[_ngcontent-%COMP%] {\n  height: 6px;\n  background: rgba(255, 255, 255, 0.07);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.session-header[_ngcontent-%COMP%]   .session-progress[_ngcontent-%COMP%]   .progress-track[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #60a5fa,\n      #a78bfa);\n  border-radius: 999px;\n  transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n  animation: progressGrow 0.5s ease-out;\n}\n.session-header[_ngcontent-%COMP%]   .session-progress[_ngcontent-%COMP%]   .progress-track[_ngcontent-%COMP%]   .progress-fill.complete[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #4ade80,\n      #2dd4bf);\n}\n.session-header[_ngcontent-%COMP%]   .session-progress[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  font-weight: 600;\n}\n.session-header[_ngcontent-%COMP%]   .session-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n}\n.session-header[_ngcontent-%COMP%]   .session-badges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.session-header[_ngcontent-%COMP%]   .session-badges[_ngcontent-%COMP%]   .badge.badge-new[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #ef4444;\n}\n.session-header[_ngcontent-%COMP%]   .session-badges[_ngcontent-%COMP%]   .badge.badge-learn[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #f59e0b;\n}\n.session-header[_ngcontent-%COMP%]   .session-badges[_ngcontent-%COMP%]   .badge.badge-review[_ngcontent-%COMP%] {\n  background: rgba(96, 165, 250, 0.1);\n  color: #60a5fa;\n}\n.session-header[_ngcontent-%COMP%]   .session-badges[_ngcontent-%COMP%]   .badge.badge-acc[_ngcontent-%COMP%] {\n  background: rgba(74, 222, 128, 0.1);\n  color: #4ade80;\n}\n.flashcard-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n}\n.card-type-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 4px 14px;\n  border-radius: 999px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: 1px solid;\n}\n.card-type-strip.type-new[_ngcontent-%COMP%] {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n  border-color: rgba(239, 68, 68, 0.2);\n}\n.card-type-strip.type-learning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n  border-color: rgba(245, 158, 11, 0.2);\n}\n.card-type-strip.type-young[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  background: rgba(59, 130, 246, 0.1);\n  border-color: rgba(59, 130, 246, 0.2);\n}\n.card-type-strip.type-mature[_ngcontent-%COMP%] {\n  color: #22c55e;\n  background: rgba(34, 197, 94, 0.1);\n  border-color: rgba(34, 197, 94, 0.2);\n}\n.card-type-strip.type-relearn[_ngcontent-%COMP%] {\n  color: #f87171;\n  background: rgba(248, 113, 113, 0.1);\n  border-color: rgba(248, 113, 113, 0.2);\n}\n.card-type-strip[_ngcontent-%COMP%]   .deck-name[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-weight: 500;\n  text-transform: none;\n}\n.flashcard[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 380px;\n  perspective: 1200px;\n  cursor: pointer;\n}\n.flashcard[_ngcontent-%COMP%]   .flashcard-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);\n  transform-style: preserve-3d;\n}\n.flashcard.flipped[_ngcontent-%COMP%]   .flashcard-inner[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.flashcard[_ngcontent-%COMP%]   .flashcard-front[_ngcontent-%COMP%], \n.flashcard[_ngcontent-%COMP%]   .flashcard-back[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.flashcard[_ngcontent-%COMP%]   .flashcard-front[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  padding: 48px;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(30, 32, 51, 0.9),\n      rgba(20, 22, 40, 0.95));\n  border: 1px solid rgba(96, 165, 250, 0.1);\n}\n.flashcard[_ngcontent-%COMP%]   .flashcard-front[_ngcontent-%COMP%]   .front-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  justify-content: center;\n}\n.flashcard[_ngcontent-%COMP%]   .flashcard-front[_ngcontent-%COMP%]   .front-content[_ngcontent-%COMP%]   .word-display[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.flashcard[_ngcontent-%COMP%]   .flashcard-front[_ngcontent-%COMP%]   .front-content[_ngcontent-%COMP%]   .word-display[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3.2rem;\n  font-weight: 900;\n  letter-spacing: -1px;\n  background:\n    linear-gradient(\n      135deg,\n      #e8e9f0,\n      rgba(96, 165, 250, 0.9));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 4px;\n}\n.flashcard[_ngcontent-%COMP%]   .flashcard-front[_ngcontent-%COMP%]   .front-content[_ngcontent-%COMP%]   .word-display[_ngcontent-%COMP%]   .ipa[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #9ca3b0;\n  font-style: italic;\n}\n.flashcard[_ngcontent-%COMP%]   .flashcard-front[_ngcontent-%COMP%]   .front-content[_ngcontent-%COMP%]   .pos-badge[_ngcontent-%COMP%] {\n  background: #1e2033;\n  color: #6b7280;\n  padding: 4px 14px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.flashcard[_ngcontent-%COMP%]   .flashcard-front[_ngcontent-%COMP%]   .click-hint[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.75rem;\n  animation: pulse 2.5s ease-in-out infinite;\n  padding-bottom: 8px;\n}\n.flashcard[_ngcontent-%COMP%]   .flashcard-back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n  background:\n    linear-gradient(\n      145deg,\n      rgba(30, 32, 51, 0.95),\n      rgba(22, 24, 44, 0.98));\n}\n.flashcard[_ngcontent-%COMP%]   .flashcard-back[_ngcontent-%COMP%]   .back-scroll[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  overflow-y: auto;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.flashcard[_ngcontent-%COMP%]   .flashcard-back[_ngcontent-%COMP%]   .back-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.flashcard[_ngcontent-%COMP%]   .flashcard-back[_ngcontent-%COMP%]   .back-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.flashcard[_ngcontent-%COMP%]   .flashcard-back[_ngcontent-%COMP%]   .back-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n}\n.flashcard[_ngcontent-%COMP%]   .flashcard-back[_ngcontent-%COMP%]   .back-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.back-section[_ngcontent-%COMP%]   .section-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: #6b7280;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 4px;\n}\n.back-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  line-height: 1.6;\n  color: #e8e9f0;\n}\n.back-section.vi-section[_ngcontent-%COMP%]   .definition-vi[_ngcontent-%COMP%] {\n  color: #60a5fa;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.back-section[_ngcontent-%COMP%]   .example-sentence[_ngcontent-%COMP%] {\n  color: #9ca3b0;\n  font-style: italic;\n  font-size: 0.95rem;\n}\n.back-section[_ngcontent-%COMP%]   .collocations[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-top: 4px;\n}\n.back-section[_ngcontent-%COMP%]   .collocations[_ngcontent-%COMP%]   .collocation-chip[_ngcontent-%COMP%] {\n  background: rgba(45, 212, 191, 0.1);\n  color: #2dd4bf;\n  border: 1px solid rgba(45, 212, 191, 0.2);\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.review-actions[_ngcontent-%COMP%] {\n  width: 100%;\n  animation: fadeInUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.review-actions[_ngcontent-%COMP%]   .rating-question[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9ca3b0;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n  font-weight: 500;\n}\n.feynman-section[_ngcontent-%COMP%] {\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 16px 24px;\n  border-radius: 10px;\n  margin-bottom: 24px;\n  border-color: rgba(167, 139, 250, 0.15);\n}\n.feynman-section[_ngcontent-%COMP%]   .feynman-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.feynman-section[_ngcontent-%COMP%]   .feynman-header[_ngcontent-%COMP%]   .feynman-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #a78bfa;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.feynman-section[_ngcontent-%COMP%]   .feynman-header[_ngcontent-%COMP%]   .feynman-saved[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #4ade80;\n  font-weight: 600;\n  animation: fadeIn 0.3s;\n}\n.feynman-section[_ngcontent-%COMP%]   .feynman-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-bottom: 8px;\n}\n.feynman-section[_ngcontent-%COMP%]   .feynman-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.feynman-section[_ngcontent-%COMP%]   .feynman-input-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  resize: none;\n  background: rgba(0, 0, 0, 0.25);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 6px;\n  color: #e8e9f0;\n  padding: 8px;\n  font-size: 0.9rem;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n}\n.feynman-section[_ngcontent-%COMP%]   .feynman-input-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: rgba(167, 139, 250, 0.5);\n  box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.08);\n}\n.feynman-section[_ngcontent-%COMP%]   .feynman-input-group[_ngcontent-%COMP%]   .feynman-save-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: rgba(167, 139, 250, 0.12);\n  border: 1px solid rgba(167, 139, 250, 0.25);\n  color: #a78bfa;\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  transition: all 0.15s ease;\n  white-space: nowrap;\n}\n.feynman-section[_ngcontent-%COMP%]   .feynman-input-group[_ngcontent-%COMP%]   .feynman-save-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(167, 139, 250, 0.22);\n  transform: translateY(-1px);\n}\n.feynman-section[_ngcontent-%COMP%]   .feynman-input-group[_ngcontent-%COMP%]   .feynman-save-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.rating-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.rating-grid.sm2-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, 1fr);\n}\n.rating-grid.leitner-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, 1fr);\n}\n.rating-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  padding: 16px 8px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  transition: all 0.15s ease;\n}\n.rating-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);\n}\n.rating-btn[_ngcontent-%COMP%]:not(:disabled):active {\n  transform: translateY(0);\n}\n.rating-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.rating-btn[_ngcontent-%COMP%]   .btn-emoji[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 1;\n}\n.rating-btn[_ngcontent-%COMP%]   .btn-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.rating-btn[_ngcontent-%COMP%]   .btn-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.7;\n}\n.rating-btn.again[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  border-color: rgba(239, 68, 68, 0.2);\n}\n.rating-btn.again[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.18);\n}\n.rating-btn.hard[_ngcontent-%COMP%] {\n  background: rgba(249, 115, 22, 0.1);\n  color: #f97316;\n  border-color: rgba(249, 115, 22, 0.2);\n}\n.rating-btn.hard[_ngcontent-%COMP%]:hover {\n  background: rgba(249, 115, 22, 0.18);\n}\n.rating-btn.good[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n  border-color: rgba(59, 130, 246, 0.2);\n}\n.rating-btn.good[_ngcontent-%COMP%]:hover {\n  background: rgba(59, 130, 246, 0.18);\n}\n.rating-btn.easy[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n  border-color: rgba(16, 185, 129, 0.2);\n}\n.rating-btn.easy[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.18);\n}\n.done-screen[_ngcontent-%COMP%] {\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  border-radius: 20px;\n  padding: 4rem 48px;\n  text-align: center;\n  border-color: rgba(74, 222, 128, 0.12);\n  animation: scaleIn 0.45s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.done-screen[_ngcontent-%COMP%]   .done-emoji[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  display: block;\n  margin-bottom: 24px;\n  animation: float 3s ease-in-out infinite;\n}\n.done-screen[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #4ade80,\n      #2dd4bf);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 8px;\n}\n.done-screen[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3b0;\n  font-size: 0.875rem;\n  margin-bottom: 32px;\n}\n.done-screen[_ngcontent-%COMP%]   .done-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 32px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 24px 48px;\n  margin-bottom: 32px;\n}\n.done-screen[_ngcontent-%COMP%]   .done-stats[_ngcontent-%COMP%]   .done-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.done-screen[_ngcontent-%COMP%]   .done-stats[_ngcontent-%COMP%]   .done-stat[_ngcontent-%COMP%]   .done-val[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 900;\n  color: #e8e9f0;\n}\n.done-screen[_ngcontent-%COMP%]   .done-stats[_ngcontent-%COMP%]   .done-stat[_ngcontent-%COMP%]   .done-lbl[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.done-screen[_ngcontent-%COMP%]   .done-stats[_ngcontent-%COMP%]   .done-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.06);\n}\n.done-screen[_ngcontent-%COMP%]   .done-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n}\n.study-mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: rgba(0, 0, 0, 0.25);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 999px;\n  padding: 2px;\n  flex-shrink: 0;\n}\n.study-mode-toggle[_ngcontent-%COMP%]   .toggle-mode-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #6b7280;\n  padding: 5px 14px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  transition: all 0.15s ease;\n}\n.study-mode-toggle[_ngcontent-%COMP%]   .toggle-mode-btn[_ngcontent-%COMP%]:hover {\n  color: #e8e9f0;\n}\n.study-mode-toggle[_ngcontent-%COMP%]   .toggle-mode-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #60a5fa,\n      rgba(96, 165, 250, 0.65));\n  color: #0f1019;\n  box-shadow: 0 4px 10px rgba(96, 165, 250, 0.25);\n}\n.spelling-area[_ngcontent-%COMP%] {\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(30, 32, 51, 0.95),\n      rgba(22, 24, 44, 0.98));\n  border-radius: 20px;\n  width: 100%;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  animation: fadeIn 0.4s ease-out;\n  border: 1px solid rgba(96, 165, 250, 0.15);\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: #e8e9f0;\n  margin-bottom: 6px;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-card-header[_ngcontent-%COMP%]   .word-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-card-header[_ngcontent-%COMP%]   .word-meta[_ngcontent-%COMP%]   .word-ipa[_ngcontent-%COMP%] {\n  color: #60a5fa;\n  font-family: "JetBrains Mono", monospace;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-card-header[_ngcontent-%COMP%]   .word-meta[_ngcontent-%COMP%]   .word-pos[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  padding: 1px 8px;\n  border-radius: 999px;\n  text-transform: uppercase;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-audio-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-audio-section[_ngcontent-%COMP%]   .audio-btn[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  background: rgba(96, 165, 250, 0.1);\n  border: 2px solid rgba(96, 165, 250, 0.25);\n  color: #60a5fa;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-audio-section[_ngcontent-%COMP%]   .audio-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(96, 165, 250, 0.2);\n  transform: scale(1.08);\n  box-shadow: 0 0 20px rgba(96, 165, 250, 0.3);\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-audio-section[_ngcontent-%COMP%]   .audio-btn[_ngcontent-%COMP%]   .audio-icon[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-audio-section[_ngcontent-%COMP%]   .word-translation[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #9ca3b0;\n  text-align: center;\n  margin-top: 4px;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-audio-section[_ngcontent-%COMP%]   .word-translation[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #60a5fa;\n  font-size: 1rem;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-boxes-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin: 4px 0;\n  max-width: 100%;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-boxes-container[_ngcontent-%COMP%]   .spelling-box[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 48px;\n  border-radius: 6px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.02);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  font-family: "JetBrains Mono", monospace;\n  color: #e8e9f0;\n  transition: all 0.15s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-boxes-container[_ngcontent-%COMP%]   .spelling-box.correct[_ngcontent-%COMP%] {\n  border-color: #4ade80;\n  background: rgba(74, 222, 128, 0.08);\n  color: #4ade80;\n  box-shadow: 0 0 12px rgba(74, 222, 128, 0.15);\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-boxes-container[_ngcontent-%COMP%]   .spelling-box.wrong[_ngcontent-%COMP%] {\n  border-color: #f87171;\n  background: rgba(248, 113, 113, 0.08);\n  color: #f87171;\n  box-shadow: 0 0 12px rgba(248, 113, 113, 0.15);\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-boxes-container[_ngcontent-%COMP%]   .spelling-box.empty[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.02);\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-boxes-container[_ngcontent-%COMP%]   .spelling-box-special[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #6b7280;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-boxes-container[_ngcontent-%COMP%]   .hint-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 1.35rem;\n  cursor: pointer;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 6px;\n  transition: all 0.15s ease;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-boxes-container[_ngcontent-%COMP%]   .hint-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  transform: scale(1.1);\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-boxes-container[_ngcontent-%COMP%]   .hint-btn.hint-active[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_hintFloat 2s ease-in-out infinite alternate;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-input-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 380px;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-input-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-input-group[_ngcontent-%COMP%]   .spelling-input-field[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 2.5rem 8px 16px;\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  color: #e8e9f0;\n  font-size: 0.95rem;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  text-align: center;\n  transition: all 0.15s ease;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-input-group[_ngcontent-%COMP%]   .spelling-input-field[_ngcontent-%COMP%]:focus {\n  border-color: rgba(96, 165, 250, 0.5);\n  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.08);\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-input-group[_ngcontent-%COMP%]   .spelling-input-field.input-correct[_ngcontent-%COMP%] {\n  border-color: #4ade80;\n  box-shadow: 0 0 14px rgba(74, 222, 128, 0.15);\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-input-group[_ngcontent-%COMP%]   .spelling-input-field.input-wrong[_ngcontent-%COMP%] {\n  border-color: #f87171;\n  box-shadow: 0 0 14px rgba(248, 113, 113, 0.15);\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-input-group[_ngcontent-%COMP%]   .spelling-clear-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  background: transparent;\n  border: none;\n  color: #6b7280;\n  font-size: 0.85rem;\n  cursor: pointer;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-input-group[_ngcontent-%COMP%]   .spelling-clear-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #e8e9f0;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-tiles-group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  max-width: 440px;\n  margin-top: 4px;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-tiles-group[_ngcontent-%COMP%]   .letter-tile-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #e8e9f0;\n  font-size: 1rem;\n  font-weight: 700;\n  padding: 4px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  transition: all 0.15s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-tiles-group[_ngcontent-%COMP%]   .letter-tile-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(96, 165, 250, 0.12);\n  border-color: rgba(96, 165, 250, 0.25);\n  color: #60a5fa;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-tiles-group[_ngcontent-%COMP%]   .letter-tile-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-actions-row[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-actions-row[_ngcontent-%COMP%]   .skip-btn[_ngcontent-%COMP%] {\n  padding: 8px 24px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #6b7280;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  background: transparent;\n}\n.spelling-area[_ngcontent-%COMP%]   .spelling-actions-row[_ngcontent-%COMP%]   .skip-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #9ca3b0;\n}\n@keyframes _ngcontent-%COMP%_hintFloat {\n  from {\n    transform: translateY(0) scale(1);\n  }\n  to {\n    transform: translateY(-3px) scale(1.05);\n    text-shadow: 0 0 10px rgba(251, 191, 36, 0.6);\n  }\n}\n/*# sourceMappingURL=study-session.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudySessionComponent, [{
    type: Component,
    args: [{ selector: "app-study-session", standalone: true, imports: [CommonModule, RouterLink, FormsModule], template: `<div class="study-session-container">

  <!-- Loading -->
  <div class="loading-state" *ngIf="isLoading">
    <div class="spinner"></div>
    <p>\u0110ang t\u1EA3i th\u1EBB \xF4n t\u1EADp...</p>
  </div>

  <ng-container *ngIf="!isLoading">
    <!-- Session header -->
    <div class="session-header">
      <button class="btn btn-icon back-btn" routerLink="/dashboard">\u2190 Quay l\u1EA1i</button>

      <div class="session-progress">
        <div class="progress-track">
          <div class="progress-fill" [style.width.%]="progressPercent"
               [class.complete]="progressPercent === 100"></div>
        </div>
        <span class="progress-text">{{ currentIndex }} / {{ dueCards.length }}</span>
      </div>

      <!-- Study Mode Toggle -->
      <div class="study-mode-toggle">
        <button class="toggle-mode-btn" [class.active]="studyMode === 'flashcard'" (click)="setStudyMode('flashcard')">
          \u{1F5C2}\uFE0F Flashcard
        </button>
        <button class="toggle-mode-btn" [class.active]="studyMode === 'spelling'" (click)="setStudyMode('spelling')">
          \u270D\uFE0F Ch\xEDnh t\u1EA3
        </button>
      </div>

      <div class="session-badges">
        <span class="badge badge-new" *ngIf="stats.new > 0">\u{1F195} {{ stats.new }}</span>
        <span class="badge badge-learn" *ngIf="stats.learning > 0">\u{1F4D6} {{ stats.learning }}</span>
        <span class="badge badge-review">\u{1F4CB} {{ stats.due }} c\xF2n l\u1EA1i</span>
        <span class="badge badge-acc" *ngIf="sessionTotal > 0">\u{1F3AF} {{ accuracyPercent }}%</span>
      </div>
    </div>

    <!-- Flashcard area -->
    <div class="flashcard-area" *ngIf="currentCard; else noCards">

      <!-- Card counter strip -->
      <div class="card-type-strip" [class]="'type-' + currentCard.status">
        <span class="type-label">{{ currentCard.status | uppercase }}</span>
        <span class="deck-name" *ngIf="currentCard.deck_name">\xB7 {{ currentCard.deck_name }}</span>
      </div>

      <!-- Flashcard Mode View -->
      <ng-container *ngIf="studyMode === 'flashcard'">
        <!-- 3D Flip Card -->
        <div class="flashcard" [class.flipped]="isFlipped" (click)="flipCard()">
          <div class="flashcard-inner">

            <!-- Front -->
            <div class="flashcard-front">
              <div class="front-content">
                <div class="word-display">
                  <h2>{{ currentCard.word_term }}</h2>
                  <p class="ipa" *ngIf="currentCard.word_ipa">{{ currentCard.word_ipa }}</p>
                </div>
                <span class="pos-badge" *ngIf="currentCard.word_part_of_speech">
                  {{ currentCard.word_part_of_speech }}
                </span>
              </div>
              <div class="click-hint">
                <span>Nh\u1EA5n \u0111\u1EC3 l\u1EADt th\u1EBB \u2192</span>
              </div>
            </div>

            <!-- Back -->
            <div class="flashcard-back">
              <div class="back-scroll">
                <div class="back-section vi-section">
                  <span class="section-label">\u{1F1FB}\u{1F1F3} Ngh\u0129a ti\u1EBFng Vi\u1EC7t</span>
                  <p class="definition-vi">{{ currentCard.word_definition_vi }}</p>
                </div>
                <div class="back-section" *ngIf="currentCard.word_definition_en">
                  <span class="section-label">\u{1F1EC}\u{1F1E7} English Definition</span>
                  <p>{{ currentCard.word_definition_en }}</p>
                </div>
                <div class="back-section" *ngIf="currentCard.word_example_sentences?.length">
                  <span class="section-label">\u{1F4AC} Example</span>
                  <p class="example-sentence">
                    "{{ currentCard.word_example_sentences?.[0] }}"
                  </p>
                </div>
                <div class="back-section" *ngIf="currentCard.word_collocations?.length">
                  <span class="section-label">\u{1F517} Collocations</span>
                  <div class="collocations">
                    <span class="collocation-chip" *ngFor="let col of currentCard.word_collocations">
                      {{ col }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Review Actions (after flip) -->
        <div class="review-actions" *ngIf="isFlipped" [@fadeInUp]>

          <!-- Feynman section -->
          <div class="feynman-section" *ngIf="feynmanEnabled" (click)="$event.stopPropagation()">
            <div class="feynman-header">
              <span class="feynman-title">\u{1F9E0} Feynman Technique</span>
              <span class="feynman-saved" *ngIf="feynmanSaved">\u2705 \u0110\xE3 l\u01B0u</span>
            </div>
            <p class="feynman-desc">Gi\u1EA3i th\xEDch t\u1EEB n\xE0y theo c\xE1ch hi\u1EC3u c\u1EE7a b\u1EA1n:</p>
            <div class="feynman-input-group">
              <textarea
                [(ngModel)]="userExplanation"
                placeholder="V\xED d\u1EE5: 'Redundant l\xE0 khi th\u1EE9 g\xEC \u0111\xF3 kh\xF4ng c\u1EA7n thi\u1EBFt v\xEC \u0111\xE3 c\xF3 \u0111\u1EE7 r\u1ED3i...'"
                rows="2"
                (click)="$event.stopPropagation()">
              </textarea>
              <button class="feynman-save-btn"
                      [disabled]="isSavingExplanation || !userExplanation.trim()"
                      (click)="saveFeynmanExplanation(); $event.stopPropagation()">
                {{ isSavingExplanation ? '...' : 'L\u01B0u' }}
              </button>
            </div>
          </div>

          <!-- Rating question -->
          <p class="rating-question">B\u1EA1n nh\u1EDB t\u1EEB n\xE0y nh\u01B0 th\u1EBF n\xE0o?</p>

          <!-- SM-2 buttons -->
          <div class="rating-grid sm2-grid" *ngIf="srsAlgorithm === 'sm2'">
            <button class="rating-btn again" (click)="submitReview(1)" [disabled]="isSubmitting">
              <span class="btn-emoji">\u{1F635}</span>
              <span class="btn-label">Again</span>
              <span class="btn-sub">Qu\xEAn ho\xE0n to\xE0n</span>
            </button>
            <button class="rating-btn hard" (click)="submitReview(2)" [disabled]="isSubmitting">
              <span class="btn-emoji">\u{1F613}</span>
              <span class="btn-label">Hard</span>
              <span class="btn-sub">Nh\u1EDB m\u01A1 h\u1ED3</span>
            </button>
            <button class="rating-btn good" (click)="submitReview(4)" [disabled]="isSubmitting">
              <span class="btn-emoji">\u{1F60A}</span>
              <span class="btn-label">Good</span>
              <span class="btn-sub">Nh\u1EDB t\u1ED1t</span>
            </button>
            <button class="rating-btn easy" (click)="submitReview(5)" [disabled]="isSubmitting">
              <span class="btn-emoji">\u{1F680}</span>
              <span class="btn-label">Easy</span>
              <span class="btn-sub">R\u1EA5t d\u1EC5</span>
            </button>
          </div>

          <!-- Leitner buttons -->
          <div class="rating-grid leitner-grid" *ngIf="srsAlgorithm === 'leitner'">
            <button class="rating-btn again" (click)="submitReview(1)" [disabled]="isSubmitting">
              <span class="btn-emoji">\u274C</span>
              <span class="btn-label">Incorrect</span>
              <span class="btn-sub">V\u1EC1 H\u1ED9p 1</span>
            </button>
            <button class="rating-btn easy" (click)="submitReview(5)" [disabled]="isSubmitting">
              <span class="btn-emoji">\u2705</span>
              <span class="btn-label">Correct</span>
              <span class="btn-sub">L\xEAn H\u1ED9p k\u1EBF</span>
            </button>
          </div>

        </div>
      </ng-container>

      <!-- Spelling Mode View -->
      <div class="spelling-area" *ngIf="studyMode === 'spelling'">
        <div class="spelling-card-header">
          <h3>Nh\u1EADp t\u1EEB m\xE0 b\u1EA1n nghe \u0111\u01B0\u1EE3c</h3>
          <div class="word-meta">
            <span class="word-ipa" *ngIf="currentCard.word_ipa">{{ currentCard.word_ipa }}</span>
            <span class="word-dot-sep" *ngIf="currentCard.word_ipa && currentCard.word_part_of_speech">\u2022</span>
            <span class="word-pos" *ngIf="currentCard.word_part_of_speech">{{ currentCard.word_part_of_speech }}</span>
          </div>
        </div>

        <div class="spelling-audio-section">
          <button class="audio-btn" (click)="speakWord(currentCard.word_term)" title="Nghe ph\xE1t \xE2m">
            <span class="audio-icon">\u{1F50A}</span>
          </button>
          <p class="word-translation">Ngh\u0129a: <strong>{{ currentCard.word_definition_vi }}</strong></p>
        </div>

        <!-- Letter Grid Boxes -->
        <div class="spelling-boxes-container">
          <ng-container *ngFor="let char of (currentCard.word_term.split('')); let idx = index">
            <!-- Normal letter box -->
            <div class="spelling-box"
                 *ngIf="getLetterState(idx) !== 'special'"
                 [class.correct]="getLetterState(idx) === 'correct'"
                 [class.wrong]="getLetterState(idx) === 'wrong'"
                 [class.empty]="getLetterState(idx) === 'empty'">
              {{ spellingAnswer[idx] || '' }}
            </div>
            <!-- Space / Hyphen special display -->
            <div class="spelling-box-special" *ngIf="getLetterState(idx) === 'special'">
              {{ currentCard.word_term[idx] }}
            </div>
          </ng-container>

          <!-- Hint Bulb -->
          <button class="hint-btn" (click)="revealHint()" title="G\u1EE3i \xFD ch\u1EEF c\xE1i" [class.hint-active]="shownHintsCount > 0">
            \u{1F4A1}
          </button>
        </div>

        <!-- Answer Input Box -->
        <div class="spelling-input-wrapper">
          <div class="spelling-input-group">
            <input
              type="text"
              [(ngModel)]="spellingAnswer"
              (ngModelChange)="onSpellingInputChange()"
              placeholder="Nh\u1EADp c\xE2u tr\u1EA3 l\u1EDDi c\u1EE7a b\u1EA1n..."
              autofocus
              class="spelling-input-field"
              [class.input-correct]="spellingAnswer.toLowerCase() === currentCard.word_term.toLowerCase()"
              [class.input-wrong]="spellingAnswer.length > 0 && getLetterState(spellingAnswer.length - 1) === 'wrong'" />

            <button class="spelling-clear-btn" *ngIf="spellingAnswer.length > 0" (click)="clearSpelling()" title="X\xF3a h\u1EBFt">
              \u2715
            </button>
          </div>
        </div>

        <!-- Shuffled interactive letter tiles -->
        <div class="spelling-tiles-group" *ngIf="shuffledLetters.length > 0">
          <button class="letter-tile-btn"
                  *ngFor="let letter of shuffledLetters"
                  (click)="handleLetterClick(letter)">
            {{ letter }}
          </button>
        </div>

        <!-- Skipping/Manual Action -->
        <div class="spelling-actions-row">
          <button class="btn btn-secondary skip-btn" (click)="submitReview(1)">
            \u23ED\uFE0F Kh\xF4ng nh\u1EDB (B\u1ECF qua)
          </button>
        </div>
      </div>
    </div>

    <!-- All done -->
    <ng-template #noCards>
      <div class="done-screen">
        <div class="done-emoji">\u{1F389}</div>
        <h2>Ho\xE0n th\xE0nh r\u1ED3i!</h2>
        <p>B\u1EA1n \u0111\xE3 \xF4n t\u1EADp xong t\u1EA5t c\u1EA3 th\u1EBB h\xF4m nay.</p>
        <div class="done-stats" *ngIf="sessionTotal > 0">
          <div class="done-stat">
            <span class="done-val">{{ sessionTotal }}</span>
            <span class="done-lbl">th\u1EBB \u0111\xE3 h\u1ECDc</span>
          </div>
          <div class="done-divider"></div>
          <div class="done-stat">
            <span class="done-val">{{ accuracyPercent }}%</span>
            <span class="done-lbl">\u0111\u1ED9 ch\xEDnh x\xE1c</span>
          </div>
          <div class="done-divider"></div>
          <div class="done-stat">
            <span class="done-val">{{ sessionCorrect }}</span>
            <span class="done-lbl">tr\u1EA3 l\u1EDDi \u0111\xFAng</span>
          </div>
        </div>
        <div class="done-actions">
          <button class="btn btn-primary" routerLink="/dashboard">\u{1F3E0} V\u1EC1 Dashboard</button>
          <button class="btn btn-secondary" routerLink="/decks">\u{1F4DA} My Decks</button>
        </div>
      </div>
    </ng-template>
  </ng-container>
</div>
`, styles: ['/* src/app/features/study/study-session/study-session.component.scss */\n.study-session-container {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 24px 0 48px;\n  animation: fadeIn 0.3s ease-out;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 16px;\n  padding: 6rem 0;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.loading-state .spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid rgba(255, 255, 255, 0.08);\n  border-top-color: #60a5fa;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.session-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n}\n.session-header .back-btn {\n  flex-shrink: 0;\n}\n.session-header .session-progress {\n  flex: 1;\n  min-width: 160px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.session-header .session-progress .progress-track {\n  height: 6px;\n  background: rgba(255, 255, 255, 0.07);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.session-header .session-progress .progress-track .progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #60a5fa,\n      #a78bfa);\n  border-radius: 999px;\n  transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n  animation: progressGrow 0.5s ease-out;\n}\n.session-header .session-progress .progress-track .progress-fill.complete {\n  background:\n    linear-gradient(\n      90deg,\n      #4ade80,\n      #2dd4bf);\n}\n.session-header .session-progress .progress-text {\n  font-size: 0.75rem;\n  color: #6b7280;\n  font-weight: 600;\n}\n.session-header .session-badges {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n}\n.session-header .session-badges .badge {\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.session-header .session-badges .badge.badge-new {\n  background: rgba(239, 68, 68, 0.12);\n  color: #ef4444;\n}\n.session-header .session-badges .badge.badge-learn {\n  background: rgba(245, 158, 11, 0.12);\n  color: #f59e0b;\n}\n.session-header .session-badges .badge.badge-review {\n  background: rgba(96, 165, 250, 0.1);\n  color: #60a5fa;\n}\n.session-header .session-badges .badge.badge-acc {\n  background: rgba(74, 222, 128, 0.1);\n  color: #4ade80;\n}\n.flashcard-area {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n}\n.card-type-strip {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 4px 14px;\n  border-radius: 999px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: 1px solid;\n}\n.card-type-strip.type-new {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n  border-color: rgba(239, 68, 68, 0.2);\n}\n.card-type-strip.type-learning {\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n  border-color: rgba(245, 158, 11, 0.2);\n}\n.card-type-strip.type-young {\n  color: #3b82f6;\n  background: rgba(59, 130, 246, 0.1);\n  border-color: rgba(59, 130, 246, 0.2);\n}\n.card-type-strip.type-mature {\n  color: #22c55e;\n  background: rgba(34, 197, 94, 0.1);\n  border-color: rgba(34, 197, 94, 0.2);\n}\n.card-type-strip.type-relearn {\n  color: #f87171;\n  background: rgba(248, 113, 113, 0.1);\n  border-color: rgba(248, 113, 113, 0.2);\n}\n.card-type-strip .deck-name {\n  color: #6b7280;\n  font-weight: 500;\n  text-transform: none;\n}\n.flashcard {\n  width: 100%;\n  height: 380px;\n  perspective: 1200px;\n  cursor: pointer;\n}\n.flashcard .flashcard-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);\n  transform-style: preserve-3d;\n}\n.flashcard.flipped .flashcard-inner {\n  transform: rotateY(180deg);\n}\n.flashcard .flashcard-front,\n.flashcard .flashcard-back {\n  position: absolute;\n  inset: 0;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.flashcard .flashcard-front {\n  justify-content: center;\n  align-items: center;\n  padding: 48px;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(30, 32, 51, 0.9),\n      rgba(20, 22, 40, 0.95));\n  border: 1px solid rgba(96, 165, 250, 0.1);\n}\n.flashcard .flashcard-front .front-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  justify-content: center;\n}\n.flashcard .flashcard-front .front-content .word-display {\n  text-align: center;\n}\n.flashcard .flashcard-front .front-content .word-display h2 {\n  font-size: 3.2rem;\n  font-weight: 900;\n  letter-spacing: -1px;\n  background:\n    linear-gradient(\n      135deg,\n      #e8e9f0,\n      rgba(96, 165, 250, 0.9));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 4px;\n}\n.flashcard .flashcard-front .front-content .word-display .ipa {\n  font-size: 1.2rem;\n  color: #9ca3b0;\n  font-style: italic;\n}\n.flashcard .flashcard-front .front-content .pos-badge {\n  background: #1e2033;\n  color: #6b7280;\n  padding: 4px 14px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.flashcard .flashcard-front .click-hint {\n  color: #6b7280;\n  font-size: 0.75rem;\n  animation: pulse 2.5s ease-in-out infinite;\n  padding-bottom: 8px;\n}\n.flashcard .flashcard-back {\n  transform: rotateY(180deg);\n  background:\n    linear-gradient(\n      145deg,\n      rgba(30, 32, 51, 0.95),\n      rgba(22, 24, 44, 0.98));\n}\n.flashcard .flashcard-back .back-scroll {\n  padding: 24px 32px;\n  overflow-y: auto;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.flashcard .flashcard-back .back-scroll::-webkit-scrollbar {\n  width: 6px;\n}\n.flashcard .flashcard-back .back-scroll::-webkit-scrollbar-track {\n  background: transparent;\n}\n.flashcard .flashcard-back .back-scroll::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n}\n.flashcard .flashcard-back .back-scroll::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.back-section .section-label {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: #6b7280;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 4px;\n}\n.back-section p {\n  font-size: 1.05rem;\n  line-height: 1.6;\n  color: #e8e9f0;\n}\n.back-section.vi-section .definition-vi {\n  color: #60a5fa;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.back-section .example-sentence {\n  color: #9ca3b0;\n  font-style: italic;\n  font-size: 0.95rem;\n}\n.back-section .collocations {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-top: 4px;\n}\n.back-section .collocations .collocation-chip {\n  background: rgba(45, 212, 191, 0.1);\n  color: #2dd4bf;\n  border: 1px solid rgba(45, 212, 191, 0.2);\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.review-actions {\n  width: 100%;\n  animation: fadeInUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.review-actions .rating-question {\n  text-align: center;\n  color: #9ca3b0;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n  font-weight: 500;\n}\n.feynman-section {\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 16px 24px;\n  border-radius: 10px;\n  margin-bottom: 24px;\n  border-color: rgba(167, 139, 250, 0.15);\n}\n.feynman-section .feynman-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.feynman-section .feynman-header .feynman-title {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #a78bfa;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.feynman-section .feynman-header .feynman-saved {\n  font-size: 0.75rem;\n  color: #4ade80;\n  font-weight: 600;\n  animation: fadeIn 0.3s;\n}\n.feynman-section .feynman-desc {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-bottom: 8px;\n}\n.feynman-section .feynman-input-group {\n  display: flex;\n  gap: 8px;\n}\n.feynman-section .feynman-input-group textarea {\n  flex: 1;\n  resize: none;\n  background: rgba(0, 0, 0, 0.25);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 6px;\n  color: #e8e9f0;\n  padding: 8px;\n  font-size: 0.9rem;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n}\n.feynman-section .feynman-input-group textarea:focus {\n  border-color: rgba(167, 139, 250, 0.5);\n  box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.08);\n}\n.feynman-section .feynman-input-group .feynman-save-btn {\n  padding: 8px 16px;\n  background: rgba(167, 139, 250, 0.12);\n  border: 1px solid rgba(167, 139, 250, 0.25);\n  color: #a78bfa;\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  transition: all 0.15s ease;\n  white-space: nowrap;\n}\n.feynman-section .feynman-input-group .feynman-save-btn:hover:not(:disabled) {\n  background: rgba(167, 139, 250, 0.22);\n  transform: translateY(-1px);\n}\n.feynman-section .feynman-input-group .feynman-save-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.rating-grid {\n  display: grid;\n  gap: 8px;\n}\n.rating-grid.sm2-grid {\n  grid-template-columns: repeat(4, 1fr);\n}\n.rating-grid.leitner-grid {\n  grid-template-columns: repeat(2, 1fr);\n}\n.rating-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  padding: 16px 8px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  transition: all 0.15s ease;\n}\n.rating-btn:not(:disabled):hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);\n}\n.rating-btn:not(:disabled):active {\n  transform: translateY(0);\n}\n.rating-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.rating-btn .btn-emoji {\n  font-size: 1.5rem;\n  line-height: 1;\n}\n.rating-btn .btn-label {\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.rating-btn .btn-sub {\n  font-size: 0.75rem;\n  opacity: 0.7;\n}\n.rating-btn.again {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  border-color: rgba(239, 68, 68, 0.2);\n}\n.rating-btn.again:hover {\n  background: rgba(239, 68, 68, 0.18);\n}\n.rating-btn.hard {\n  background: rgba(249, 115, 22, 0.1);\n  color: #f97316;\n  border-color: rgba(249, 115, 22, 0.2);\n}\n.rating-btn.hard:hover {\n  background: rgba(249, 115, 22, 0.18);\n}\n.rating-btn.good {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n  border-color: rgba(59, 130, 246, 0.2);\n}\n.rating-btn.good:hover {\n  background: rgba(59, 130, 246, 0.18);\n}\n.rating-btn.easy {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n  border-color: rgba(16, 185, 129, 0.2);\n}\n.rating-btn.easy:hover {\n  background: rgba(16, 185, 129, 0.18);\n}\n.done-screen {\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  border-radius: 20px;\n  padding: 4rem 48px;\n  text-align: center;\n  border-color: rgba(74, 222, 128, 0.12);\n  animation: scaleIn 0.45s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.done-screen .done-emoji {\n  font-size: 4rem;\n  display: block;\n  margin-bottom: 24px;\n  animation: float 3s ease-in-out infinite;\n}\n.done-screen h2 {\n  font-size: 2rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #4ade80,\n      #2dd4bf);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 8px;\n}\n.done-screen p {\n  color: #9ca3b0;\n  font-size: 0.875rem;\n  margin-bottom: 32px;\n}\n.done-screen .done-stats {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 32px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 24px 48px;\n  margin-bottom: 32px;\n}\n.done-screen .done-stats .done-stat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.done-screen .done-stats .done-stat .done-val {\n  font-size: 2rem;\n  font-weight: 900;\n  color: #e8e9f0;\n}\n.done-screen .done-stats .done-stat .done-lbl {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.done-screen .done-stats .done-divider {\n  width: 1px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.06);\n}\n.done-screen .done-actions {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n}\n.study-mode-toggle {\n  display: flex;\n  background: rgba(0, 0, 0, 0.25);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 999px;\n  padding: 2px;\n  flex-shrink: 0;\n}\n.study-mode-toggle .toggle-mode-btn {\n  background: transparent;\n  border: none;\n  color: #6b7280;\n  padding: 5px 14px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  transition: all 0.15s ease;\n}\n.study-mode-toggle .toggle-mode-btn:hover {\n  color: #e8e9f0;\n}\n.study-mode-toggle .toggle-mode-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #60a5fa,\n      rgba(96, 165, 250, 0.65));\n  color: #0f1019;\n  box-shadow: 0 4px 10px rgba(96, 165, 250, 0.25);\n}\n.spelling-area {\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(30, 32, 51, 0.95),\n      rgba(22, 24, 44, 0.98));\n  border-radius: 20px;\n  width: 100%;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  animation: fadeIn 0.4s ease-out;\n  border: 1px solid rgba(96, 165, 250, 0.15);\n}\n.spelling-area .spelling-card-header {\n  text-align: center;\n}\n.spelling-area .spelling-card-header h3 {\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: #e8e9f0;\n  margin-bottom: 6px;\n}\n.spelling-area .spelling-card-header .word-meta {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.spelling-area .spelling-card-header .word-meta .word-ipa {\n  color: #60a5fa;\n  font-family: "JetBrains Mono", monospace;\n}\n.spelling-area .spelling-card-header .word-meta .word-pos {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  padding: 1px 8px;\n  border-radius: 999px;\n  text-transform: uppercase;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.spelling-area .spelling-audio-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.spelling-area .spelling-audio-section .audio-btn {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  background: rgba(96, 165, 250, 0.1);\n  border: 2px solid rgba(96, 165, 250, 0.25);\n  color: #60a5fa;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.spelling-area .spelling-audio-section .audio-btn:hover {\n  background: rgba(96, 165, 250, 0.2);\n  transform: scale(1.08);\n  box-shadow: 0 0 20px rgba(96, 165, 250, 0.3);\n}\n.spelling-area .spelling-audio-section .audio-btn .audio-icon {\n  font-size: 1.45rem;\n}\n.spelling-area .spelling-audio-section .word-translation {\n  font-size: 0.875rem;\n  color: #9ca3b0;\n  text-align: center;\n  margin-top: 4px;\n}\n.spelling-area .spelling-audio-section .word-translation strong {\n  color: #60a5fa;\n  font-size: 1rem;\n}\n.spelling-area .spelling-boxes-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin: 4px 0;\n  max-width: 100%;\n}\n.spelling-area .spelling-boxes-container .spelling-box {\n  width: 44px;\n  height: 48px;\n  border-radius: 6px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.02);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  font-family: "JetBrains Mono", monospace;\n  color: #e8e9f0;\n  transition: all 0.15s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.spelling-area .spelling-boxes-container .spelling-box.correct {\n  border-color: #4ade80;\n  background: rgba(74, 222, 128, 0.08);\n  color: #4ade80;\n  box-shadow: 0 0 12px rgba(74, 222, 128, 0.15);\n}\n.spelling-area .spelling-boxes-container .spelling-box.wrong {\n  border-color: #f87171;\n  background: rgba(248, 113, 113, 0.08);\n  color: #f87171;\n  box-shadow: 0 0 12px rgba(248, 113, 113, 0.15);\n}\n.spelling-area .spelling-boxes-container .spelling-box.empty {\n  border-color: rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.02);\n}\n.spelling-area .spelling-boxes-container .spelling-box-special {\n  width: 24px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #6b7280;\n}\n.spelling-area .spelling-boxes-container .hint-btn {\n  background: transparent;\n  border: none;\n  font-size: 1.35rem;\n  cursor: pointer;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 6px;\n  transition: all 0.15s ease;\n}\n.spelling-area .spelling-boxes-container .hint-btn:hover {\n  background: rgba(255, 255, 255, 0.05);\n  transform: scale(1.1);\n}\n.spelling-area .spelling-boxes-container .hint-btn.hint-active {\n  animation: hintFloat 2s ease-in-out infinite alternate;\n}\n.spelling-area .spelling-input-wrapper {\n  width: 100%;\n  max-width: 380px;\n}\n.spelling-area .spelling-input-group {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.spelling-area .spelling-input-group .spelling-input-field {\n  width: 100%;\n  padding: 8px 2.5rem 8px 16px;\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  color: #e8e9f0;\n  font-size: 0.95rem;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  text-align: center;\n  transition: all 0.15s ease;\n}\n.spelling-area .spelling-input-group .spelling-input-field:focus {\n  border-color: rgba(96, 165, 250, 0.5);\n  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.08);\n}\n.spelling-area .spelling-input-group .spelling-input-field.input-correct {\n  border-color: #4ade80;\n  box-shadow: 0 0 14px rgba(74, 222, 128, 0.15);\n}\n.spelling-area .spelling-input-group .spelling-input-field.input-wrong {\n  border-color: #f87171;\n  box-shadow: 0 0 14px rgba(248, 113, 113, 0.15);\n}\n.spelling-area .spelling-input-group .spelling-clear-btn {\n  position: absolute;\n  right: 12px;\n  background: transparent;\n  border: none;\n  color: #6b7280;\n  font-size: 0.85rem;\n  cursor: pointer;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n}\n.spelling-area .spelling-input-group .spelling-clear-btn:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #e8e9f0;\n}\n.spelling-area .spelling-tiles-group {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  max-width: 440px;\n  margin-top: 4px;\n}\n.spelling-area .spelling-tiles-group .letter-tile-btn {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #e8e9f0;\n  font-size: 1rem;\n  font-weight: 700;\n  padding: 4px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  transition: all 0.15s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.spelling-area .spelling-tiles-group .letter-tile-btn:hover {\n  background: rgba(96, 165, 250, 0.12);\n  border-color: rgba(96, 165, 250, 0.25);\n  color: #60a5fa;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.spelling-area .spelling-tiles-group .letter-tile-btn:active {\n  transform: translateY(0);\n}\n.spelling-area .spelling-actions-row {\n  margin-top: 8px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.spelling-area .spelling-actions-row .skip-btn {\n  padding: 8px 24px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #6b7280;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  background: transparent;\n}\n.spelling-area .spelling-actions-row .skip-btn:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #9ca3b0;\n}\n@keyframes hintFloat {\n  from {\n    transform: translateY(0) scale(1);\n  }\n  to {\n    transform: translateY(-3px) scale(1.05);\n    text-shadow: 0 0 10px rgba(251, 191, 36, 0.6);\n  }\n}\n/*# sourceMappingURL=study-session.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudySessionComponent, { className: "StudySessionComponent", filePath: "src/app/features/study/study-session/study-session.component.ts", lineNumber: 15 });
})();
export {
  StudySessionComponent
};
//# sourceMappingURL=chunk-GEWUXSAD.js.map
