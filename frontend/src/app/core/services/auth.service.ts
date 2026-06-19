import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User, AuthTokens } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly API_URL = 'http://localhost:8000/api/auth';
  private currentUser = signal<User | null>(null);
  
  readonly user = this.currentUser.asReadonly();
  readonly isLoggedIn = computed(() => !!this.currentUser());
  
  constructor(private http: HttpClient, private router: Router) {
    this.loadUserFromStorage();
  }
  
  private loadUserFromStorage() {
    const token = localStorage.getItem('access_token');
    const user = localStorage.getItem('user');
    if (token && user) {
      try {
        this.currentUser.set(JSON.parse(user));
      } catch {
        this.logout();
      }
    }
  }
  
  register(data: { username: string; email: string; password: string; password2: string }): Observable<any> {
    return this.http.post(`${this.API_URL}/register/`, data);
  }
  
  login(username: string, password: string): Observable<AuthTokens> {
    return this.http.post<AuthTokens>(`${this.API_URL}/token/`, { username, password }).pipe(
      tap(tokens => {
        localStorage.setItem('access_token', tokens.access);
        localStorage.setItem('refresh_token', tokens.refresh);
        this.fetchProfile().subscribe();
      })
    );
  }
  
  fetchProfile(): Observable<User> {
    return this.http.get<User>(`${this.API_URL}/profile/`).pipe(
      tap(user => {
        this.currentUser.set(user);
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }
  
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }
  
  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }
  
  getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }
  
  refreshToken(): Observable<{ access: string }> {
    const refresh = this.getRefreshToken();
    return this.http.post<{ access: string }>(`${this.API_URL}/token/refresh/`, { refresh }).pipe(
      tap(result => localStorage.setItem('access_token', result.access))
    );
  }
}
