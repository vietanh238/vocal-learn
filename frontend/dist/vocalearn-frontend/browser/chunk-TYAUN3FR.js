import {
  AuthService
} from "./chunk-NPGZ4JCN.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-YPDWKRJV.js";
import {
  ApiService
} from "./chunk-C2MBYHGA.js";
import "./chunk-EX2AIKSR.js";
import {
  CommonModule,
  Component,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-G7WC3NMJ.js";

// src/app/features/study/pomodoro/pomodoro.component.ts
function PomodoroComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.pomodoroCount, "\u{1F345}");
  }
}
var PomodoroComponent = class _PomodoroComponent {
  FOCUS_TIME = 25 * 60;
  BREAK_TIME = 5 * 60;
  timeLeft = this.FOCUS_TIME;
  isRunning = false;
  isBreak = false;
  timer;
  pomodoroCount = 0;
  circumference = 52 * 2 * Math.PI;
  strokeDashoffset = 0;
  settingsListener = () => this.reloadSettings();
  ngOnInit() {
    this.reloadSettings();
    window.addEventListener("settingsChanged", this.settingsListener);
  }
  reloadSettings() {
    const focus = Number(localStorage.getItem("pomodoro_focus") || "25");
    const brk = Number(localStorage.getItem("pomodoro_break") || "5");
    this.FOCUS_TIME = focus * 60;
    this.BREAK_TIME = brk * 60;
    if (!this.isRunning) {
      this.timeLeft = this.isBreak ? this.BREAK_TIME : this.FOCUS_TIME;
      this.updateProgress();
    }
  }
  toggleTimer() {
    this.isRunning = !this.isRunning;
    if (this.isRunning) {
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
          this.updateProgress();
        } else {
          this.playAlarm();
          this.switchMode();
        }
      }, 1e3);
    } else {
      clearInterval(this.timer);
    }
  }
  resetTimer() {
    clearInterval(this.timer);
    this.isRunning = false;
    this.timeLeft = this.isBreak ? this.BREAK_TIME : this.FOCUS_TIME;
    this.updateProgress();
  }
  switchMode() {
    if (!this.isBreak)
      this.pomodoroCount++;
    this.isBreak = !this.isBreak;
    this.resetTimer();
  }
  formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }
  updateProgress() {
    const total = this.isBreak ? this.BREAK_TIME : this.FOCUS_TIME;
    const progress = this.timeLeft / total;
    this.strokeDashoffset = this.circumference - progress * this.circumference;
  }
  playAlarm() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(this.isBreak ? 523.25 : 440, ctx.currentTime);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + 0.8);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.8);
    } catch {
    }
  }
  ngOnDestroy() {
    if (this.timer)
      clearInterval(this.timer);
    window.removeEventListener("settingsChanged", this.settingsListener);
  }
  static \u0275fac = function PomodoroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PomodoroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PomodoroComponent, selectors: [["app-pomodoro"]], decls: 15, vars: 13, consts: [[1, "pomodoro-container"], ["width", "110", "height", "110", 1, "progress-ring"], ["stroke-width", "3", "fill", "transparent", "r", "52", "cx", "55", "cy", "55", 1, "ring-track"], ["stroke-width", "3", "fill", "transparent", "r", "52", "cx", "55", "cy", "55", 1, "ring-fill"], [1, "pomodoro-inner"], ["class", "pomo-count", 4, "ngIf"], [1, "timer-time"], [1, "timer-mode"], [1, "pomo-controls"], [1, "pomo-btn", 3, "click", "title"], ["title", "Reset", 1, "pomo-btn", "reset-btn", 3, "click"], [1, "pomo-count"]], template: function PomodoroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 1);
      \u0275\u0275element(2, "circle", 2)(3, "circle", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275template(5, PomodoroComponent_div_5_Template, 2, 1, "div", 5);
      \u0275\u0275elementStart(6, "div", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 8)(11, "button", 9);
      \u0275\u0275listener("click", function PomodoroComponent_Template_button_click_11_listener() {
        return ctx.toggleTimer();
      });
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 10);
      \u0275\u0275listener("click", function PomodoroComponent_Template_button_click_13_listener() {
        return ctx.resetTimer();
      });
      \u0275\u0275text(14, "\u27F3");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("active", ctx.isRunning && !ctx.isBreak)("break-mode", ctx.isBreak);
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("stroke-dasharray", ctx.circumference)("stroke-dashoffset", ctx.strokeDashoffset);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.pomodoroCount > 0);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.formatTime(ctx.timeLeft));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isBreak ? "Break" : "Focus");
      \u0275\u0275advance(2);
      \u0275\u0275property("title", ctx.isRunning ? "Pause" : "Start");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isRunning ? "\u23F8" : "\u25B6", " ");
    }
  }, dependencies: [CommonModule, NgIf], styles: ['\n\n.pomodoro-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 110px;\n  height: 110px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: 0 auto;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  transition: all 0.25s ease;\n}\n.pomodoro-container.active[_ngcontent-%COMP%] {\n  border-color: rgba(96, 165, 250, 0.3);\n  box-shadow: 0 0 16px rgba(96, 165, 250, 0.12);\n  animation: _ngcontent-%COMP%_pulse-ring 2s ease-in-out infinite;\n}\n.pomodoro-container.break-mode[_ngcontent-%COMP%] {\n  border-color: rgba(74, 222, 128, 0.3);\n  box-shadow: 0 0 16px rgba(74, 222, 128, 0.12);\n}\n.pomodoro-container.break-mode[_ngcontent-%COMP%]   .ring-fill[_ngcontent-%COMP%] {\n  stroke: #4ade80;\n}\n.pomodoro-container.break-mode[_ngcontent-%COMP%]   .timer-time[_ngcontent-%COMP%] {\n  color: #4ade80;\n}\n@keyframes _ngcontent-%COMP%_pulse-ring {\n  0%, 100% {\n    box-shadow: 0 0 12px rgba(96, 165, 250, 0.1);\n  }\n  50% {\n    box-shadow: 0 0 24px rgba(96, 165, 250, 0.25);\n  }\n}\n.progress-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: rotate(-90deg);\n  pointer-events: none;\n}\n.ring-track[_ngcontent-%COMP%] {\n  stroke: rgba(255, 255, 255, 0.06);\n  stroke-dasharray: 327;\n}\n.ring-fill[_ngcontent-%COMP%] {\n  stroke: #60a5fa;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.95s linear, stroke 0.25s ease;\n}\n.pomodoro-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1px;\n}\n.pomodoro-inner[_ngcontent-%COMP%]   .pomo-count[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #fb923c;\n  font-weight: 700;\n  margin-bottom: 1px;\n}\n.pomodoro-inner[_ngcontent-%COMP%]   .timer-time[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: #e8e9f0;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.5px;\n  line-height: 1;\n  transition: color 0.25s ease;\n}\n.pomodoro-inner[_ngcontent-%COMP%]   .timer-mode[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #6b7280;\n}\n.pomo-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -28px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 4px;\n  z-index: 3;\n}\n.pomo-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 6px;\n  color: #9ca3b0;\n  cursor: pointer;\n  padding: 3px 8px;\n  font-size: 0.85rem;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  transition: all 0.15s ease;\n  line-height: 1;\n}\n.pomo-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.12);\n  color: #e8e9f0;\n  border-color: rgba(255, 255, 255, 0.12);\n}\n.pomo-btn.reset-btn[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=pomodoro.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PomodoroComponent, [{
    type: Component,
    args: [{ selector: "app-pomodoro", standalone: true, imports: [CommonModule], template: `<div class="pomodoro-container" [class.active]="isRunning && !isBreak" [class.break-mode]="isBreak">

  <!-- SVG Ring -->
  <svg class="progress-ring" width="110" height="110">
    <circle class="ring-track" stroke-width="3" fill="transparent" r="52" cx="55" cy="55"/>
    <circle class="ring-fill"
      stroke-width="3"
      fill="transparent"
      r="52" cx="55" cy="55"
      [style.strokeDasharray]="circumference"
      [style.strokeDashoffset]="strokeDashoffset"/>
  </svg>

  <!-- Inner content -->
  <div class="pomodoro-inner">
    <div class="pomo-count" *ngIf="pomodoroCount > 0">{{ pomodoroCount }}\u{1F345}</div>
    <div class="timer-time">{{ formatTime(timeLeft) }}</div>
    <div class="timer-mode">{{ isBreak ? 'Break' : 'Focus' }}</div>
  </div>

  <!-- Controls -->
  <div class="pomo-controls">
    <button class="pomo-btn" (click)="toggleTimer()" [title]="isRunning ? 'Pause' : 'Start'">
      {{ isRunning ? '\u23F8' : '\u25B6' }}
    </button>
    <button class="pomo-btn reset-btn" (click)="resetTimer()" title="Reset">\u27F3</button>
  </div>

</div>
`, styles: ['/* src/app/features/study/pomodoro/pomodoro.component.scss */\n.pomodoro-container {\n  position: relative;\n  width: 110px;\n  height: 110px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: 0 auto;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  transition: all 0.25s ease;\n}\n.pomodoro-container.active {\n  border-color: rgba(96, 165, 250, 0.3);\n  box-shadow: 0 0 16px rgba(96, 165, 250, 0.12);\n  animation: pulse-ring 2s ease-in-out infinite;\n}\n.pomodoro-container.break-mode {\n  border-color: rgba(74, 222, 128, 0.3);\n  box-shadow: 0 0 16px rgba(74, 222, 128, 0.12);\n}\n.pomodoro-container.break-mode .ring-fill {\n  stroke: #4ade80;\n}\n.pomodoro-container.break-mode .timer-time {\n  color: #4ade80;\n}\n@keyframes pulse-ring {\n  0%, 100% {\n    box-shadow: 0 0 12px rgba(96, 165, 250, 0.1);\n  }\n  50% {\n    box-shadow: 0 0 24px rgba(96, 165, 250, 0.25);\n  }\n}\n.progress-ring {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: rotate(-90deg);\n  pointer-events: none;\n}\n.ring-track {\n  stroke: rgba(255, 255, 255, 0.06);\n  stroke-dasharray: 327;\n}\n.ring-fill {\n  stroke: #60a5fa;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.95s linear, stroke 0.25s ease;\n}\n.pomodoro-inner {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1px;\n}\n.pomodoro-inner .pomo-count {\n  font-size: 0.6rem;\n  color: #fb923c;\n  font-weight: 700;\n  margin-bottom: 1px;\n}\n.pomodoro-inner .timer-time {\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: #e8e9f0;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.5px;\n  line-height: 1;\n  transition: color 0.25s ease;\n}\n.pomodoro-inner .timer-mode {\n  font-size: 0.6rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #6b7280;\n}\n.pomo-controls {\n  position: absolute;\n  bottom: -28px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 4px;\n  z-index: 3;\n}\n.pomo-btn {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 6px;\n  color: #9ca3b0;\n  cursor: pointer;\n  padding: 3px 8px;\n  font-size: 0.85rem;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  transition: all 0.15s ease;\n  line-height: 1;\n}\n.pomo-btn:hover {\n  background: rgba(255, 255, 255, 0.12);\n  color: #e8e9f0;\n  border-color: rgba(255, 255, 255, 0.12);\n}\n.pomo-btn.reset-btn {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=pomodoro.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PomodoroComponent, { className: "PomodoroComponent", filePath: "src/app/features/study/pomodoro/pomodoro.component.ts", lineNumber: 11 });
})();

// src/app/layout/sidebar/sidebar.component.ts
function SidebarComponent_div_37_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275text(2, "\u{1F525}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31)(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 33);
    \u0275\u0275text(7, "ng\xE0y li\xEAn t\u1EE5c");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.stats.current_streak);
  }
}
function SidebarComponent_div_37_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 30);
    \u0275\u0275text(2, "\u{1F331}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4, "B\u1EAFt \u0111\u1EA7u streak h\xF4m nay!");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 21);
    \u0275\u0275text(6, "LVL");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 22)(8, "div", 23)(9, "div", 24);
    \u0275\u0275element(10, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 26);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, SidebarComponent_div_37_div_13_Template, 8, 1, "div", 27)(14, SidebarComponent_div_37_div_14_Template, 5, 0, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.stats.level);
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", ctx_r0.xpPercentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.currentXpInLevel, " / 1000 XP");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.stats.current_streak > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.stats.current_streak === 0);
  }
}
function SidebarComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 35);
  }
}
var SidebarComponent = class _SidebarComponent {
  apiService = inject(ApiService);
  stats = null;
  ngOnInit() {
    this.loadStats();
    window.addEventListener("statsUpdated", () => {
      this.loadStats();
    });
  }
  loadStats() {
    this.apiService.getUserStats().subscribe({
      next: (stats) => {
        this.stats = stats;
      },
      error: (err) => {
        console.error("Failed to load user stats for sidebar:", err);
      }
    });
  }
  get xpPercentage() {
    if (!this.stats)
      return 0;
    const relativeXp = this.stats.total_xp % 1e3;
    return relativeXp / 1e3 * 100;
  }
  get currentXpInLevel() {
    if (!this.stats)
      return 0;
    return this.stats.total_xp % 1e3;
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], decls: 40, vars: 2, consts: [["loadingFooter", ""], [1, "sidebar"], [1, "logo"], [1, "logo-icon"], [1, "logo-text"], [1, "logo-name"], [1, "logo-tagline"], [1, "nav-menu"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-item"], [1, "nav-icon"], [1, "nav-label"], ["routerLink", "/decks", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/study/today", "routerLinkActive", "active", 1, "nav-item", "highlight"], ["routerLink", "/ai-cards", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/settings", "routerLinkActive", "active", 1, "nav-item"], [1, "sidebar-widgets"], ["class", "sidebar-footer", 4, "ngIf", "ngIfElse"], [1, "sidebar-footer"], [1, "level-row"], [1, "level-badge"], [1, "level-num"], [1, "level-lbl"], [1, "level-details"], [1, "level-bar-wrap"], [1, "level-bar-track"], [1, "level-bar-fill"], [1, "xp-text"], ["class", "streak-row", 4, "ngIf"], ["class", "streak-row empty-streak", 4, "ngIf"], [1, "streak-row"], [1, "streak-fire"], [1, "streak-info"], [1, "streak-count"], [1, "streak-label"], [1, "streak-row", "empty-streak"], [1, "footer-skeleton"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 1)(1, "div", 2)(2, "div", 3);
      \u0275\u0275text(3, "\u{1F9E0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "span", 5);
      \u0275\u0275text(6, "VocaLearn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "Science-based");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "nav", 7)(10, "a", 8)(11, "span", 9);
      \u0275\u0275text(12, "\u{1F4CA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 10);
      \u0275\u0275text(14, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "a", 11)(16, "span", 9);
      \u0275\u0275text(17, "\u{1F4DA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 10);
      \u0275\u0275text(19, "My Decks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "a", 12)(21, "span", 9);
      \u0275\u0275text(22, "\u{1F525}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 10);
      \u0275\u0275text(24, "Study Now");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "a", 13)(26, "span", 9);
      \u0275\u0275text(27, "\u{1F916}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span", 10);
      \u0275\u0275text(29, "AI Generator");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "a", 14)(31, "span", 9);
      \u0275\u0275text(32, "\u2699\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span", 10);
      \u0275\u0275text(34, "Settings");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 15);
      \u0275\u0275element(36, "app-pomodoro");
      \u0275\u0275elementEnd();
      \u0275\u0275template(37, SidebarComponent_div_37_Template, 15, 6, "div", 16)(38, SidebarComponent_ng_template_38_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const loadingFooter_r2 = \u0275\u0275reference(39);
      \u0275\u0275advance(37);
      \u0275\u0275property("ngIf", ctx.stats)("ngIfElse", loadingFooter_r2);
    }
  }, dependencies: [CommonModule, NgIf, RouterLink, RouterLinkActive, PomodoroComponent], styles: ["\n\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 220px;\n  background: #13141f;\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\n  display: flex;\n  flex-direction: column;\n  padding: 24px 16px;\n  z-index: 100;\n  overflow-y: auto;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px;\n  margin-bottom: 32px;\n}\n.logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  line-height: 1;\n  filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.4));\n}\n.logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #e8e9f0,\n      #60a5fa);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1.1;\n}\n.logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-tagline[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.nav-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  color: #9ca3b0;\n  border-radius: 10px;\n  font-weight: 500;\n  font-size: 0.875rem;\n  transition: all 0.15s ease;\n  border: 1px solid transparent;\n  text-decoration: none;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 22px;\n  text-align: center;\n  flex-shrink: 0;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  color: #e8e9f0;\n  background: rgba(255, 255, 255, 0.04);\n  transform: translateX(3px);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  color: #e8e9f0;\n  background: rgba(96, 165, 250, 0.08);\n  border-color: rgba(96, 165, 250, 0.14);\n  font-weight: 600;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 0 4px rgba(96, 165, 250, 0.6));\n}\n.nav-item.highlight[_ngcontent-%COMP%]:not(.active) {\n  color: #fb923c;\n  background: rgba(251, 146, 60, 0.05);\n}\n.nav-item.highlight.active[_ngcontent-%COMP%] {\n  background: rgba(251, 146, 60, 0.1);\n  border-color: rgba(251, 146, 60, 0.2);\n  color: #fb923c;\n}\n.nav-item.highlight.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 0 4px rgba(251, 146, 60, 0.6));\n}\n.sidebar-widgets[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  padding-top: 24px;\n  padding-bottom: 40px;\n  margin-top: 24px;\n  margin-bottom: 16px;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  padding-top: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.footer-skeleton[_ngcontent-%COMP%] {\n  height: 70px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.03) 25%,\n      rgba(255, 255, 255, 0.06) 50%,\n      rgba(255, 255, 255, 0.03) 75%);\n  background-size: 200% auto;\n  animation: shimmer 1.5s infinite;\n}\n.level-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 10px;\n  padding: 8px 16px;\n}\n.level-row[_ngcontent-%COMP%]   .level-badge[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #a78bfa,\n      #60a5fa);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  flex-shrink: 0;\n  box-shadow: 0 0 10px rgba(167, 139, 250, 0.3);\n}\n.level-row[_ngcontent-%COMP%]   .level-badge[_ngcontent-%COMP%]   .level-num[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 900;\n  color: white;\n  line-height: 1;\n}\n.level-row[_ngcontent-%COMP%]   .level-badge[_ngcontent-%COMP%]   .level-lbl[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.level-row[_ngcontent-%COMP%]   .level-details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.level-row[_ngcontent-%COMP%]   .level-details[_ngcontent-%COMP%]   .level-bar-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.level-row[_ngcontent-%COMP%]   .level-details[_ngcontent-%COMP%]   .level-bar-wrap[_ngcontent-%COMP%]   .level-bar-track[_ngcontent-%COMP%] {\n  height: 5px;\n  background: rgba(255, 255, 255, 0.07);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.level-row[_ngcontent-%COMP%]   .level-details[_ngcontent-%COMP%]   .level-bar-wrap[_ngcontent-%COMP%]   .level-bar-track[_ngcontent-%COMP%]   .level-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #a78bfa,\n      #60a5fa);\n  border-radius: 999px;\n  transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);\n  animation: progressGrow 1s ease-out;\n}\n.level-row[_ngcontent-%COMP%]   .level-details[_ngcontent-%COMP%]   .xp-text[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: #6b7280;\n  font-weight: 600;\n}\n.streak-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 16px;\n}\n.streak-row[_ngcontent-%COMP%]   .streak-fire[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  animation: pulse 1.5s infinite;\n}\n.streak-row[_ngcontent-%COMP%]   .streak-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.streak-row[_ngcontent-%COMP%]   .streak-info[_ngcontent-%COMP%]   .streak-count[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #fb923c;\n}\n.streak-row[_ngcontent-%COMP%]   .streak-info[_ngcontent-%COMP%]   .streak-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.streak-row.empty-streak[_ngcontent-%COMP%]   .streak-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n/*# sourceMappingURL=sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive, PomodoroComponent], template: '<aside class="sidebar">\n\n  <!-- Logo -->\n  <div class="logo">\n    <div class="logo-icon">\u{1F9E0}</div>\n    <div class="logo-text">\n      <span class="logo-name">VocaLearn</span>\n      <span class="logo-tagline">Science-based</span>\n    </div>\n  </div>\n\n  <!-- Navigation -->\n  <nav class="nav-menu">\n    <a routerLink="/dashboard" routerLinkActive="active" class="nav-item">\n      <span class="nav-icon">\u{1F4CA}</span>\n      <span class="nav-label">Dashboard</span>\n    </a>\n    <a routerLink="/decks" routerLinkActive="active" class="nav-item">\n      <span class="nav-icon">\u{1F4DA}</span>\n      <span class="nav-label">My Decks</span>\n    </a>\n    <a routerLink="/study/today" routerLinkActive="active" class="nav-item highlight">\n      <span class="nav-icon">\u{1F525}</span>\n      <span class="nav-label">Study Now</span>\n    </a>\n    <a routerLink="/ai-cards" routerLinkActive="active" class="nav-item">\n      <span class="nav-icon">\u{1F916}</span>\n      <span class="nav-label">AI Generator</span>\n    </a>\n    <a routerLink="/settings" routerLinkActive="active" class="nav-item">\n      <span class="nav-icon">\u2699\uFE0F</span>\n      <span class="nav-label">Settings</span>\n    </a>\n  </nav>\n\n  <!-- Pomodoro widget -->\n  <div class="sidebar-widgets">\n    <app-pomodoro></app-pomodoro>\n  </div>\n\n  <!-- Gamification footer -->\n  <div class="sidebar-footer" *ngIf="stats; else loadingFooter">\n    <div class="level-row">\n      <div class="level-badge">\n        <span class="level-num">{{ stats.level }}</span>\n        <span class="level-lbl">LVL</span>\n      </div>\n      <div class="level-details">\n        <div class="level-bar-wrap">\n          <div class="level-bar-track">\n            <div class="level-bar-fill" [style.width.%]="xpPercentage"></div>\n          </div>\n        </div>\n        <span class="xp-text">{{ currentXpInLevel }} / 1000 XP</span>\n      </div>\n    </div>\n\n    <div class="streak-row" *ngIf="stats.current_streak > 0">\n      <div class="streak-fire">\u{1F525}</div>\n      <div class="streak-info">\n        <span class="streak-count">{{ stats.current_streak }}</span>\n        <span class="streak-label">ng\xE0y li\xEAn t\u1EE5c</span>\n      </div>\n    </div>\n    <div class="streak-row empty-streak" *ngIf="stats.current_streak === 0">\n      <span class="streak-fire">\u{1F331}</span>\n      <span class="streak-label">B\u1EAFt \u0111\u1EA7u streak h\xF4m nay!</span>\n    </div>\n  </div>\n\n  <ng-template #loadingFooter>\n    <div class="footer-skeleton"></div>\n  </ng-template>\n\n</aside>\n', styles: ["/* src/app/layout/sidebar/sidebar.component.scss */\n.sidebar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 220px;\n  background: #13141f;\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\n  display: flex;\n  flex-direction: column;\n  padding: 24px 16px;\n  z-index: 100;\n  overflow-y: auto;\n}\n.sidebar::-webkit-scrollbar {\n  width: 6px;\n}\n.sidebar::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n}\n.sidebar::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px;\n  margin-bottom: 32px;\n}\n.logo .logo-icon {\n  font-size: 1.8rem;\n  line-height: 1;\n  filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.4));\n}\n.logo .logo-text {\n  display: flex;\n  flex-direction: column;\n}\n.logo .logo-text .logo-name {\n  font-size: 1.05rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #e8e9f0,\n      #60a5fa);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1.1;\n}\n.logo .logo-text .logo-tagline {\n  font-size: 0.6rem;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.nav-menu {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  color: #9ca3b0;\n  border-radius: 10px;\n  font-weight: 500;\n  font-size: 0.875rem;\n  transition: all 0.15s ease;\n  border: 1px solid transparent;\n  text-decoration: none;\n}\n.nav-item .nav-icon {\n  font-size: 1.1rem;\n  width: 22px;\n  text-align: center;\n  flex-shrink: 0;\n}\n.nav-item .nav-label {\n  flex: 1;\n}\n.nav-item:hover {\n  color: #e8e9f0;\n  background: rgba(255, 255, 255, 0.04);\n  transform: translateX(3px);\n}\n.nav-item.active {\n  color: #e8e9f0;\n  background: rgba(96, 165, 250, 0.08);\n  border-color: rgba(96, 165, 250, 0.14);\n  font-weight: 600;\n}\n.nav-item.active .nav-icon {\n  filter: drop-shadow(0 0 4px rgba(96, 165, 250, 0.6));\n}\n.nav-item.highlight:not(.active) {\n  color: #fb923c;\n  background: rgba(251, 146, 60, 0.05);\n}\n.nav-item.highlight.active {\n  background: rgba(251, 146, 60, 0.1);\n  border-color: rgba(251, 146, 60, 0.2);\n  color: #fb923c;\n}\n.nav-item.highlight.active .nav-icon {\n  filter: drop-shadow(0 0 4px rgba(251, 146, 60, 0.6));\n}\n.sidebar-widgets {\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  padding-top: 24px;\n  padding-bottom: 40px;\n  margin-top: 24px;\n  margin-bottom: 16px;\n}\n.sidebar-footer {\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  padding-top: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.footer-skeleton {\n  height: 70px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.03) 25%,\n      rgba(255, 255, 255, 0.06) 50%,\n      rgba(255, 255, 255, 0.03) 75%);\n  background-size: 200% auto;\n  animation: shimmer 1.5s infinite;\n}\n.level-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 10px;\n  padding: 8px 16px;\n}\n.level-row .level-badge {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #a78bfa,\n      #60a5fa);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  flex-shrink: 0;\n  box-shadow: 0 0 10px rgba(167, 139, 250, 0.3);\n}\n.level-row .level-badge .level-num {\n  font-size: 1rem;\n  font-weight: 900;\n  color: white;\n  line-height: 1;\n}\n.level-row .level-badge .level-lbl {\n  font-size: 0.5rem;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.level-row .level-details {\n  flex: 1;\n  min-width: 0;\n}\n.level-row .level-details .level-bar-wrap {\n  margin-bottom: 4px;\n}\n.level-row .level-details .level-bar-wrap .level-bar-track {\n  height: 5px;\n  background: rgba(255, 255, 255, 0.07);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.level-row .level-details .level-bar-wrap .level-bar-track .level-bar-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #a78bfa,\n      #60a5fa);\n  border-radius: 999px;\n  transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);\n  animation: progressGrow 1s ease-out;\n}\n.level-row .level-details .xp-text {\n  font-size: 0.65rem;\n  color: #6b7280;\n  font-weight: 600;\n}\n.streak-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 16px;\n}\n.streak-row .streak-fire {\n  font-size: 1.1rem;\n  animation: pulse 1.5s infinite;\n}\n.streak-row .streak-info {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.streak-row .streak-info .streak-count {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #fb923c;\n}\n.streak-row .streak-info .streak-label {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.streak-row.empty-streak .streak-label {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/layout/sidebar/sidebar.component.ts", lineNumber: 16 });
})();

// src/app/layout/main-layout/main-layout.component.ts
var MainLayoutComponent = class _MainLayoutComponent {
  authService = inject(AuthService);
  router = inject(Router);
  userEmail = "demo@example.com";
  ngOnInit() {
    this.authService.fetchProfile().subscribe((user) => {
      if (user) {
        this.userEmail = user.email || user.username;
      }
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function MainLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayoutComponent, selectors: [["app-main-layout"]], decls: 20, vars: 2, consts: [[1, "app-container"], [1, "main-content"], [1, "top-nav"], [1, "search-bar"], [1, "search-icon"], ["type", "text", "placeholder", "T\xECm ki\u1EBFm t\u1EEB v\u1EF1ng..."], [1, "user-profile"], [1, "user-info"], [1, "user-name"], [1, "user-role"], [1, "user-avatar"], [1, "logout-btn", 3, "click"], [1, "content-area"]], template: function MainLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "header", 2)(4, "div", 3)(5, "span", 4);
      \u0275\u0275text(6, "\u{1F50D}");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "input", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "span", 8);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 9);
      \u0275\u0275text(13, "Learner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 10);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 11);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_button_click_16_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(17, "\u0110\u0103ng xu\u1EA5t");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 12);
      \u0275\u0275element(19, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.userEmail);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.userEmail[0] == null ? null : ctx.userEmail[0].toUpperCase());
    }
  }, dependencies: [RouterOutlet, SidebarComponent], styles: ['\n\n.top-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 32px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.top-nav[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 280px;\n}\n.top-nav[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.85rem;\n  opacity: 0.4;\n  pointer-events: none;\n}\n.top-nav[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 14px 8px 36px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  color: #e8e9f0;\n  font-size: 0.875rem;\n  transition: all 0.15s ease;\n}\n.top-nav[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(96, 165, 250, 0.4);\n  background: rgba(255, 255, 255, 0.06);\n  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.08);\n}\n.top-nav[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.top-nav[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.top-nav[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #e8e9f0;\n}\n.top-nav[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.top-nav[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #60a5fa,\n      #a78bfa);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n}\n.top-nav[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  background: rgba(248, 113, 113, 0.08);\n  color: #f87171;\n  border: 1px solid rgba(248, 113, 113, 0.15);\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n}\n.top-nav[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.16);\n  border-color: rgba(248, 113, 113, 0.3);\n  transform: translateY(-1px);\n}\n.content-area[_ngcontent-%COMP%] {\n  animation: fadeInUp 0.3s ease-out;\n}\n/*# sourceMappingURL=main-layout.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-main-layout", standalone: true, imports: [RouterOutlet, SidebarComponent], template: '<div class="app-container">\n  <app-sidebar></app-sidebar>\n  <main class="main-content">\n    <header class="top-nav">\n      <div class="search-bar">\n        <span class="search-icon">\u{1F50D}</span>\n        <input type="text" placeholder="T\xECm ki\u1EBFm t\u1EEB v\u1EF1ng...">\n      </div>\n      <div class="user-profile">\n        <div class="user-info">\n          <span class="user-name">{{ userEmail }}</span>\n          <span class="user-role">Learner</span>\n        </div>\n        <div class="user-avatar">{{ userEmail[0]?.toUpperCase() }}</div>\n        <button class="logout-btn" (click)="logout()">\u0110\u0103ng xu\u1EA5t</button>\n      </div>\n    </header>\n    <div class="content-area">\n      <router-outlet></router-outlet>\n    </div>\n  </main>\n</div>\n', styles: ['/* src/app/layout/main-layout/main-layout.component.scss */\n.top-nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 32px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.top-nav .search-bar {\n  position: relative;\n  width: 280px;\n}\n.top-nav .search-bar .search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.85rem;\n  opacity: 0.4;\n  pointer-events: none;\n}\n.top-nav .search-bar input {\n  width: 100%;\n  padding: 8px 14px 8px 36px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  color: #e8e9f0;\n  font-size: 0.875rem;\n  transition: all 0.15s ease;\n}\n.top-nav .search-bar input:focus {\n  border-color: rgba(96, 165, 250, 0.4);\n  background: rgba(255, 255, 255, 0.06);\n  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.08);\n}\n.top-nav .user-profile {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.top-nav .user-profile .user-info {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.top-nav .user-profile .user-info .user-name {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #e8e9f0;\n}\n.top-nav .user-profile .user-info .user-role {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.top-nav .user-profile .user-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #60a5fa,\n      #a78bfa);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n}\n.top-nav .user-profile .logout-btn {\n  background: rgba(248, 113, 113, 0.08);\n  color: #f87171;\n  border: 1px solid rgba(248, 113, 113, 0.15);\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n}\n.top-nav .user-profile .logout-btn:hover {\n  background: rgba(248, 113, 113, 0.16);\n  border-color: rgba(248, 113, 113, 0.3);\n  transform: translateY(-1px);\n}\n.content-area {\n  animation: fadeInUp 0.3s ease-out;\n}\n/*# sourceMappingURL=main-layout.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayoutComponent, { className: "MainLayoutComponent", filePath: "src/app/layout/main-layout/main-layout.component.ts", lineNumber: 14 });
})();
export {
  MainLayoutComponent
};
//# sourceMappingURL=chunk-TYAUN3FR.js.map
