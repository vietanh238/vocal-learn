import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: '',
    loadComponent: () => import('./layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'decks',
        loadComponent: () => import('./features/decks/decks.component').then(m => m.DecksComponent)
      },
      {
        path: 'decks/:id',
        loadComponent: () => import('./features/decks/deck-detail/deck-detail.component').then(m => m.DeckDetailComponent)
      },
      {
        path: 'ai-cards',
        loadComponent: () => import('./features/ai-generator/ai-generator.component').then(m => m.AiGeneratorComponent)
      },
      {
        path: 'settings',
        loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent)
      },
      {
        path: 'study/:mode',
        loadComponent: () => import('./features/study/study-session/study-session.component').then(m => m.StudySessionComponent)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];
