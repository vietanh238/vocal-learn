import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {
  currentLang = 'en';
  dailyGoal = 20;
  feynmanEnabled = true;
  activeRecallEnabled = true;
  srsAlgorithm = 'sm2';
  pomodoroFocus = 25;
  pomodoroBreak = 5;

  isSaving = false;
  saveSuccess = false;

  ngOnInit() {
    this.currentLang        = localStorage.getItem('current_lang') || 'en';
    this.dailyGoal          = Number(localStorage.getItem('daily_goal') || '20');
    this.feynmanEnabled     = localStorage.getItem('feynman_enabled') !== 'false';
    this.activeRecallEnabled = localStorage.getItem('active_recall_enabled') !== 'false';
    this.srsAlgorithm       = localStorage.getItem('srs_algorithm') || 'sm2';
    this.pomodoroFocus      = Number(localStorage.getItem('pomodoro_focus') || '25');
    this.pomodoroBreak      = Number(localStorage.getItem('pomodoro_break') || '5');
  }

  saveSettings() {
    this.isSaving = true;

    // Simulate a small delay for UX feedback
    setTimeout(() => {
      localStorage.setItem('current_lang', this.currentLang);
      localStorage.setItem('daily_goal', this.dailyGoal.toString());
      localStorage.setItem('feynman_enabled', this.feynmanEnabled.toString());
      localStorage.setItem('active_recall_enabled', this.activeRecallEnabled.toString());
      localStorage.setItem('srs_algorithm', this.srsAlgorithm);
      localStorage.setItem('pomodoro_focus', this.pomodoroFocus.toString());
      localStorage.setItem('pomodoro_break', this.pomodoroBreak.toString());

      // Broadcast event for other components (like Pomodoro widget) to update
      window.dispatchEvent(new Event('settingsChanged'));

      this.isSaving = false;
      this.saveSuccess = true;
      setTimeout(() => { this.saveSuccess = false; }, 3000);
    }, 400);
  }
}
