import {
  AuthService
} from "./chunk-NPGZ4JCN.js";
import {
  Router,
  RouterLink
} from "./chunk-YPDWKRJV.js";
import "./chunk-EX2AIKSR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-CRWT6FOD.js";
import {
  CommonModule,
  Component,
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G7WC3NMJ.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r1.errorMsg, " ");
  }
}
function LoginComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F680} \u0110\u0103ng nh\u1EADp");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275element(1, "span")(2, "span")(3, "span");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  username = "";
  password = "";
  isLoading = false;
  errorMsg = "";
  authService = inject(AuthService);
  router = inject(Router);
  onSubmit() {
    this.isLoading = true;
    this.errorMsg = "";
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMsg = "Invalid username or password";
        console.error(err);
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 70, vars: 6, consts: [["loginForm", "ngForm"], [1, "auth-bg"], [1, "bg-orb", "orb-1"], [1, "bg-orb", "orb-2"], [1, "bg-orb", "orb-3"], [1, "auth-container"], [1, "brand-panel"], [1, "brand-logo"], [1, "brand-icon"], [1, "brand-name"], [1, "brand-tagline"], [1, "brand-features"], [1, "feature-item"], [1, "feat-icon"], [1, "auth-card"], [1, "auth-header"], [1, "auth-form", 3, "ngSubmit"], [1, "form-group"], ["for", "username"], [1, "input-wrap"], [1, "input-icon"], ["type", "text", "id", "username", "name", "username", "required", "", "placeholder", "Nh\u1EADp t\xEAn \u0111\u0103ng nh\u1EADp", 3, "ngModelChange", "ngModel"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", "placeholder", "Nh\u1EADp m\u1EADt kh\u1EA9u", 3, "ngModelChange", "ngModel"], ["class", "error-message", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-full", 3, "disabled"], [4, "ngIf"], ["class", "loading-dots", 4, "ngIf"], [1, "auth-footer"], ["routerLink", "/register"], [1, "error-message"], [1, "loading-dots"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275element(1, "div", 2)(2, "div", 3)(3, "div", 4);
      \u0275\u0275elementStart(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "span", 8);
      \u0275\u0275text(8, "\u{1F9E0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div")(10, "h1", 9);
      \u0275\u0275text(11, "VocaLearn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 10);
      \u0275\u0275text(13, "Science-based vocabulary learning");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "span", 13);
      \u0275\u0275text(17, "\u{1F4C8}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div")(19, "h3");
      \u0275\u0275text(20, "SM-2 Algorithm");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p");
      \u0275\u0275text(22, "Spaced repetition t\u1ED1i \u01B0u qu\xE1 tr\xECnh ghi nh\u1EDB d\xE0i h\u1EA1n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 12)(24, "span", 13);
      \u0275\u0275text(25, "\u{1F916}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div")(27, "h3");
      \u0275\u0275text(28, "AI Card Generator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p");
      \u0275\u0275text(30, "T\u1EF1 \u0111\u1ED9ng t\u1EA1o th\u1EBB h\u1ECDc v\u1EDBi ChatGPT & Gemini");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 12)(32, "span", 13);
      \u0275\u0275text(33, "\u{1F9E0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div")(35, "h3");
      \u0275\u0275text(36, "Feynman Technique");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p");
      \u0275\u0275text(38, "Ghi ch\xFA l\u1EA1i b\u1EB1ng ng\xF4n ng\u1EEF c\u1EE7a ch\xEDnh b\u1EA1n");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(39, "div", 14)(40, "div", 15)(41, "h2");
      \u0275\u0275text(42, "Ch\xE0o m\u1EEBng tr\u1EDF l\u1EA1i! \u{1F44B}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p");
      \u0275\u0275text(44, "\u0110\u0103ng nh\u1EADp \u0111\u1EC3 ti\u1EBFp t\u1EE5c h\xE0nh tr\xECnh h\u1ECDc t\u1EEB v\u1EF1ng.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "form", 16, 0);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_45_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(47, "div", 17)(48, "label", 18);
      \u0275\u0275text(49, "T\xEAn \u0111\u0103ng nh\u1EADp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 19)(51, "span", 20);
      \u0275\u0275text(52, "\u{1F464}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_53_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div", 17)(55, "label", 22);
      \u0275\u0275text(56, "M\u1EADt kh\u1EA9u");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 19)(58, "span", 20);
      \u0275\u0275text(59, "\u{1F511}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_60_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(61, LoginComponent_div_61_Template, 2, 1, "div", 24);
      \u0275\u0275elementStart(62, "button", 25);
      \u0275\u0275template(63, LoginComponent_span_63_Template, 2, 0, "span", 26)(64, LoginComponent_span_64_Template, 4, 0, "span", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 28)(66, "p");
      \u0275\u0275text(67, "Ch\u01B0a c\xF3 t\xE0i kho\u1EA3n? ");
      \u0275\u0275elementStart(68, "a", 29);
      \u0275\u0275text(69, "\u0110\u0103ng k\xFD ngay");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      const loginForm_r3 = \u0275\u0275reference(46);
      \u0275\u0275advance(53);
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMsg);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !loginForm_r3.form.valid || ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, CommonModule, NgIf, RouterLink], styles: ["\n\n.auth-bg[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #0f1019;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px;\n  position: relative;\n  overflow: hidden;\n  background-image:\n    radial-gradient(\n      ellipse at 20% 50%,\n      rgba(96, 165, 250, 0.05) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse at 80% 20%,\n      rgba(167, 139, 250, 0.05) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse at 50% 80%,\n      rgba(45, 212, 191, 0.04) 0%,\n      transparent 55%);\n}\n.bg-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  pointer-events: none;\n  opacity: 0.35;\n  animation: float 8s ease-in-out infinite;\n}\n.bg-orb.orb-1[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  background: rgba(96, 165, 250, 0.15);\n  top: -100px;\n  left: -100px;\n  animation-delay: 0s;\n}\n.bg-orb.orb-2[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  background: rgba(167, 139, 250, 0.12);\n  bottom: -80px;\n  right: -80px;\n  animation-delay: -3s;\n}\n.bg-orb.orb-3[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 280px;\n  background: rgba(45, 212, 191, 0.1);\n  top: 50%;\n  right: 30%;\n  animation-delay: -6s;\n}\n.auth-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 420px;\n  gap: 48px;\n  max-width: 900px;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 768px) {\n  .auth-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .auth-container[_ngcontent-%COMP%]   .brand-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.brand-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 48px;\n}\n.brand-panel[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.brand-panel[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  line-height: 1;\n  filter: drop-shadow(0 0 20px rgba(96, 165, 250, 0.5));\n}\n.brand-panel[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 900;\n  background:\n    linear-gradient(\n      135deg,\n      #e8e9f0,\n      #60a5fa);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1;\n}\n.brand-panel[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-tagline[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  margin-top: 4px;\n}\n.brand-panel[_ngcontent-%COMP%]   .brand-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.brand-panel[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 16px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  transition: all 0.15s ease;\n}\n.brand-panel[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(96, 165, 250, 0.2);\n  transform: translateX(4px);\n}\n.brand-panel[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feat-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 1;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.brand-panel[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #e8e9f0;\n  margin-bottom: 2px;\n}\n.brand-panel[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: rgba(25, 27, 48, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05);\n  border-radius: 20px;\n  padding: 48px;\n  animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);\n}\n.auth-card[_ngcontent-%COMP%]   .auth-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.auth-card[_ngcontent-%COMP%]   .auth-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #e8e9f0;\n  margin-bottom: 4px;\n}\n.auth-card[_ngcontent-%COMP%]   .auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3b0;\n  font-size: 0.875rem;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #9ca3b0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-wrap[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 1rem;\n  pointer-events: none;\n  opacity: 0.6;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 16px 8px 42px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 10px;\n  color: #e8e9f0;\n  font-size: 1rem;\n  transition: all 0.15s ease;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(96, 165, 250, 0.5);\n  background: rgba(255, 255, 255, 0.06);\n  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.12);\n}\n.error-message[_ngcontent-%COMP%] {\n  background: rgba(248, 113, 113, 0.08);\n  border: 1px solid rgba(248, 113, 113, 0.2);\n  color: #f87171;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  animation: fadeInDown 0.3s ease-out;\n}\n.btn-full[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px 24px;\n  justify-content: center;\n  font-size: 1rem;\n  border-radius: 10px;\n  margin-top: 4px;\n}\n.loading-dots[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  background: rgba(255, 255, 255, 0.7);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_loadingBounce 1.2s ease-in-out infinite;\n}\n.loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes _ngcontent-%COMP%_loadingBounce {\n  0%, 80%, 100% {\n    transform: scale(0.7);\n    opacity: 0.5;\n  }\n  40% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 8px;\n}\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #60a5fa;\n  font-weight: 600;\n}\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [FormsModule, CommonModule, RouterLink], template: '<div class="auth-bg">\n  <!-- Animated gradient orbs -->\n  <div class="bg-orb orb-1"></div>\n  <div class="bg-orb orb-2"></div>\n  <div class="bg-orb orb-3"></div>\n\n  <div class="auth-container">\n\n    <!-- Left brand panel -->\n    <div class="brand-panel">\n      <div class="brand-logo">\n        <span class="brand-icon">\u{1F9E0}</span>\n        <div>\n          <h1 class="brand-name">VocaLearn</h1>\n          <p class="brand-tagline">Science-based vocabulary learning</p>\n        </div>\n      </div>\n\n      <div class="brand-features">\n        <div class="feature-item">\n          <span class="feat-icon">\u{1F4C8}</span>\n          <div>\n            <h3>SM-2 Algorithm</h3>\n            <p>Spaced repetition t\u1ED1i \u01B0u qu\xE1 tr\xECnh ghi nh\u1EDB d\xE0i h\u1EA1n</p>\n          </div>\n        </div>\n        <div class="feature-item">\n          <span class="feat-icon">\u{1F916}</span>\n          <div>\n            <h3>AI Card Generator</h3>\n            <p>T\u1EF1 \u0111\u1ED9ng t\u1EA1o th\u1EBB h\u1ECDc v\u1EDBi ChatGPT & Gemini</p>\n          </div>\n        </div>\n        <div class="feature-item">\n          <span class="feat-icon">\u{1F9E0}</span>\n          <div>\n            <h3>Feynman Technique</h3>\n            <p>Ghi ch\xFA l\u1EA1i b\u1EB1ng ng\xF4n ng\u1EEF c\u1EE7a ch\xEDnh b\u1EA1n</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Login card -->\n    <div class="auth-card">\n      <div class="auth-header">\n        <h2>Ch\xE0o m\u1EEBng tr\u1EDF l\u1EA1i! \u{1F44B}</h2>\n        <p>\u0110\u0103ng nh\u1EADp \u0111\u1EC3 ti\u1EBFp t\u1EE5c h\xE0nh tr\xECnh h\u1ECDc t\u1EEB v\u1EF1ng.</p>\n      </div>\n\n      <form (ngSubmit)="onSubmit()" #loginForm="ngForm" class="auth-form">\n        <div class="form-group">\n          <label for="username">T\xEAn \u0111\u0103ng nh\u1EADp</label>\n          <div class="input-wrap">\n            <span class="input-icon">\u{1F464}</span>\n            <input\n              type="text"\n              id="username"\n              name="username"\n              [(ngModel)]="username"\n              required\n              placeholder="Nh\u1EADp t\xEAn \u0111\u0103ng nh\u1EADp">\n          </div>\n        </div>\n\n        <div class="form-group">\n          <label for="password">M\u1EADt kh\u1EA9u</label>\n          <div class="input-wrap">\n            <span class="input-icon">\u{1F511}</span>\n            <input\n              type="password"\n              id="password"\n              name="password"\n              [(ngModel)]="password"\n              required\n              placeholder="Nh\u1EADp m\u1EADt kh\u1EA9u">\n          </div>\n        </div>\n\n        <div class="error-message" *ngIf="errorMsg">\n          \u26A0\uFE0F {{ errorMsg }}\n        </div>\n\n        <button type="submit" class="btn btn-primary btn-full" [disabled]="!loginForm.form.valid || isLoading">\n          <span *ngIf="!isLoading">\u{1F680} \u0110\u0103ng nh\u1EADp</span>\n          <span *ngIf="isLoading" class="loading-dots">\n            <span></span><span></span><span></span>\n          </span>\n        </button>\n\n        <div class="auth-footer">\n          <p>Ch\u01B0a c\xF3 t\xE0i kho\u1EA3n? <a routerLink="/register">\u0110\u0103ng k\xFD ngay</a></p>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</div>\n', styles: ["/* src/app/features/auth/login/login.component.scss */\n.auth-bg {\n  min-height: 100vh;\n  background: #0f1019;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px;\n  position: relative;\n  overflow: hidden;\n  background-image:\n    radial-gradient(\n      ellipse at 20% 50%,\n      rgba(96, 165, 250, 0.05) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse at 80% 20%,\n      rgba(167, 139, 250, 0.05) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse at 50% 80%,\n      rgba(45, 212, 191, 0.04) 0%,\n      transparent 55%);\n}\n.bg-orb {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  pointer-events: none;\n  opacity: 0.35;\n  animation: float 8s ease-in-out infinite;\n}\n.bg-orb.orb-1 {\n  width: 400px;\n  height: 400px;\n  background: rgba(96, 165, 250, 0.15);\n  top: -100px;\n  left: -100px;\n  animation-delay: 0s;\n}\n.bg-orb.orb-2 {\n  width: 350px;\n  height: 350px;\n  background: rgba(167, 139, 250, 0.12);\n  bottom: -80px;\n  right: -80px;\n  animation-delay: -3s;\n}\n.bg-orb.orb-3 {\n  width: 280px;\n  height: 280px;\n  background: rgba(45, 212, 191, 0.1);\n  top: 50%;\n  right: 30%;\n  animation-delay: -6s;\n}\n.auth-container {\n  display: grid;\n  grid-template-columns: 1fr 420px;\n  gap: 48px;\n  max-width: 900px;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 768px) {\n  .auth-container {\n    grid-template-columns: 1fr;\n  }\n  .auth-container .brand-panel {\n    display: none;\n  }\n}\n.brand-panel {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 48px;\n}\n.brand-panel .brand-logo {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.brand-panel .brand-logo .brand-icon {\n  font-size: 3rem;\n  line-height: 1;\n  filter: drop-shadow(0 0 20px rgba(96, 165, 250, 0.5));\n}\n.brand-panel .brand-logo .brand-name {\n  font-size: 2.5rem;\n  font-weight: 900;\n  background:\n    linear-gradient(\n      135deg,\n      #e8e9f0,\n      #60a5fa);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1;\n}\n.brand-panel .brand-logo .brand-tagline {\n  font-size: 0.75rem;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  margin-top: 4px;\n}\n.brand-panel .brand-features {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.brand-panel .feature-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 16px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  transition: all 0.15s ease;\n}\n.brand-panel .feature-item:hover {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(96, 165, 250, 0.2);\n  transform: translateX(4px);\n}\n.brand-panel .feature-item .feat-icon {\n  font-size: 1.5rem;\n  line-height: 1;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.brand-panel .feature-item h3 {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #e8e9f0;\n  margin-bottom: 2px;\n}\n.brand-panel .feature-item p {\n  font-size: 0.75rem;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.auth-card {\n  background: rgba(25, 27, 48, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05);\n  border-radius: 20px;\n  padding: 48px;\n  animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);\n}\n.auth-card .auth-header {\n  margin-bottom: 32px;\n}\n.auth-card .auth-header h2 {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #e8e9f0;\n  margin-bottom: 4px;\n}\n.auth-card .auth-header p {\n  color: #9ca3b0;\n  font-size: 0.875rem;\n}\n.auth-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #9ca3b0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.input-wrap {\n  position: relative;\n}\n.input-wrap .input-icon {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 1rem;\n  pointer-events: none;\n  opacity: 0.6;\n}\n.input-wrap input {\n  width: 100%;\n  padding: 8px 16px 8px 42px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 10px;\n  color: #e8e9f0;\n  font-size: 1rem;\n  transition: all 0.15s ease;\n}\n.input-wrap input:focus {\n  border-color: rgba(96, 165, 250, 0.5);\n  background: rgba(255, 255, 255, 0.06);\n  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.12);\n}\n.error-message {\n  background: rgba(248, 113, 113, 0.08);\n  border: 1px solid rgba(248, 113, 113, 0.2);\n  color: #f87171;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  animation: fadeInDown 0.3s ease-out;\n}\n.btn-full {\n  width: 100%;\n  padding: 16px 24px;\n  justify-content: center;\n  font-size: 1rem;\n  border-radius: 10px;\n  margin-top: 4px;\n}\n.loading-dots {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.loading-dots span {\n  width: 6px;\n  height: 6px;\n  background: rgba(255, 255, 255, 0.7);\n  border-radius: 50%;\n  animation: loadingBounce 1.2s ease-in-out infinite;\n}\n.loading-dots span:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.loading-dots span:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes loadingBounce {\n  0%, 80%, 100% {\n    transform: scale(0.7);\n    opacity: 0.5;\n  }\n  40% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.auth-footer {\n  text-align: center;\n  margin-top: 8px;\n}\n.auth-footer p {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.auth-footer p a {\n  color: #60a5fa;\n  font-weight: 600;\n}\n.auth-footer p a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-TVBDHP3T.js.map
