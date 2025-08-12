import { Component, computed, inject } from '@angular/core';
import { ThemeService } from '../theme/theme-service';
import { MatTooltipModule } from '@angular/material/tooltip';
// Using Material Icons font via index.html

@Component({
  selector: 'vd-menu-toggler',
  imports: [MatTooltipModule],
  templateUrl: './menu-toggler.html',
  styleUrl: './menu-toggler.scss',
})
export class MenuToggler {
  private themeService = inject(ThemeService);
  protected currentTheme = this.themeService.theme;
  protected themeIcon = computed(() =>
    this.themeService.theme() === 'light-theme' ? 'light_mode' : 'dark_mode'
  );
  toggleTheme = (): void => {
    this.themeService.toggleTheme();
  };
}
