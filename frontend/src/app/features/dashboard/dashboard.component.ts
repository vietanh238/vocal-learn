import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { SRSStats, UserStatsData } from '../../core/models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private apiService = inject(ApiService);

  userStats: UserStatsData | null = null;
  srsStats: SRSStats | null = null;
  isLoading = true;
  currentHour = new Date().getHours();

  get greeting(): string {
    if (this.currentHour < 12) return 'Chào buổi sáng';
    if (this.currentHour < 18) return 'Chào buổi chiều';
    return 'Chào buổi tối';
  }

  get xpProgress(): number {
    if (!this.userStats) return 0;
    const xpInLevel = this.userStats.total_xp % 1000;
    return Math.round((xpInLevel / 1000) * 100);
  }

  get xpInLevel(): number {
    if (!this.userStats) return 0;
    return this.userStats.total_xp % 1000;
  }

  get totalStudied(): number {
    if (!this.srsStats?.status) return 0;
    const s = this.srsStats.status;
    return (s.learning || 0) + (s.young || 0) + (s.mature || 0);
  }

  get masteryPercent(): number {
    if (!this.srsStats) return 0;
    const total = this.srsStats.total || 0;
    if (total === 0) return 0;
    return Math.round(((this.srsStats.status?.mature || 0) / total) * 100);
  }

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.isLoading = true;

    this.apiService.getUserStats().subscribe({
      next: (stats: UserStatsData) => {
        this.userStats = stats;
        this.isLoading = false;
      },
      error: () => { this.isLoading = false; }
    });

    this.apiService.getSRSStats().subscribe({
      next: (stats: SRSStats) => { this.srsStats = stats; },
      error: () => {}
    });
  }
}
