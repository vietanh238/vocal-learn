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

// src/app/features/auth/register/register.component.ts
function RegisterComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMsg, " ");
  }
}
function RegisterComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign Up");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
}
var RegisterComponent = class _RegisterComponent {
  username = "";
  email = "";
  password = "";
  isLoading = false;
  errorMsg = "";
  authService = inject(AuthService);
  router = inject(Router);
  onSubmit() {
    this.isLoading = true;
    this.errorMsg = "";
    this.authService.register({
      username: this.username,
      email: this.email,
      password: this.password,
      password2: this.password
    }).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(["/login"]);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMsg = "Registration failed. Please try again.";
        console.error(err);
      }
    });
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 30, vars: 7, consts: [["registerForm", "ngForm"], [1, "auth-container"], [1, "auth-card"], [1, "auth-header"], [1, "auth-form", 3, "ngSubmit"], [1, "form-group"], ["for", "username"], ["type", "text", "id", "username", "name", "username", "required", "", "placeholder", "Choose a username", 3, "ngModelChange", "ngModel"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", "placeholder", "Enter your email", 3, "ngModelChange", "ngModel"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", "placeholder", "Create a password", 3, "ngModelChange", "ngModel"], ["class", "error-message", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-full", 3, "disabled"], [4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "auth-footer"], ["routerLink", "/login"], [1, "error-message"], [1, "spinner"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2");
      \u0275\u0275text(4, "Create Account \u{1F31F}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Start mastering vocabulary today.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "form", 4, 0);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(9, "div", 5)(10, "label", 6);
      \u0275\u0275text(11, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 5)(14, "label", 8);
      \u0275\u0275text(15, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 5)(18, "label", 10);
      \u0275\u0275text(19, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(21, RegisterComponent_div_21_Template, 2, 1, "div", 12);
      \u0275\u0275elementStart(22, "button", 13);
      \u0275\u0275template(23, RegisterComponent_span_23_Template, 2, 0, "span", 14)(24, RegisterComponent_span_24_Template, 1, 0, "span", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 16)(26, "p");
      \u0275\u0275text(27, "Already have an account? ");
      \u0275\u0275elementStart(28, "a", 17);
      \u0275\u0275text(29, "Log in");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      const registerForm_r3 = \u0275\u0275reference(8);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMsg);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !registerForm_r3.form.valid || ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, CommonModule, NgIf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [FormsModule, CommonModule, RouterLink], template: '<div class="auth-container">\n  <div class="auth-card">\n    <div class="auth-header">\n      <h2>Create Account \u{1F31F}</h2>\n      <p>Start mastering vocabulary today.</p>\n    </div>\n    \n    <form (ngSubmit)="onSubmit()" #registerForm="ngForm" class="auth-form">\n      <div class="form-group">\n        <label for="username">Username</label>\n        <input \n          type="text" \n          id="username" \n          name="username" \n          [(ngModel)]="username" \n          required \n          placeholder="Choose a username">\n      </div>\n\n      <div class="form-group">\n        <label for="email">Email</label>\n        <input \n          type="email" \n          id="email" \n          name="email" \n          [(ngModel)]="email" \n          required \n          placeholder="Enter your email">\n      </div>\n      \n      <div class="form-group">\n        <label for="password">Password</label>\n        <input \n          type="password" \n          id="password" \n          name="password" \n          [(ngModel)]="password" \n          required \n          placeholder="Create a password">\n      </div>\n      \n      <div class="error-message" *ngIf="errorMsg">\n        {{ errorMsg }}\n      </div>\n      \n      <button type="submit" class="btn btn-primary btn-full" [disabled]="!registerForm.form.valid || isLoading">\n        <span *ngIf="!isLoading">Sign Up</span>\n        <span *ngIf="isLoading" class="spinner"></span>\n      </button>\n      \n      <div class="auth-footer">\n        <p>Already have an account? <a routerLink="/login">Log in</a></p>\n      </div>\n    </form>\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/register/register.component.ts", lineNumber: 14 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-QI4NUMPP.js.map
