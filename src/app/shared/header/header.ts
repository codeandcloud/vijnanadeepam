import {
  afterNextRender,
  ChangeDetectorRef,
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SiteMenu } from '../../core/services/site-menu';
import { MenuItem } from '../../interfaces/menu-item';

import { environment } from '../../../environments/environment';
import { debounceTime, fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'vd-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header implements OnInit, OnDestroy {
  readonly #MOBILE_MENU_BREAKPOINT = 1020;
  protected readonly title = environment.app.title;

  public isMenuCollapsed = true;
  private menuService = inject(SiteMenu);
  protected menuItems: MenuItem[] = [];
  protected currentOpenMenu = signal<string | null>(null);
  protected isDark = signal<boolean>(false);

  private cdr = inject(ChangeDetectorRef);

  #resizeSubscription: Subscription | null = null;

  private trigger = viewChild<MatMenuTrigger>('mobileMenuTrigger');

  constructor() {
    afterNextRender(() => {
      this.#resizeSubscription = fromEvent(window, 'resize')
        .pipe(debounceTime(200))
        .subscribe(() => {
          const width = window.innerWidth;
          if (width > this.#MOBILE_MENU_BREAKPOINT) {
            this.trigger()?.closeMenu();
          }
        });
    });
  }

  ngOnInit() {
    this.#loadMenuItems();
  }

  ngOnDestroy() {
    this.#resizeSubscription?.unsubscribe();
  }

  #loadMenuItems = (): void => {
    this.menuService.getItems().subscribe((items) => {
      this.menuItems = items;
    });
  };

  onMenuOpen(label: string) {
    this.currentOpenMenu.set(label);
  }
  onMenuClose(label: string) {
    if (this.currentOpenMenu() === label) this.currentOpenMenu.set(null);
  }

  toggleTheme() {
    this.isDark.update((v) => !v);
    const root = document.documentElement;
    if (this.isDark()) root.classList.add('dark-theme');
    else root.classList.remove('dark-theme');
  }
}
