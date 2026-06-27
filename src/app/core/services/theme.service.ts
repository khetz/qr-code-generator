import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDark = signal(false);

  constructor() {
    const saved = localStorage.getItem("theme");
    const useDark = saved === 'dark' || !saved;
    this.setTheme(useDark);
  }

  toggleTheme() {
    this.setTheme(!this.isDark());
  }

  private setTheme(isDark: boolean) {
    this.isDark.set(isDark);
    document.body.classList.toggle('dark-theme', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

}
