import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-CRWT6FOD.js";
import {
  CommonModule,
  Component,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G7WC3NMJ.js";

// src/app/features/settings/settings.component.ts
function SettingsComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4BE} L\u01B0u thay \u0111\u1ED5i");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u0110ang l\u01B0u...");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, " \u2705 C\xE0i \u0111\u1EB7t \u0111\xE3 \u0111\u01B0\u1EE3c l\u01B0u th\xE0nh c\xF4ng! ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("@fadeIn", void 0);
  }
}
var SettingsComponent = class _SettingsComponent {
  currentLang = "en";
  dailyGoal = 20;
  feynmanEnabled = true;
  activeRecallEnabled = true;
  srsAlgorithm = "sm2";
  pomodoroFocus = 25;
  pomodoroBreak = 5;
  isSaving = false;
  saveSuccess = false;
  ngOnInit() {
    this.currentLang = localStorage.getItem("current_lang") || "en";
    this.dailyGoal = Number(localStorage.getItem("daily_goal") || "20");
    this.feynmanEnabled = localStorage.getItem("feynman_enabled") !== "false";
    this.activeRecallEnabled = localStorage.getItem("active_recall_enabled") !== "false";
    this.srsAlgorithm = localStorage.getItem("srs_algorithm") || "sm2";
    this.pomodoroFocus = Number(localStorage.getItem("pomodoro_focus") || "25");
    this.pomodoroBreak = Number(localStorage.getItem("pomodoro_break") || "5");
  }
  saveSettings() {
    this.isSaving = true;
    setTimeout(() => {
      localStorage.setItem("current_lang", this.currentLang);
      localStorage.setItem("daily_goal", this.dailyGoal.toString());
      localStorage.setItem("feynman_enabled", this.feynmanEnabled.toString());
      localStorage.setItem("active_recall_enabled", this.activeRecallEnabled.toString());
      localStorage.setItem("srs_algorithm", this.srsAlgorithm);
      localStorage.setItem("pomodoro_focus", this.pomodoroFocus.toString());
      localStorage.setItem("pomodoro_break", this.pomodoroBreak.toString());
      window.dispatchEvent(new Event("settingsChanged"));
      this.isSaving = false;
      this.saveSuccess = true;
      setTimeout(() => {
        this.saveSuccess = false;
      }, 3e3);
    }, 400);
  }
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], decls: 117, vars: 17, consts: [[1, "page-header", "flex-header"], [1, "btn", "btn-primary", 3, "click", "disabled"], [4, "ngIf"], [1, "settings-container"], ["id", "srs-settings", 1, "settings-card"], [1, "card-header"], [1, "card-icon"], [1, "card-desc"], [1, "algo-options"], [1, "algo-option", 3, "click"], [1, "algo-header"], [1, "algo-icon"], [1, "algo-check"], [1, "algo-badge"], ["id", "study-settings", 1, "settings-card"], [1, "setting-item"], [1, "setting-info"], [1, "number-input-wrap"], [1, "num-btn", 3, "click"], ["type", "number", "min", "1", "max", "200", 1, "num-input", 3, "ngModelChange", "ngModel"], [1, "toggle-switch"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "toggle-track"], [1, "toggle-thumb"], ["id", "pomodoro-settings", 1, "settings-card"], ["type", "number", "min", "5", "max", "90", 1, "num-input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "max", "30", 1, "num-input", 3, "ngModelChange", "ngModel"], ["class", "save-toast", 4, "ngIf"], [1, "save-toast"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1");
      \u0275\u0275text(3, "\u2699\uFE0F Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Tu\u1EF3 ch\u1EC9nh tr\u1EA3i nghi\u1EC7m h\u1ECDc t\u1EADp c\u1EE7a b\u1EA1n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 1);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_6_listener() {
        return ctx.saveSettings();
      });
      \u0275\u0275template(7, SettingsComponent_span_7_Template, 2, 0, "span", 2)(8, SettingsComponent_span_8_Template, 2, 0, "span", 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 3)(10, "div", 4)(11, "div", 5)(12, "span", 6);
      \u0275\u0275text(13, "\u{1F9E0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div")(15, "h2");
      \u0275\u0275text(16, "Thu\u1EADt to\xE1n SRS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 7);
      \u0275\u0275text(18, "Ch\u1ECDn ph\u01B0\u01A1ng ph\xE1p ghi nh\u1EDB t\u1ED1i \u01B0u nh\u1EA5t cho b\u1EA1n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 8)(20, "div", 9);
      \u0275\u0275listener("click", function SettingsComponent_Template_div_click_20_listener() {
        return ctx.srsAlgorithm = "sm2";
      });
      \u0275\u0275elementStart(21, "div", 10)(22, "span", 11);
      \u0275\u0275text(23, "\u{1F4C8}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 12);
      \u0275\u0275text(25, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "h3");
      \u0275\u0275text(27, "SuperMemo-2 (SM-2)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p");
      \u0275\u0275text(29, "Thu\u1EADt to\xE1n nghi\xEAn c\u1EE9u khoa h\u1ECDc. Th\xEDch \u1EE9ng theo t\u1EEBng th\u1EBB d\u1EF1a tr\xEAn ch\u1EA5t l\u01B0\u1EE3ng nh\u1EDB (Again/Hard/Good/Easy).");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 13);
      \u0275\u0275text(31, "\u0110\u01B0\u1EE3c khuy\u1EBFn ngh\u1ECB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 9);
      \u0275\u0275listener("click", function SettingsComponent_Template_div_click_32_listener() {
        return ctx.srsAlgorithm = "leitner";
      });
      \u0275\u0275elementStart(33, "div", 10)(34, "span", 11);
      \u0275\u0275text(35, "\u{1F4E6}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 12);
      \u0275\u0275text(37, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "h3");
      \u0275\u0275text(39, "Leitner Box System");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "p");
      \u0275\u0275text(41, "H\u1EC7 th\u1ED1ng h\u1ED9p \u0111\u01A1n gi\u1EA3n. Th\u1EBB \u0111\xFAng ti\u1EBFn l\xEAn h\u1ED9p cao h\u01A1n (\xF4n \xEDt h\u01A1n), sai v\u1EC1 h\u1ED9p 1.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(42, "div", 14)(43, "div", 5)(44, "span", 6);
      \u0275\u0275text(45, "\u{1F4DA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div")(47, "h2");
      \u0275\u0275text(48, "Tu\u1EF3 ch\u1EC9nh h\u1ECDc t\u1EADp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "p", 7);
      \u0275\u0275text(50, "C\u1EA5u h\xECnh m\u1EE5c ti\xEAu v\xE0 ph\u01B0\u01A1ng ph\xE1p h\u1ECDc");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "div", 15)(52, "div", 16)(53, "label");
      \u0275\u0275text(54, "\u{1F3AF} M\u1EE5c ti\xEAu h\xE0ng ng\xE0y");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p");
      \u0275\u0275text(56, "S\u1ED1 th\u1EBB m\u1EDBi s\u1EBD h\u1ECDc m\u1ED7i ng\xE0y");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 17)(58, "button", 18);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_58_listener() {
        return ctx.dailyGoal = ctx.dailyGoal > 5 ? ctx.dailyGoal - 5 : 5;
      });
      \u0275\u0275text(59, "\u2212");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_60_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dailyGoal, $event) || (ctx.dailyGoal = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "button", 18);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_61_listener() {
        return ctx.dailyGoal = ctx.dailyGoal + 5;
      });
      \u0275\u0275text(62, "+");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "div", 15)(64, "div", 16)(65, "label");
      \u0275\u0275text(66, "\u{1F9E0} Feynman Technique");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "p");
      \u0275\u0275text(68, "Hi\u1EC7n \xF4 nh\u1EADp \u0111\u1EC3 b\u1EA1n gi\u1EA3i th\xEDch t\u1EEB theo c\xE1ch hi\u1EC3u ri\xEAng \u2014 m\u1ED9t trong nh\u1EEFng c\xE1ch h\u1ECDc hi\u1EC7u qu\u1EA3 nh\u1EA5t");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "label", 20)(70, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_70_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.feynmanEnabled, $event) || (ctx.feynmanEnabled = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "span", 22);
      \u0275\u0275element(72, "span", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "div", 15)(74, "div", 16)(75, "label");
      \u0275\u0275text(76, "\u{1F500} Active Recall Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p");
      \u0275\u0275text(78, "\u1EA8n ngh\u0129a tr\xEAn m\u1EB7t tr\u01B0\u1EDBc th\u1EBB, bu\u1ED9c n\xE3o ph\u1EA3i t\u1EF1 nh\u1EDB tr\u01B0\u1EDBc khi l\u1EADt");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "label", 20)(80, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_80_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.activeRecallEnabled, $event) || (ctx.activeRecallEnabled = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "span", 22);
      \u0275\u0275element(82, "span", 23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(83, "div", 24)(84, "div", 5)(85, "span", 6);
      \u0275\u0275text(86, "\u23F1\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div")(88, "h2");
      \u0275\u0275text(89, "Pomodoro Timer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "p", 7);
      \u0275\u0275text(91, "Tu\u1EF3 ch\u1EC9nh kho\u1EA3ng th\u1EDDi gian t\u1EADp trung & ngh\u1EC9 ng\u01A1i");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "div", 15)(93, "div", 16)(94, "label");
      \u0275\u0275text(95, "\u{1F3AF} Th\u1EDDi gian t\u1EADp trung");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "p");
      \u0275\u0275text(97, "Ph\xFAt m\u1ED7i phi\xEAn h\u1ECDc");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 17)(99, "button", 18);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_99_listener() {
        return ctx.pomodoroFocus = ctx.pomodoroFocus > 5 ? ctx.pomodoroFocus - 5 : 5;
      });
      \u0275\u0275text(100, "\u2212");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_101_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pomodoroFocus, $event) || (ctx.pomodoroFocus = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "button", 18);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_102_listener() {
        return ctx.pomodoroFocus = ctx.pomodoroFocus + 5;
      });
      \u0275\u0275text(103, "+");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "div", 15)(105, "div", 16)(106, "label");
      \u0275\u0275text(107, "\u2615 Th\u1EDDi gian ngh\u1EC9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "p");
      \u0275\u0275text(109, "Ph\xFAt m\u1ED7i l\u1EA7n ngh\u1EC9 ng\u1EAFn");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "div", 17)(111, "button", 18);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_111_listener() {
        return ctx.pomodoroBreak = ctx.pomodoroBreak > 1 ? ctx.pomodoroBreak - 1 : 1;
      });
      \u0275\u0275text(112, "\u2212");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_113_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pomodoroBreak, $event) || (ctx.pomodoroBreak = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "button", 18);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_114_listener() {
        return ctx.pomodoroBreak = ctx.pomodoroBreak + 1;
      });
      \u0275\u0275text(115, "+");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(116, SettingsComponent_div_116_Template, 2, 1, "div", 27);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSaving);
      \u0275\u0275advance(12);
      \u0275\u0275classProp("selected", ctx.srsAlgorithm === "sm2");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.srsAlgorithm === "sm2");
      \u0275\u0275advance(8);
      \u0275\u0275classProp("selected", ctx.srsAlgorithm === "leitner");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.srsAlgorithm === "leitner");
      \u0275\u0275advance(24);
      \u0275\u0275twoWayProperty("ngModel", ctx.dailyGoal);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.feynmanEnabled);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.activeRecallEnabled);
      \u0275\u0275advance(21);
      \u0275\u0275twoWayProperty("ngModel", ctx.pomodoroFocus);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.pomodoroBreak);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.saveSuccess);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ['\n\n.settings-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  max-width: 820px;\n}\n.settings-card[_ngcontent-%COMP%] {\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n  padding: 32px;\n  animation: fadeInUp 0.4s ease-out both;\n}\n.settings-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -75%;\n  width: 50%;\n  height: 200%;\n  background:\n    linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.04) 50%,\n      rgba(255, 255, 255, 0) 100%);\n  transform: skewX(-15deg);\n  transition: left 0.6s ease;\n  pointer-events: none;\n}\n.settings-card[_ngcontent-%COMP%]:hover::after {\n  left: 125%;\n}\n.settings-card[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.05s;\n}\n.settings-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.settings-card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.15s;\n}\n.settings-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.settings-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  line-height: 1;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.settings-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #e8e9f0;\n  margin-bottom: 2px;\n}\n.settings-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.algo-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 600px) {\n  .algo-options[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.algo-option[_ngcontent-%COMP%] {\n  border: 2px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 24px;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  background: rgba(255, 255, 255, 0.02);\n  position: relative;\n}\n.algo-option[_ngcontent-%COMP%]:hover {\n  border-color: rgba(96, 165, 250, 0.3);\n  background: rgba(96, 165, 250, 0.03);\n  transform: translateY(-2px);\n}\n.algo-option.selected[_ngcontent-%COMP%] {\n  border-color: rgba(96, 165, 250, 0.5);\n  background: rgba(96, 165, 250, 0.07);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.15);\n}\n.algo-option[_ngcontent-%COMP%]   .algo-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 8px;\n}\n.algo-option[_ngcontent-%COMP%]   .algo-header[_ngcontent-%COMP%]   .algo-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.algo-option[_ngcontent-%COMP%]   .algo-header[_ngcontent-%COMP%]   .algo-check[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  font-weight: 900;\n  color: transparent;\n  transition: all 0.15s ease;\n}\n.algo-option[_ngcontent-%COMP%]   .algo-header[_ngcontent-%COMP%]   .algo-check.active[_ngcontent-%COMP%] {\n  background: #60a5fa;\n  border-color: #60a5fa;\n  color: white;\n}\n.algo-option[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #e8e9f0;\n  margin-bottom: 6px;\n}\n.algo-option[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  line-height: 1.6;\n  margin-bottom: 8px;\n}\n.algo-option[_ngcontent-%COMP%]   .algo-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #4ade80;\n  background: rgba(74, 222, 128, 0.1);\n  border: 1px solid rgba(74, 222, 128, 0.2);\n  border-radius: 999px;\n  padding: 2px 8px;\n}\n.setting-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 0;\n}\n.setting-item[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n}\n.setting-item[_ngcontent-%COMP%]   .setting-info[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 32px;\n  min-width: 0;\n}\n.setting-item[_ngcontent-%COMP%]   .setting-info[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #e8e9f0;\n  display: block;\n  margin-bottom: 3px;\n  font-size: 0.875rem;\n}\n.setting-item[_ngcontent-%COMP%]   .setting-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.75rem;\n  line-height: 1.5;\n}\n.number-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 10px;\n  padding: 2px;\n  flex-shrink: 0;\n}\n.number-input-wrap[_ngcontent-%COMP%]   .num-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: rgba(255, 255, 255, 0.06);\n  color: #e8e9f0;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 700;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  transition: all 0.15s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.number-input-wrap[_ngcontent-%COMP%]   .num-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.12);\n}\n.number-input-wrap[_ngcontent-%COMP%]   .num-input[_ngcontent-%COMP%] {\n  width: 50px;\n  text-align: center;\n  background: transparent;\n  border: none;\n  color: #e8e9f0;\n  font-size: 0.875rem;\n  font-weight: 700;\n  padding: 4px 0;\n}\n.number-input-wrap[_ngcontent-%COMP%]   .num-input[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.number-input-wrap[_ngcontent-%COMP%]   .num-input[_ngcontent-%COMP%]::-webkit-inner-spin-button, \n.number-input-wrap[_ngcontent-%COMP%]   .num-input[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  display: none;\n}\n.toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.toggle-switch[_ngcontent-%COMP%]   .toggle-track[_ngcontent-%COMP%] {\n  display: block;\n  width: 48px;\n  height: 26px;\n  border-radius: 13px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  transition: all 0.25s ease;\n  position: relative;\n}\n.toggle-switch[_ngcontent-%COMP%]   .toggle-thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 18px;\n  height: 18px;\n  background: white;\n  border-radius: 50%;\n  transition: transform 0.25s ease, background 0.25s ease;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-track[_ngcontent-%COMP%] {\n  background: #60a5fa;\n  border-color: rgba(96, 165, 250, 0.5);\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-track[_ngcontent-%COMP%]   .toggle-thumb[_ngcontent-%COMP%] {\n  transform: translateX(22px);\n}\n.save-toast[_ngcontent-%COMP%] {\n  background: rgba(74, 222, 128, 0.1);\n  border: 1px solid rgba(74, 222, 128, 0.2);\n  color: #4ade80;\n  padding: 16px 24px;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-align: center;\n  animation: fadeInUp 0.3s ease-out;\n}\n/*# sourceMappingURL=settings.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-header flex-header">
  <div>
    <h1>\u2699\uFE0F Settings</h1>
    <p>Tu\u1EF3 ch\u1EC9nh tr\u1EA3i nghi\u1EC7m h\u1ECDc t\u1EADp c\u1EE7a b\u1EA1n</p>
  </div>
  <button class="btn btn-primary" (click)="saveSettings()" [disabled]="isSaving">
    <span *ngIf="!isSaving">\u{1F4BE} L\u01B0u thay \u0111\u1ED5i</span>
    <span *ngIf="isSaving">\u0110ang l\u01B0u...</span>
  </button>
</div>

<div class="settings-container">

  <!-- SRS Algorithm -->
  <div class="settings-card" id="srs-settings">
    <div class="card-header">
      <span class="card-icon">\u{1F9E0}</span>
      <div>
        <h2>Thu\u1EADt to\xE1n SRS</h2>
        <p class="card-desc">Ch\u1ECDn ph\u01B0\u01A1ng ph\xE1p ghi nh\u1EDB t\u1ED1i \u01B0u nh\u1EA5t cho b\u1EA1n</p>
      </div>
    </div>

    <div class="algo-options">
      <div class="algo-option" [class.selected]="srsAlgorithm === 'sm2'"
           (click)="srsAlgorithm = 'sm2'">
        <div class="algo-header">
          <span class="algo-icon">\u{1F4C8}</span>
          <div class="algo-check" [class.active]="srsAlgorithm === 'sm2'">\u2713</div>
        </div>
        <h3>SuperMemo-2 (SM-2)</h3>
        <p>Thu\u1EADt to\xE1n nghi\xEAn c\u1EE9u khoa h\u1ECDc. Th\xEDch \u1EE9ng theo t\u1EEBng th\u1EBB d\u1EF1a tr\xEAn ch\u1EA5t l\u01B0\u1EE3ng nh\u1EDB (Again/Hard/Good/Easy).</p>
        <div class="algo-badge">\u0110\u01B0\u1EE3c khuy\u1EBFn ngh\u1ECB</div>
      </div>

      <div class="algo-option" [class.selected]="srsAlgorithm === 'leitner'"
           (click)="srsAlgorithm = 'leitner'">
        <div class="algo-header">
          <span class="algo-icon">\u{1F4E6}</span>
          <div class="algo-check" [class.active]="srsAlgorithm === 'leitner'">\u2713</div>
        </div>
        <h3>Leitner Box System</h3>
        <p>H\u1EC7 th\u1ED1ng h\u1ED9p \u0111\u01A1n gi\u1EA3n. Th\u1EBB \u0111\xFAng ti\u1EBFn l\xEAn h\u1ED9p cao h\u01A1n (\xF4n \xEDt h\u01A1n), sai v\u1EC1 h\u1ED9p 1.</p>
      </div>
    </div>
  </div>

  <!-- Study Preferences -->
  <div class="settings-card" id="study-settings">
    <div class="card-header">
      <span class="card-icon">\u{1F4DA}</span>
      <div>
        <h2>Tu\u1EF3 ch\u1EC9nh h\u1ECDc t\u1EADp</h2>
        <p class="card-desc">C\u1EA5u h\xECnh m\u1EE5c ti\xEAu v\xE0 ph\u01B0\u01A1ng ph\xE1p h\u1ECDc</p>
      </div>
    </div>

    <div class="setting-item">
      <div class="setting-info">
        <label>\u{1F3AF} M\u1EE5c ti\xEAu h\xE0ng ng\xE0y</label>
        <p>S\u1ED1 th\u1EBB m\u1EDBi s\u1EBD h\u1ECDc m\u1ED7i ng\xE0y</p>
      </div>
      <div class="number-input-wrap">
        <button class="num-btn" (click)="dailyGoal = dailyGoal > 5 ? dailyGoal - 5 : 5">\u2212</button>
        <input type="number" class="num-input" [(ngModel)]="dailyGoal" min="1" max="200">
        <button class="num-btn" (click)="dailyGoal = dailyGoal + 5">+</button>
      </div>
    </div>

    <div class="setting-item">
      <div class="setting-info">
        <label>\u{1F9E0} Feynman Technique</label>
        <p>Hi\u1EC7n \xF4 nh\u1EADp \u0111\u1EC3 b\u1EA1n gi\u1EA3i th\xEDch t\u1EEB theo c\xE1ch hi\u1EC3u ri\xEAng \u2014 m\u1ED9t trong nh\u1EEFng c\xE1ch h\u1ECDc hi\u1EC7u qu\u1EA3 nh\u1EA5t</p>
      </div>
      <label class="toggle-switch">
        <input type="checkbox" [(ngModel)]="feynmanEnabled">
        <span class="toggle-track">
          <span class="toggle-thumb"></span>
        </span>
      </label>
    </div>

    <div class="setting-item">
      <div class="setting-info">
        <label>\u{1F500} Active Recall Mode</label>
        <p>\u1EA8n ngh\u0129a tr\xEAn m\u1EB7t tr\u01B0\u1EDBc th\u1EBB, bu\u1ED9c n\xE3o ph\u1EA3i t\u1EF1 nh\u1EDB tr\u01B0\u1EDBc khi l\u1EADt</p>
      </div>
      <label class="toggle-switch">
        <input type="checkbox" [(ngModel)]="activeRecallEnabled">
        <span class="toggle-track">
          <span class="toggle-thumb"></span>
        </span>
      </label>
    </div>
  </div>

  <!-- Pomodoro Timer -->
  <div class="settings-card" id="pomodoro-settings">
    <div class="card-header">
      <span class="card-icon">\u23F1\uFE0F</span>
      <div>
        <h2>Pomodoro Timer</h2>
        <p class="card-desc">Tu\u1EF3 ch\u1EC9nh kho\u1EA3ng th\u1EDDi gian t\u1EADp trung & ngh\u1EC9 ng\u01A1i</p>
      </div>
    </div>

    <div class="setting-item">
      <div class="setting-info">
        <label>\u{1F3AF} Th\u1EDDi gian t\u1EADp trung</label>
        <p>Ph\xFAt m\u1ED7i phi\xEAn h\u1ECDc</p>
      </div>
      <div class="number-input-wrap">
        <button class="num-btn" (click)="pomodoroFocus = pomodoroFocus > 5 ? pomodoroFocus - 5 : 5">\u2212</button>
        <input type="number" class="num-input" [(ngModel)]="pomodoroFocus" min="5" max="90">
        <button class="num-btn" (click)="pomodoroFocus = pomodoroFocus + 5">+</button>
      </div>
    </div>

    <div class="setting-item">
      <div class="setting-info">
        <label>\u2615 Th\u1EDDi gian ngh\u1EC9</label>
        <p>Ph\xFAt m\u1ED7i l\u1EA7n ngh\u1EC9 ng\u1EAFn</p>
      </div>
      <div class="number-input-wrap">
        <button class="num-btn" (click)="pomodoroBreak = pomodoroBreak > 1 ? pomodoroBreak - 1 : 1">\u2212</button>
        <input type="number" class="num-input" [(ngModel)]="pomodoroBreak" min="1" max="30">
        <button class="num-btn" (click)="pomodoroBreak = pomodoroBreak + 1">+</button>
      </div>
    </div>
  </div>

  <!-- Save success toast -->
  <div class="save-toast" *ngIf="saveSuccess" [@fadeIn]>
    \u2705 C\xE0i \u0111\u1EB7t \u0111\xE3 \u0111\u01B0\u1EE3c l\u01B0u th\xE0nh c\xF4ng!
  </div>

</div>
`, styles: ['/* src/app/features/settings/settings.component.scss */\n.settings-container {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  max-width: 820px;\n}\n.settings-card {\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n  padding: 32px;\n  animation: fadeInUp 0.4s ease-out both;\n}\n.settings-card::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -75%;\n  width: 50%;\n  height: 200%;\n  background:\n    linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.04) 50%,\n      rgba(255, 255, 255, 0) 100%);\n  transform: skewX(-15deg);\n  transition: left 0.6s ease;\n  pointer-events: none;\n}\n.settings-card:hover::after {\n  left: 125%;\n}\n.settings-card:nth-child(1) {\n  animation-delay: 0.05s;\n}\n.settings-card:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.settings-card:nth-child(3) {\n  animation-delay: 0.15s;\n}\n.settings-card .card-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.settings-card .card-header .card-icon {\n  font-size: 1.8rem;\n  line-height: 1;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.settings-card .card-header h2 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #e8e9f0;\n  margin-bottom: 2px;\n}\n.settings-card .card-header .card-desc {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.algo-options {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 600px) {\n  .algo-options {\n    grid-template-columns: 1fr;\n  }\n}\n.algo-option {\n  border: 2px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 24px;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  background: rgba(255, 255, 255, 0.02);\n  position: relative;\n}\n.algo-option:hover {\n  border-color: rgba(96, 165, 250, 0.3);\n  background: rgba(96, 165, 250, 0.03);\n  transform: translateY(-2px);\n}\n.algo-option.selected {\n  border-color: rgba(96, 165, 250, 0.5);\n  background: rgba(96, 165, 250, 0.07);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.15);\n}\n.algo-option .algo-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 8px;\n}\n.algo-option .algo-header .algo-icon {\n  font-size: 1.5rem;\n}\n.algo-option .algo-header .algo-check {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  font-weight: 900;\n  color: transparent;\n  transition: all 0.15s ease;\n}\n.algo-option .algo-header .algo-check.active {\n  background: #60a5fa;\n  border-color: #60a5fa;\n  color: white;\n}\n.algo-option h3 {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #e8e9f0;\n  margin-bottom: 6px;\n}\n.algo-option p {\n  font-size: 0.75rem;\n  color: #6b7280;\n  line-height: 1.6;\n  margin-bottom: 8px;\n}\n.algo-option .algo-badge {\n  display: inline-block;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #4ade80;\n  background: rgba(74, 222, 128, 0.1);\n  border: 1px solid rgba(74, 222, 128, 0.2);\n  border-radius: 999px;\n  padding: 2px 8px;\n}\n.setting-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 0;\n}\n.setting-item:not(:last-child) {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n}\n.setting-item .setting-info {\n  flex: 1;\n  padding-right: 32px;\n  min-width: 0;\n}\n.setting-item .setting-info label {\n  font-weight: 600;\n  color: #e8e9f0;\n  display: block;\n  margin-bottom: 3px;\n  font-size: 0.875rem;\n}\n.setting-item .setting-info p {\n  color: #6b7280;\n  font-size: 0.75rem;\n  line-height: 1.5;\n}\n.number-input-wrap {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 10px;\n  padding: 2px;\n  flex-shrink: 0;\n}\n.number-input-wrap .num-btn {\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: rgba(255, 255, 255, 0.06);\n  color: #e8e9f0;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 700;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  transition: all 0.15s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.number-input-wrap .num-btn:hover {\n  background: rgba(255, 255, 255, 0.12);\n}\n.number-input-wrap .num-input {\n  width: 50px;\n  text-align: center;\n  background: transparent;\n  border: none;\n  color: #e8e9f0;\n  font-size: 0.875rem;\n  font-weight: 700;\n  padding: 4px 0;\n}\n.number-input-wrap .num-input:focus {\n  box-shadow: none;\n}\n.number-input-wrap .num-input::-webkit-inner-spin-button,\n.number-input-wrap .num-input::-webkit-outer-spin-button {\n  display: none;\n}\n.toggle-switch {\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.toggle-switch input {\n  display: none;\n}\n.toggle-switch .toggle-track {\n  display: block;\n  width: 48px;\n  height: 26px;\n  border-radius: 13px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  transition: all 0.25s ease;\n  position: relative;\n}\n.toggle-switch .toggle-thumb {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 18px;\n  height: 18px;\n  background: white;\n  border-radius: 50%;\n  transition: transform 0.25s ease, background 0.25s ease;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.toggle-switch input:checked + .toggle-track {\n  background: #60a5fa;\n  border-color: rgba(96, 165, 250, 0.5);\n}\n.toggle-switch input:checked + .toggle-track .toggle-thumb {\n  transform: translateX(22px);\n}\n.save-toast {\n  background: rgba(74, 222, 128, 0.1);\n  border: 1px solid rgba(74, 222, 128, 0.2);\n  color: #4ade80;\n  padding: 16px 24px;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-align: center;\n  animation: fadeInUp 0.3s ease-out;\n}\n/*# sourceMappingURL=settings.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/settings/settings.component.ts", lineNumber: 12 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-JYRI6SBJ.js.map
