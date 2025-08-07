import {
  Injectable,
  Inject,
  PLATFORM_ID,
  effect,
  signal,
  WritableSignal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly isBrowser: boolean;
  private currentTheme: WritableSignal<'light-theme' | 'dark-theme'>;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    const saved = this.isBrowser
      ? (localStorage.getItem('theme') as 'light-theme' | 'dark-theme' | null)
      : null;

    this.currentTheme = signal(saved ?? 'light-theme');

    // Apply theme on changes (only in browser)
    if (this.isBrowser) {
      effect(() => {
        const theme = this.currentTheme();
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
      });
    }
  }

  get theme() {
    return this.currentTheme.asReadonly();
  }

  toggleTheme = (): void => {
    const newTheme =
      this.currentTheme() === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.currentTheme.set(newTheme);
  };
}
