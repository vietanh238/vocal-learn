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
  NgForOf,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-G7WC3NMJ.js";

// src/app/features/dashboard/dashboard.component.ts
var _c0 = () => [1, 2, 3, 4];
function DashboardComponent_div_7_button_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275text(1, " \u{1F525} H\u1ECDc ngay ");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_7_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "\u2705 Xong r\u1ED3i!");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5, "th\u1EBB c\u1EA7n \xF4n");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, DashboardComponent_div_7_button_6_Template, 2, 0, "button", 22)(7, DashboardComponent_div_7_span_7_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("no-due", ((ctx_r0.srsStats == null ? null : ctx_r0.srsStats.due_count) || 0) === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.srsStats == null ? null : ctx_r0.srsStats.due_count) || 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((ctx_r0.srsStats == null ? null : ctx_r0.srsStats.due_count) || 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((ctx_r0.srsStats == null ? null : ctx_r0.srsStats.due_count) || 0) === 0);
  }
}
function DashboardComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 28);
  }
}
function DashboardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, DashboardComponent_div_8_div_1_Template, 1, 0, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function DashboardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "div", 32);
    \u0275\u0275text(4, "\u26A1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 33);
    \u0275\u0275text(6, "Kinh nghi\u1EC7m");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 34);
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "small");
    \u0275\u0275text(10, "XP");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 35);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 36)(14, "div", 37);
    \u0275\u0275element(15, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 39);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 40)(19, "div", 31)(20, "div", 32);
    \u0275\u0275text(21, "\u{1F525}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 33);
    \u0275\u0275text(23, "Chu\u1ED7i ng\xE0y h\u1ECDc");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 34);
    \u0275\u0275text(25);
    \u0275\u0275elementStart(26, "small");
    \u0275\u0275text(27, "ng\xE0y");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 41);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 42)(31, "div", 31)(32, "div", 32);
    \u0275\u0275text(33, "\u{1F4DA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 33);
    \u0275\u0275text(35, "T\u1ED5ng t\u1EEB v\u1EF1ng");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 34);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 43);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 44)(41, "div", 31)(42, "div", 32);
    \u0275\u0275text(43, "\u{1F9E0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 33);
    \u0275\u0275text(45, "\u0110\xE3 thu\u1ED9c (Mature)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 34);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 45)(49, "div", 46);
    \u0275\u0275element(50, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 48);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", (ctx_r0.userStats == null ? null : ctx_r0.userStats.total_xp) || 0, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Level ", (ctx_r0.userStats == null ? null : ctx_r0.userStats.level) || 1, "");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r0.xpProgress, "%")("animation-delay", "0.3s");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.xpInLevel, " / 1000 XP");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r0.userStats == null ? null : ctx_r0.userStats.current_streak) || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" K\u1EF7 l\u1EE5c: ", (ctx_r0.userStats == null ? null : ctx_r0.userStats.longest_streak) || 0, " ng\xE0y ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r0.srsStats == null ? null : ctx_r0.srsStats.total) || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.totalStudied, " \u0111\xE3 h\u1ECDc qua");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r0.srsStats == null ? null : ctx_r0.srsStats.status == null ? null : ctx_r0.srsStats.status.mature) || 0);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r0.masteryPercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.masteryPercent, "% thu\u1EA7n th\u1EE5c");
  }
}
function DashboardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "h2");
    \u0275\u0275text(2, "Tr\u1EA1ng th\xE1i th\u1EBB h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Ph\xE2n ph\u1ED1i th\u1EBB theo c\u1EA5p \u0111\u1ED9 ghi nh\u1EDB (SM-2)");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275element(2, "div", 51);
    \u0275\u0275elementStart(3, "div", 52)(4, "span", 53);
    \u0275\u0275text(5, "New");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 54);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 55);
    \u0275\u0275element(9, "div", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 57);
    \u0275\u0275element(11, "div", 51);
    \u0275\u0275elementStart(12, "div", 52)(13, "span", 53);
    \u0275\u0275text(14, "Learning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 54);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 55);
    \u0275\u0275element(18, "div", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 58);
    \u0275\u0275element(20, "div", 51);
    \u0275\u0275elementStart(21, "div", 52)(22, "span", 53);
    \u0275\u0275text(23, "Young");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 54);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 55);
    \u0275\u0275element(27, "div", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 59);
    \u0275\u0275element(29, "div", 51);
    \u0275\u0275elementStart(30, "div", 52)(31, "span", 53);
    \u0275\u0275text(32, "Mature");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 54);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 55);
    \u0275\u0275element(36, "div", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.srsStats.status.new || 0);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.srsStats.total ? (ctx_r0.srsStats.status.new || 0) / ctx_r0.srsStats.total * 100 : 0, "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.srsStats.status.learning || 0);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.srsStats.total ? (ctx_r0.srsStats.status.learning || 0) / ctx_r0.srsStats.total * 100 : 0, "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.srsStats.status.young || 0);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.srsStats.total ? (ctx_r0.srsStats.status.young || 0) / ctx_r0.srsStats.total * 100 : 0, "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.srsStats.status.mature || 0);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.srsStats.total ? (ctx_r0.srsStats.status.mature || 0) / ctx_r0.srsStats.total * 100 : 0, "%");
  }
}
var DashboardComponent = class _DashboardComponent {
  apiService = inject(ApiService);
  userStats = null;
  srsStats = null;
  isLoading = true;
  currentHour = (/* @__PURE__ */ new Date()).getHours();
  get greeting() {
    if (this.currentHour < 12)
      return "Ch\xE0o bu\u1ED5i s\xE1ng";
    if (this.currentHour < 18)
      return "Ch\xE0o bu\u1ED5i chi\u1EC1u";
    return "Ch\xE0o bu\u1ED5i t\u1ED1i";
  }
  get xpProgress() {
    if (!this.userStats)
      return 0;
    const xpInLevel = this.userStats.total_xp % 1e3;
    return Math.round(xpInLevel / 1e3 * 100);
  }
  get xpInLevel() {
    if (!this.userStats)
      return 0;
    return this.userStats.total_xp % 1e3;
  }
  get totalStudied() {
    if (!this.srsStats?.status)
      return 0;
    const s = this.srsStats.status;
    return (s.learning || 0) + (s.young || 0) + (s.mature || 0);
  }
  get masteryPercent() {
    if (!this.srsStats)
      return 0;
    const total = this.srsStats.total || 0;
    if (total === 0)
      return 0;
    return Math.round((this.srsStats.status?.mature || 0) / total * 100);
  }
  ngOnInit() {
    this.loadDashboardData();
  }
  loadDashboardData() {
    this.isLoading = true;
    this.apiService.getUserStats().subscribe({
      next: (stats) => {
        this.userStats = stats;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
    this.apiService.getSRSStats().subscribe({
      next: (stats) => {
        this.srsStats = stats;
      },
      error: () => {
      }
    });
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 46, vars: 6, consts: [[1, "dashboard-container"], [1, "dashboard-hero"], [1, "hero-text"], ["class", "hero-cta", 4, "ngIf"], ["class", "stats-grid skeleton-grid", 4, "ngIf"], ["class", "stats-grid", 4, "ngIf"], ["class", "section-title", 4, "ngIf"], ["class", "srs-breakdown", 4, "ngIf"], [1, "section-title"], [1, "quick-actions"], ["routerLink", "/study/today", 1, "action-card"], [1, "action-icon", "study"], [1, "action-info"], [1, "action-arrow"], ["routerLink", "/decks", 1, "action-card"], [1, "action-icon", "decks"], ["routerLink", "/ai-cards", 1, "action-card"], [1, "action-icon", "ai"], [1, "hero-cta"], [1, "due-badge"], [1, "due-count"], [1, "due-label"], ["class", "btn btn-primary btn-study", "routerLink", "/study/today", 4, "ngIf"], ["class", "all-done", 4, "ngIf"], ["routerLink", "/study/today", 1, "btn", "btn-primary", "btn-study"], [1, "all-done"], [1, "stats-grid", "skeleton-grid"], ["class", "skeleton stat-skeleton", 4, "ngFor", "ngForOf"], [1, "skeleton", "stat-skeleton"], [1, "stats-grid"], [1, "stat-card", "xp-card"], [1, "stat-header"], [1, "stat-icon"], [1, "stat-label"], [1, "stat-value"], [1, "level-badge"], [1, "xp-bar-wrap"], [1, "xp-bar-track"], [1, "xp-bar-fill"], [1, "xp-bar-label"], [1, "stat-card", "streak-card"], [1, "streak-sub"], [1, "stat-card", "total-card"], [1, "stat-sub"], [1, "stat-card", "mastered-card"], [1, "mastery-bar-wrap"], [1, "mastery-bar-track"], [1, "mastery-bar-fill"], [1, "mastery-pct"], [1, "srs-breakdown"], [1, "srs-item", "new"], [1, "srs-dot"], [1, "srs-info"], [1, "srs-name"], [1, "srs-count"], [1, "srs-bar-track"], [1, "srs-bar-fill"], [1, "srs-item", "learning"], [1, "srs-item", "young"], [1, "srs-item", "mature"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Ti\u1EBFp t\u1EE5c h\xE0nh tr\xECnh chinh ph\u1EE5c t\u1EEB v\u1EF1ng c\u1EE7a b\u1EA1n!");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, DashboardComponent_div_7_Template, 8, 5, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, DashboardComponent_div_8_Template, 2, 2, "div", 4)(9, DashboardComponent_div_9_Template, 53, 15, "div", 5)(10, DashboardComponent_div_10_Template, 5, 0, "div", 6)(11, DashboardComponent_div_11_Template, 37, 12, "div", 7);
      \u0275\u0275elementStart(12, "div", 8)(13, "h2");
      \u0275\u0275text(14, "H\xE0nh \u0111\u1ED9ng nhanh");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 9)(16, "a", 10)(17, "div", 11);
      \u0275\u0275text(18, "\u{1F3AF}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 12)(20, "h3");
      \u0275\u0275text(21, "Study Session");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p");
      \u0275\u0275text(23, "\xD4n t\u1EADp v\u1EDBi thu\u1EADt to\xE1n SM-2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "span", 13);
      \u0275\u0275text(25, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "a", 14)(27, "div", 15);
      \u0275\u0275text(28, "\u{1F4C1}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 12)(30, "h3");
      \u0275\u0275text(31, "Qu\u1EA3n l\xFD Decks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p");
      \u0275\u0275text(33, "Xem v\xE0 t\u1ED5 ch\u1EE9c b\u1ED9 th\u1EBB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "span", 13);
      \u0275\u0275text(35, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "a", 16)(37, "div", 17);
      \u0275\u0275text(38, "\u{1F916}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 12)(40, "h3");
      \u0275\u0275text(41, "AI Generator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p");
      \u0275\u0275text(43, "T\u1EA1o th\u1EBB t\u1EF1 \u0111\u1ED9ng v\u1EDBi AI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "span", 13);
      \u0275\u0275text(45, "\u2192");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.greeting, " \u{1F44B}");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.srsStats);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.srsStats);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], styles: ['\n\n.dashboard-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  animation: fadeIn 0.4s ease-out;\n}\n.dashboard-hero[_ngcontent-%COMP%] {\n  background: rgba(25, 27, 48, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05);\n  position: relative;\n  overflow: hidden;\n  padding: 32px 48px;\n  margin-bottom: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(30, 32, 51, 0.9) 0%,\n      rgba(20, 22, 40, 0.95) 100%);\n  border: 1px solid rgba(96, 165, 250, 0.12);\n}\n.dashboard-hero[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -75%;\n  width: 50%;\n  height: 200%;\n  background:\n    linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.04) 50%,\n      rgba(255, 255, 255, 0) 100%);\n  transform: skewX(-15deg);\n  transition: left 0.6s ease;\n  pointer-events: none;\n}\n.dashboard-hero[_ngcontent-%COMP%]:hover::after {\n  left: 125%;\n}\n.dashboard-hero[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n  background:\n    linear-gradient(\n      135deg,\n      #e8e9f0,\n      #60a5fa);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 4px;\n}\n.dashboard-hero[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3b0;\n  font-size: 0.875rem;\n}\n.dashboard-hero[_ngcontent-%COMP%]   .hero-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.dashboard-hero[_ngcontent-%COMP%]   .due-badge[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(251, 146, 60, 0.1);\n  border: 1px solid rgba(251, 146, 60, 0.2);\n  border-radius: 14px;\n  padding: 8px 24px;\n}\n.dashboard-hero[_ngcontent-%COMP%]   .due-badge.no-due[_ngcontent-%COMP%] {\n  background: rgba(74, 222, 128, 0.1);\n  border-color: rgba(74, 222, 128, 0.2);\n}\n.dashboard-hero[_ngcontent-%COMP%]   .due-badge.no-due[_ngcontent-%COMP%]   .due-count[_ngcontent-%COMP%] {\n  color: #4ade80;\n}\n.dashboard-hero[_ngcontent-%COMP%]   .due-badge[_ngcontent-%COMP%]   .due-count[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 900;\n  color: #fb923c;\n  line-height: 1;\n}\n.dashboard-hero[_ngcontent-%COMP%]   .due-badge[_ngcontent-%COMP%]   .due-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.dashboard-hero[_ngcontent-%COMP%]   .btn-study[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  padding: 16px 32px;\n  border-radius: 14px;\n  animation: _ngcontent-%COMP%_pulse-glow 2s ease-in-out infinite;\n}\n.dashboard-hero[_ngcontent-%COMP%]   .all-done[_ngcontent-%COMP%] {\n  color: #4ade80;\n  font-weight: 600;\n  font-size: 0.875rem;\n  background: rgba(74, 222, 128, 0.1);\n  padding: 8px 16px;\n  border-radius: 10px;\n  border: 1px solid rgba(74, 222, 128, 0.2);\n}\n@keyframes _ngcontent-%COMP%_pulse-glow {\n  0%, 100% {\n    box-shadow: 0 0 8px rgba(96, 165, 250, 0.3);\n  }\n  50% {\n    box-shadow: 0 0 24px rgba(96, 165, 250, 0.6);\n  }\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n  margin-bottom: 48px;\n}\n@media (max-width: 1100px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.skeleton-grid[_ngcontent-%COMP%]   .stat-skeleton[_ngcontent-%COMP%] {\n  height: 160px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.03) 25%,\n      rgba(255, 255, 255, 0.07) 50%,\n      rgba(255, 255, 255, 0.03) 75%);\n  background-size: 200% auto;\n  animation: shimmer 1.5s infinite;\n  border-radius: 14px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  position: relative;\n  overflow: hidden;\n  padding: 24px;\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n  animation: fadeInUp 0.5s ease-out both;\n}\n.stat-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -75%;\n  width: 50%;\n  height: 200%;\n  background:\n    linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.04) 50%,\n      rgba(255, 255, 255, 0) 100%);\n  transform: skewX(-15deg);\n  transition: left 0.6s ease;\n  pointer-events: none;\n}\n.stat-card[_ngcontent-%COMP%]:hover::after {\n  left: 125%;\n}\n.stat-card[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.05s;\n}\n.stat-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.stat-card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.15s;\n}\n.stat-card[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.2s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-header[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-header[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  font-weight: 600;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 900;\n  line-height: 1;\n  color: #e8e9f0;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #6b7280;\n  margin-left: 4px;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-sub[_ngcontent-%COMP%], \n.stat-card[_ngcontent-%COMP%]   .streak-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.stat-card.xp-card[_ngcontent-%COMP%] {\n  border-color: rgba(96, 165, 250, 0.15);\n}\n.stat-card.xp-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #60a5fa,\n      #a78bfa);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-card.xp-card[_ngcontent-%COMP%]   .level-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(167, 139, 250, 0.1);\n  border: 1px solid rgba(167, 139, 250, 0.2);\n  color: #a78bfa;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 999px;\n  width: fit-content;\n}\n.stat-card.xp-card[_ngcontent-%COMP%]   .xp-bar-wrap[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n.stat-card.xp-card[_ngcontent-%COMP%]   .xp-bar-wrap[_ngcontent-%COMP%]   .xp-bar-track[_ngcontent-%COMP%] {\n  height: 6px;\n  background: rgba(255, 255, 255, 0.07);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.stat-card.xp-card[_ngcontent-%COMP%]   .xp-bar-wrap[_ngcontent-%COMP%]   .xp-bar-track[_ngcontent-%COMP%]   .xp-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #a78bfa,\n      #60a5fa);\n  border-radius: 999px;\n  animation: progressGrow 1s ease-out;\n  transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.stat-card.xp-card[_ngcontent-%COMP%]   .xp-bar-wrap[_ngcontent-%COMP%]   .xp-bar-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 4px;\n  display: block;\n}\n.stat-card.streak-card[_ngcontent-%COMP%] {\n  border-color: rgba(251, 146, 60, 0.15);\n}\n.stat-card.streak-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fb923c,\n      #fbbf24);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-card.total-card[_ngcontent-%COMP%] {\n  border-color: rgba(45, 212, 191, 0.15);\n}\n.stat-card.total-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2dd4bf,\n      #4ade80);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-card.mastered-card[_ngcontent-%COMP%] {\n  border-color: rgba(74, 222, 128, 0.15);\n}\n.stat-card.mastered-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4ade80,\n      #2dd4bf);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-card.mastered-card[_ngcontent-%COMP%]   .mastery-bar-wrap[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n.stat-card.mastered-card[_ngcontent-%COMP%]   .mastery-bar-wrap[_ngcontent-%COMP%]   .mastery-bar-track[_ngcontent-%COMP%] {\n  height: 6px;\n  background: rgba(255, 255, 255, 0.07);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.stat-card.mastered-card[_ngcontent-%COMP%]   .mastery-bar-wrap[_ngcontent-%COMP%]   .mastery-bar-track[_ngcontent-%COMP%]   .mastery-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #4ade80,\n      #2dd4bf);\n  border-radius: 999px;\n  animation: progressGrow 1.2s ease-out;\n  transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.stat-card.mastered-card[_ngcontent-%COMP%]   .mastery-bar-wrap[_ngcontent-%COMP%]   .mastery-pct[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 4px;\n  display: block;\n}\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #e8e9f0;\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.srs-breakdown[_ngcontent-%COMP%] {\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  border-radius: 14px;\n  padding: 24px;\n  margin-bottom: 48px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: fadeInUp 0.5s ease-out 0.3s both;\n}\n.srs-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 10px 120px 1fr;\n  align-items: center;\n  gap: 16px;\n}\n.srs-item[_ngcontent-%COMP%]   .srs-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.srs-item[_ngcontent-%COMP%]   .srs-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n.srs-item[_ngcontent-%COMP%]   .srs-info[_ngcontent-%COMP%]   .srs-name[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.srs-item[_ngcontent-%COMP%]   .srs-info[_ngcontent-%COMP%]   .srs-count[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.srs-item[_ngcontent-%COMP%]   .srs-bar-track[_ngcontent-%COMP%] {\n  height: 8px;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.srs-item[_ngcontent-%COMP%]   .srs-bar-track[_ngcontent-%COMP%]   .srs-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  animation: progressGrow 1s ease-out;\n  transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);\n  min-width: 2px;\n}\n.srs-item.new[_ngcontent-%COMP%]   .srs-dot[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.srs-item.new[_ngcontent-%COMP%]   .srs-name[_ngcontent-%COMP%], \n.srs-item.new[_ngcontent-%COMP%]   .srs-count[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.srs-item.new[_ngcontent-%COMP%]   .srs-bar-fill[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.srs-item.learning[_ngcontent-%COMP%]   .srs-dot[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.srs-item.learning[_ngcontent-%COMP%]   .srs-name[_ngcontent-%COMP%], \n.srs-item.learning[_ngcontent-%COMP%]   .srs-count[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.srs-item.learning[_ngcontent-%COMP%]   .srs-bar-fill[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.srs-item.young[_ngcontent-%COMP%]   .srs-dot[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.srs-item.young[_ngcontent-%COMP%]   .srs-name[_ngcontent-%COMP%], \n.srs-item.young[_ngcontent-%COMP%]   .srs-count[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.srs-item.young[_ngcontent-%COMP%]   .srs-bar-fill[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.srs-item.mature[_ngcontent-%COMP%]   .srs-dot[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.srs-item.mature[_ngcontent-%COMP%]   .srs-name[_ngcontent-%COMP%], \n.srs-item.mature[_ngcontent-%COMP%]   .srs-count[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.srs-item.mature[_ngcontent-%COMP%]   .srs-bar-fill[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  animation: fadeInUp 0.5s ease-out 0.4s both;\n}\n@media (max-width: 800px) {\n  .quick-actions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.action-card[_ngcontent-%COMP%] {\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 14px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  text-decoration: none;\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.25s ease;\n  cursor: pointer;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.action-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -75%;\n  width: 50%;\n  height: 200%;\n  background:\n    linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.04) 50%,\n      rgba(255, 255, 255, 0) 100%);\n  transform: skewX(-15deg);\n  transition: left 0.6s ease;\n  pointer-events: none;\n}\n.action-card[_ngcontent-%COMP%]:hover::after {\n  left: 125%;\n}\n.action-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);\n  border-color: rgba(255, 255, 255, 0.12);\n}\n.action-card[_ngcontent-%COMP%]:hover   .action-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n  color: #e8e9f0;\n}\n.action-card[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 52px;\n  height: 52px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.action-card[_ngcontent-%COMP%]   .action-icon.study[_ngcontent-%COMP%] {\n  background: rgba(251, 146, 60, 0.12);\n}\n.action-card[_ngcontent-%COMP%]   .action-icon.decks[_ngcontent-%COMP%] {\n  background: rgba(96, 165, 250, 0.12);\n}\n.action-card[_ngcontent-%COMP%]   .action-icon.ai[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.12);\n}\n.action-card[_ngcontent-%COMP%]   .action-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.action-card[_ngcontent-%COMP%]   .action-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #e8e9f0;\n  margin-bottom: 2px;\n}\n.action-card[_ngcontent-%COMP%]   .action-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.action-card[_ngcontent-%COMP%]   .action-arrow[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1.1rem;\n  transition: transform 0.15s ease, color 0.15s ease;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="dashboard-container">

  <!-- Hero greeting -->
  <div class="dashboard-hero">
    <div class="hero-text">
      <h1>{{ greeting }} \u{1F44B}</h1>
      <p>Ti\u1EBFp t\u1EE5c h\xE0nh tr\xECnh chinh ph\u1EE5c t\u1EEB v\u1EF1ng c\u1EE7a b\u1EA1n!</p>
    </div>
    <div class="hero-cta" *ngIf="!isLoading">
      <div class="due-badge" [class.no-due]="(srsStats?.due_count || 0) === 0">
        <span class="due-count">{{ srsStats?.due_count || 0 }}</span>
        <span class="due-label">th\u1EBB c\u1EA7n \xF4n</span>
      </div>
      <button class="btn btn-primary btn-study"
              routerLink="/study/today"
              *ngIf="(srsStats?.due_count || 0) > 0">
        \u{1F525} H\u1ECDc ngay
      </button>
      <span class="all-done" *ngIf="(srsStats?.due_count || 0) === 0">\u2705 Xong r\u1ED3i!</span>
    </div>
  </div>

  <!-- Loading skeleton -->
  <div class="stats-grid skeleton-grid" *ngIf="isLoading">
    <div class="skeleton stat-skeleton" *ngFor="let i of [1,2,3,4]"></div>
  </div>

  <!-- Stats row -->
  <div class="stats-grid" *ngIf="!isLoading">
    <!-- XP / Level card -->
    <div class="stat-card xp-card">
      <div class="stat-header">
        <div class="stat-icon">\u26A1</div>
        <span class="stat-label">Kinh nghi\u1EC7m</span>
      </div>
      <div class="stat-value">{{ userStats?.total_xp || 0 }} <small>XP</small></div>
      <div class="level-badge">Level {{ userStats?.level || 1 }}</div>
      <div class="xp-bar-wrap">
        <div class="xp-bar-track">
          <div class="xp-bar-fill" [style.width.%]="xpProgress" [style.animation-delay]="'0.3s'"></div>
        </div>
        <span class="xp-bar-label">{{ xpInLevel }} / 1000 XP</span>
      </div>
    </div>

    <!-- Streak card -->
    <div class="stat-card streak-card">
      <div class="stat-header">
        <div class="stat-icon">\u{1F525}</div>
        <span class="stat-label">Chu\u1ED7i ng\xE0y h\u1ECDc</span>
      </div>
      <div class="stat-value">{{ userStats?.current_streak || 0 }}<small>ng\xE0y</small></div>
      <div class="streak-sub">
        K\u1EF7 l\u1EE5c: {{ userStats?.longest_streak || 0 }} ng\xE0y
      </div>
    </div>

    <!-- Total words card -->
    <div class="stat-card total-card">
      <div class="stat-header">
        <div class="stat-icon">\u{1F4DA}</div>
        <span class="stat-label">T\u1ED5ng t\u1EEB v\u1EF1ng</span>
      </div>
      <div class="stat-value">{{ srsStats?.total || 0 }}</div>
      <div class="stat-sub">{{ totalStudied }} \u0111\xE3 h\u1ECDc qua</div>
    </div>

    <!-- Mastered card -->
    <div class="stat-card mastered-card">
      <div class="stat-header">
        <div class="stat-icon">\u{1F9E0}</div>
        <span class="stat-label">\u0110\xE3 thu\u1ED9c (Mature)</span>
      </div>
      <div class="stat-value">{{ srsStats?.status?.mature || 0 }}</div>
      <div class="mastery-bar-wrap">
        <div class="mastery-bar-track">
          <div class="mastery-bar-fill" [style.width.%]="masteryPercent"></div>
        </div>
        <span class="mastery-pct">{{ masteryPercent }}% thu\u1EA7n th\u1EE5c</span>
      </div>
    </div>
  </div>

  <!-- SRS Status breakdown -->
  <div class="section-title" *ngIf="!isLoading && srsStats">
    <h2>Tr\u1EA1ng th\xE1i th\u1EBB h\u1ECDc</h2>
    <p>Ph\xE2n ph\u1ED1i th\u1EBB theo c\u1EA5p \u0111\u1ED9 ghi nh\u1EDB (SM-2)</p>
  </div>

  <div class="srs-breakdown" *ngIf="!isLoading && srsStats">
    <div class="srs-item new">
      <div class="srs-dot"></div>
      <div class="srs-info">
        <span class="srs-name">New</span>
        <span class="srs-count">{{ srsStats.status.new || 0 }}</span>
      </div>
      <div class="srs-bar-track">
        <div class="srs-bar-fill"
             [style.width.%]="srsStats.total ? ((srsStats.status.new || 0) / srsStats.total * 100) : 0">
        </div>
      </div>
    </div>
    <div class="srs-item learning">
      <div class="srs-dot"></div>
      <div class="srs-info">
        <span class="srs-name">Learning</span>
        <span class="srs-count">{{ srsStats.status.learning || 0 }}</span>
      </div>
      <div class="srs-bar-track">
        <div class="srs-bar-fill"
             [style.width.%]="srsStats.total ? ((srsStats.status.learning || 0) / srsStats.total * 100) : 0">
        </div>
      </div>
    </div>
    <div class="srs-item young">
      <div class="srs-dot"></div>
      <div class="srs-info">
        <span class="srs-name">Young</span>
        <span class="srs-count">{{ srsStats.status.young || 0 }}</span>
      </div>
      <div class="srs-bar-track">
        <div class="srs-bar-fill"
             [style.width.%]="srsStats.total ? ((srsStats.status.young || 0) / srsStats.total * 100) : 0">
        </div>
      </div>
    </div>
    <div class="srs-item mature">
      <div class="srs-dot"></div>
      <div class="srs-info">
        <span class="srs-name">Mature</span>
        <span class="srs-count">{{ srsStats.status.mature || 0 }}</span>
      </div>
      <div class="srs-bar-track">
        <div class="srs-bar-fill"
             [style.width.%]="srsStats.total ? ((srsStats.status.mature || 0) / srsStats.total * 100) : 0">
        </div>
      </div>
    </div>
  </div>

  <!-- Quick actions -->
  <div class="section-title">
    <h2>H\xE0nh \u0111\u1ED9ng nhanh</h2>
  </div>

  <div class="quick-actions">
    <a class="action-card" routerLink="/study/today">
      <div class="action-icon study">\u{1F3AF}</div>
      <div class="action-info">
        <h3>Study Session</h3>
        <p>\xD4n t\u1EADp v\u1EDBi thu\u1EADt to\xE1n SM-2</p>
      </div>
      <span class="action-arrow">\u2192</span>
    </a>
    <a class="action-card" routerLink="/decks">
      <div class="action-icon decks">\u{1F4C1}</div>
      <div class="action-info">
        <h3>Qu\u1EA3n l\xFD Decks</h3>
        <p>Xem v\xE0 t\u1ED5 ch\u1EE9c b\u1ED9 th\u1EBB</p>
      </div>
      <span class="action-arrow">\u2192</span>
    </a>
    <a class="action-card" routerLink="/ai-cards">
      <div class="action-icon ai">\u{1F916}</div>
      <div class="action-info">
        <h3>AI Generator</h3>
        <p>T\u1EA1o th\u1EBB t\u1EF1 \u0111\u1ED9ng v\u1EDBi AI</p>
      </div>
      <span class="action-arrow">\u2192</span>
    </a>
  </div>

</div>
`, styles: ['/* src/app/features/dashboard/dashboard.component.scss */\n.dashboard-container {\n  max-width: 1100px;\n  animation: fadeIn 0.4s ease-out;\n}\n.dashboard-hero {\n  background: rgba(25, 27, 48, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05);\n  position: relative;\n  overflow: hidden;\n  padding: 32px 48px;\n  margin-bottom: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(30, 32, 51, 0.9) 0%,\n      rgba(20, 22, 40, 0.95) 100%);\n  border: 1px solid rgba(96, 165, 250, 0.12);\n}\n.dashboard-hero::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -75%;\n  width: 50%;\n  height: 200%;\n  background:\n    linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.04) 50%,\n      rgba(255, 255, 255, 0) 100%);\n  transform: skewX(-15deg);\n  transition: left 0.6s ease;\n  pointer-events: none;\n}\n.dashboard-hero:hover::after {\n  left: 125%;\n}\n.dashboard-hero .hero-text h1 {\n  font-size: 2.2rem;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n  background:\n    linear-gradient(\n      135deg,\n      #e8e9f0,\n      #60a5fa);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 4px;\n}\n.dashboard-hero .hero-text p {\n  color: #9ca3b0;\n  font-size: 0.875rem;\n}\n.dashboard-hero .hero-cta {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.dashboard-hero .due-badge {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(251, 146, 60, 0.1);\n  border: 1px solid rgba(251, 146, 60, 0.2);\n  border-radius: 14px;\n  padding: 8px 24px;\n}\n.dashboard-hero .due-badge.no-due {\n  background: rgba(74, 222, 128, 0.1);\n  border-color: rgba(74, 222, 128, 0.2);\n}\n.dashboard-hero .due-badge.no-due .due-count {\n  color: #4ade80;\n}\n.dashboard-hero .due-badge .due-count {\n  font-size: 2.2rem;\n  font-weight: 900;\n  color: #fb923c;\n  line-height: 1;\n}\n.dashboard-hero .due-badge .due-label {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.dashboard-hero .btn-study {\n  font-size: 1rem;\n  padding: 16px 32px;\n  border-radius: 14px;\n  animation: pulse-glow 2s ease-in-out infinite;\n}\n.dashboard-hero .all-done {\n  color: #4ade80;\n  font-weight: 600;\n  font-size: 0.875rem;\n  background: rgba(74, 222, 128, 0.1);\n  padding: 8px 16px;\n  border-radius: 10px;\n  border: 1px solid rgba(74, 222, 128, 0.2);\n}\n@keyframes pulse-glow {\n  0%, 100% {\n    box-shadow: 0 0 8px rgba(96, 165, 250, 0.3);\n  }\n  50% {\n    box-shadow: 0 0 24px rgba(96, 165, 250, 0.6);\n  }\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n  margin-bottom: 48px;\n}\n@media (max-width: 1100px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.skeleton-grid .stat-skeleton {\n  height: 160px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.03) 25%,\n      rgba(255, 255, 255, 0.07) 50%,\n      rgba(255, 255, 255, 0.03) 75%);\n  background-size: 200% auto;\n  animation: shimmer 1.5s infinite;\n  border-radius: 14px;\n}\n.stat-card {\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  position: relative;\n  overflow: hidden;\n  padding: 24px;\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n  animation: fadeInUp 0.5s ease-out both;\n}\n.stat-card::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -75%;\n  width: 50%;\n  height: 200%;\n  background:\n    linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.04) 50%,\n      rgba(255, 255, 255, 0) 100%);\n  transform: skewX(-15deg);\n  transition: left 0.6s ease;\n  pointer-events: none;\n}\n.stat-card:hover::after {\n  left: 125%;\n}\n.stat-card:nth-child(1) {\n  animation-delay: 0.05s;\n}\n.stat-card:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.stat-card:nth-child(3) {\n  animation-delay: 0.15s;\n}\n.stat-card:nth-child(4) {\n  animation-delay: 0.2s;\n}\n.stat-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);\n}\n.stat-card .stat-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.stat-card .stat-header .stat-icon {\n  font-size: 1.3rem;\n}\n.stat-card .stat-header .stat-label {\n  font-size: 0.75rem;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  font-weight: 600;\n}\n.stat-card .stat-value {\n  font-size: 2.2rem;\n  font-weight: 900;\n  line-height: 1;\n  color: #e8e9f0;\n}\n.stat-card .stat-value small {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #6b7280;\n  margin-left: 4px;\n}\n.stat-card .stat-sub,\n.stat-card .streak-sub {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.stat-card.xp-card {\n  border-color: rgba(96, 165, 250, 0.15);\n}\n.stat-card.xp-card .stat-value {\n  background:\n    linear-gradient(\n      135deg,\n      #60a5fa,\n      #a78bfa);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-card.xp-card .level-badge {\n  display: inline-block;\n  background: rgba(167, 139, 250, 0.1);\n  border: 1px solid rgba(167, 139, 250, 0.2);\n  color: #a78bfa;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 999px;\n  width: fit-content;\n}\n.stat-card.xp-card .xp-bar-wrap {\n  margin-top: auto;\n}\n.stat-card.xp-card .xp-bar-wrap .xp-bar-track {\n  height: 6px;\n  background: rgba(255, 255, 255, 0.07);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.stat-card.xp-card .xp-bar-wrap .xp-bar-track .xp-bar-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #a78bfa,\n      #60a5fa);\n  border-radius: 999px;\n  animation: progressGrow 1s ease-out;\n  transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.stat-card.xp-card .xp-bar-wrap .xp-bar-label {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 4px;\n  display: block;\n}\n.stat-card.streak-card {\n  border-color: rgba(251, 146, 60, 0.15);\n}\n.stat-card.streak-card .stat-value {\n  background:\n    linear-gradient(\n      135deg,\n      #fb923c,\n      #fbbf24);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-card.total-card {\n  border-color: rgba(45, 212, 191, 0.15);\n}\n.stat-card.total-card .stat-value {\n  background:\n    linear-gradient(\n      135deg,\n      #2dd4bf,\n      #4ade80);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-card.mastered-card {\n  border-color: rgba(74, 222, 128, 0.15);\n}\n.stat-card.mastered-card .stat-value {\n  background:\n    linear-gradient(\n      135deg,\n      #4ade80,\n      #2dd4bf);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-card.mastered-card .mastery-bar-wrap {\n  margin-top: auto;\n}\n.stat-card.mastered-card .mastery-bar-wrap .mastery-bar-track {\n  height: 6px;\n  background: rgba(255, 255, 255, 0.07);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.stat-card.mastered-card .mastery-bar-wrap .mastery-bar-track .mastery-bar-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #4ade80,\n      #2dd4bf);\n  border-radius: 999px;\n  animation: progressGrow 1.2s ease-out;\n  transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.stat-card.mastered-card .mastery-bar-wrap .mastery-pct {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 4px;\n  display: block;\n}\n.section-title {\n  margin-bottom: 16px;\n}\n.section-title h2 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #e8e9f0;\n}\n.section-title p {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.srs-breakdown {\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  border-radius: 14px;\n  padding: 24px;\n  margin-bottom: 48px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: fadeInUp 0.5s ease-out 0.3s both;\n}\n.srs-item {\n  display: grid;\n  grid-template-columns: 10px 120px 1fr;\n  align-items: center;\n  gap: 16px;\n}\n.srs-item .srs-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.srs-item .srs-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n.srs-item .srs-info .srs-name {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.srs-item .srs-info .srs-count {\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.srs-item .srs-bar-track {\n  height: 8px;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.srs-item .srs-bar-track .srs-bar-fill {\n  height: 100%;\n  border-radius: 999px;\n  animation: progressGrow 1s ease-out;\n  transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);\n  min-width: 2px;\n}\n.srs-item.new .srs-dot {\n  background: #ef4444;\n}\n.srs-item.new .srs-name,\n.srs-item.new .srs-count {\n  color: #ef4444;\n}\n.srs-item.new .srs-bar-fill {\n  background: #ef4444;\n}\n.srs-item.learning .srs-dot {\n  background: #f59e0b;\n}\n.srs-item.learning .srs-name,\n.srs-item.learning .srs-count {\n  color: #f59e0b;\n}\n.srs-item.learning .srs-bar-fill {\n  background: #f59e0b;\n}\n.srs-item.young .srs-dot {\n  background: #3b82f6;\n}\n.srs-item.young .srs-name,\n.srs-item.young .srs-count {\n  color: #3b82f6;\n}\n.srs-item.young .srs-bar-fill {\n  background: #3b82f6;\n}\n.srs-item.mature .srs-dot {\n  background: #22c55e;\n}\n.srs-item.mature .srs-name,\n.srs-item.mature .srs-count {\n  color: #22c55e;\n}\n.srs-item.mature .srs-bar-fill {\n  background: #22c55e;\n}\n.quick-actions {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  animation: fadeInUp 0.5s ease-out 0.4s both;\n}\n@media (max-width: 800px) {\n  .quick-actions {\n    grid-template-columns: 1fr;\n  }\n}\n.action-card {\n  background: rgba(30, 32, 51, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 14px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  text-decoration: none;\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.25s ease;\n  cursor: pointer;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.action-card::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -75%;\n  width: 50%;\n  height: 200%;\n  background:\n    linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.04) 50%,\n      rgba(255, 255, 255, 0) 100%);\n  transform: skewX(-15deg);\n  transition: left 0.6s ease;\n  pointer-events: none;\n}\n.action-card:hover::after {\n  left: 125%;\n}\n.action-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);\n  border-color: rgba(255, 255, 255, 0.12);\n}\n.action-card:hover .action-arrow {\n  transform: translateX(4px);\n  color: #e8e9f0;\n}\n.action-card .action-icon {\n  font-size: 2rem;\n  width: 52px;\n  height: 52px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.action-card .action-icon.study {\n  background: rgba(251, 146, 60, 0.12);\n}\n.action-card .action-icon.decks {\n  background: rgba(96, 165, 250, 0.12);\n}\n.action-card .action-icon.ai {\n  background: rgba(167, 139, 250, 0.12);\n}\n.action-card .action-info {\n  flex: 1;\n}\n.action-card .action-info h3 {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #e8e9f0;\n  margin-bottom: 2px;\n}\n.action-card .action-info p {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.action-card .action-arrow {\n  color: #6b7280;\n  font-size: 1.1rem;\n  transition: transform 0.15s ease, color 0.15s ease;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 14 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-QK7J5K7F.js.map
