import { NgClass } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ThemeService } from '../theme/theme-service';
import { MatTooltipModule } from '@angular/material/tooltip';
// Font Awesome icons used; MatIcon removed.

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
    this.themeService.theme() === 'light-theme' ? 'fa-sun' : 'fa-moon'
  );
  toggleTheme = (): void => {
    this.themeService.toggleTheme();
  };
}
