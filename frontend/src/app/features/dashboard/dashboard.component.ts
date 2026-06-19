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
      error: (err: any) => {
        console.error('Failed to load user stats:', err);
        this.isLoading = false;
      }
    });

    this.apiService.getSRSStats().subscribe({
      next: (stats: SRSStats) => {
        this.srsStats = stats;
      },
      error: (err: any) => {
        console.error('Failed to load SRS stats:', err);
      }
    });
  }
}
