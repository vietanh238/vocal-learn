import {
  Router
} from "./chunk-YPDWKRJV.js";
import {
  HttpClient
} from "./chunk-EX2AIKSR.js";
import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-G7WC3NMJ.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  router;
  API_URL = "http://localhost:8000/api/auth";
  currentUser = signal(null);
  user = this.currentUser.asReadonly();
  isLoggedIn = computed(() => !!this.currentUser());
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.loadUserFromStorage();
  }
  loadUserFromStorage() {
    const token = localStorage.getItem("access_token");
    const user = localStorage.getItem("user");
    if (token && user) {
      try {
        this.currentUser.set(JSON.parse(user));
      } catch {
        this.logout();
      }
    }
  }
  register(data) {
    return this.http.post(`${this.API_URL}/register/`, data);
  }
  login(username, password) {
    return this.http.post(`${this.API_URL}/token/`, { username, password }).pipe(tap((tokens) => {
      localStorage.setItem("access_token", tokens.access);
      localStorage.setItem("refresh_token", tokens.refresh);
      this.fetchProfile().subscribe();
    }));
  }
  fetchProfile() {
    return this.http.get(`${this.API_URL}/profile/`).pipe(tap((user) => {
      this.currentUser.set(user);
      localStorage.setItem("user", JSON.stringify(user));
    }));
  }
  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    this.currentUser.set(null);
    this.router.navigate(["/login"]);
  }
  getAccessToken() {
    return localStorage.getItem("access_token");
  }
  getRefreshToken() {
    return localStorage.getItem("refresh_token");
  }
  refreshToken() {
    const refresh = this.getRefreshToken();
    return this.http.post(`${this.API_URL}/token/refresh/`, { refresh }).pipe(tap((result) => localStorage.setItem("access_token", result.access)));
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-NPGZ4JCN.js.map
