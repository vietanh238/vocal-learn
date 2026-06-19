import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PomodoroComponent } from '../../features/study/pomodoro/pomodoro.component';
import { ApiService } from '../../core/services/api.service';
import { UserStatsData } from '../../core/models';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, PomodoroComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  private apiService = inject(ApiService);
  stats: UserStatsData | null = null;

  ngOnInit() {
    this.loadStats();
    
    // Listen for real-time stats update events
    window.addEventListener('statsUpdated', () => {
      this.loadStats();
    });
  }

  loadStats() {
    this.apiService.getUserStats().subscribe({
      next: (stats) => {
        this.stats = stats;
      },
      error: (err) => {
        console.error('Failed to load user stats for sidebar:', err);
      }
    });
  }

  get xpPercentage(): number {
    if (!this.stats) return 0;
    // Assume each level requires 1000 XP
    const relativeXp = this.stats.total_xp % 1000;
    return (relativeXp / 1000) * 100;
  }

  get currentXpInLevel(): number {
    if (!this.stats) return 0;
    return this.stats.total_xp % 1000;
  }
}
