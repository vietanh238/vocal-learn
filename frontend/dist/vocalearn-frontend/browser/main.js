import {
  AuthService
} from "./chunk-NPGZ4JCN.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withComponentInputBinding
} from "./chunk-YPDWKRJV.js";
import {
  provideHttpClient,
  withInterceptors
} from "./chunk-EX2AIKSR.js";
import {
  Component,
  catchError,
  inject,
  setClassMetadata,
  switchMap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-G7WC3NMJ.js";

// src/app/core/guards/auth.guard.ts
var authGuard = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isLoggedIn()) {
    return true;
  }
  return router.createUrlTree(["/login"], { queryParams: { returnUrl: state.url } });
};

// src/app/app.routes.ts
var routes = [
  {
    path: "login",
    loadComponent: () => import("./chunk-TVBDHP3T.js").then((m) => m.LoginComponent)
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-QI4NUMPP.js").then((m) => m.RegisterComponent)
  },
  {
    path: "",
    loadComponent: () => import("./chunk-TYAUN3FR.js").then((m) => m.MainLayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-QK7J5K7F.js").then((m) => m.DashboardComponent)
      },
      {
        path: "decks",
        loadComponent: () => import("./chunk-JDHC6CSW.js").then((m) => m.DecksComponent)
      },
      {
        path: "ai-cards",
        loadComponent: () => import("./chunk-LXC5AHT2.js").then((m) => m.AiGeneratorComponent)
      },
      {
        path: "settings",
        loadComponent: () => import("./chunk-JYRI6SBJ.js").then((m) => m.SettingsComponent)
      },
      {
        path: "study/:mode",
        loadComponent: () => import("./chunk-HCD7CDS4.js").then((m) => m.StudySessionComponent)
      },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },
  { path: "**", redirectTo: "" }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getAccessToken();
  if (token && !req.url.includes("/auth/token/")) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  return next(req).pipe(catchError((error) => {
    if (error.status === 401 && !req.url.includes("/auth/token/")) {
      return authService.refreshToken().pipe(switchMap((result) => {
        req = req.clone({
          setHeaders: { Authorization: `Bearer ${result.access}` }
        });
        return next(req);
      }), catchError((err) => {
        authService.logout();
        return throwError(() => err);
      }));
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "vocalearn-frontend";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet], template: `<router-outlet></router-outlet>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 11 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
