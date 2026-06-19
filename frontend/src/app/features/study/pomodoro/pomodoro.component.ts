import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pomodoro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pomodoro.component.html',
  styleUrl: './pomodoro.component.scss'
})
export class PomodoroComponent implements OnInit, OnDestroy {
  FOCUS_TIME = 25 * 60;
  BREAK_TIME = 5 * 60;

  timeLeft = this.FOCUS_TIME;
  isRunning = false;
  isBreak = false;
  timer: any;
  pomodoroCount = 0;

  circumference = 52 * 2 * Math.PI;
  strokeDashoffset = 0;

  private settingsListener = () => this.reloadSettings();

  ngOnInit() {
    this.reloadSettings();
    window.addEventListener('settingsChanged', this.settingsListener);
  }

  reloadSettings() {
    const focus = Number(localStorage.getItem('pomodoro_focus') || '25');
    const brk   = Number(localStorage.getItem('pomodoro_break') || '5');
    this.FOCUS_TIME = focus * 60;
    this.BREAK_TIME = brk * 60;

    if (!this.isRunning) {
      this.timeLeft = this.isBreak ? this.BREAK_TIME : this.FOCUS_TIME;
      this.updateProgress();
    }
  }

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
    if (!this.isBreak) this.pomodoroCount++;
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
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(this.isBreak ? 523.25 : 440, ctx.currentTime);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.8);
    } catch {
      // Audio not supported
    }
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
    window.removeEventListener('settingsChanged', this.settingsListener);
  }
}
