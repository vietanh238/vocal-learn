import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pomodoro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pomodoro.component.html',
  styleUrl: './pomodoro.component.scss'
})
export class PomodoroComponent implements OnDestroy {
  FOCUS_TIME = 25 * 60; // 25 minutes
  BREAK_TIME = 5 * 60;  // 5 minutes
  
  timeLeft = this.FOCUS_TIME;
  isRunning = false;
  isBreak = false;
  timer: any;

  // SVG Progress calculation
  circumference = 52 * 2 * Math.PI;
  strokeDashoffset = 0;

  toggleTimer() {
    this.isRunning = !this.isRunning;
    if (this.isRunning) {
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
          this.updateProgress();
        } else {
          this.playAlarm();
          this.switchMode();
        }
      }, 1000);
    } else {
      clearInterval(this.timer);
    }
  }

  resetTimer() {
    clearInterval(this.timer);
    this.isRunning = false;
    this.timeLeft = this.isBreak ? this.BREAK_TIME : this.FOCUS_TIME;
    this.updateProgress();
  }

  switchMode() {
    this.isBreak = !this.isBreak;
    this.resetTimer();
  }

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  updateProgress() {
    const total = this.isBreak ? this.BREAK_TIME : this.FOCUS_TIME;
    const progress = this.timeLeft / total;
    this.strokeDashoffset = this.circumference - progress * this.circumference;
  }

  playAlarm() {
    // In a real app, play a sound here
    console.log('BEEP BEEP BEEP!');
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }
}
