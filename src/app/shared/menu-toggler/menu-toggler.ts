import { NgClass } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ThemeService } from '../theme/theme-service';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'vd-menu-toggler',
  imports: [NgbTooltip],
  templateUrl: './menu-toggler.html',
  styleUrl: './menu-toggler.scss',
})
export class MenuToggler {
  private themeService = inject(ThemeService);
  protected currentTheme = this.themeService.theme;
  protected themeIcon = computed(() =>
    this.themeService.theme() === 'light-theme' ? 'bi-sun-fill' : 'bi-moon-fill'
  );
  toggleTheme = (): void => {
    this.themeService.toggleTheme();
  };
}
