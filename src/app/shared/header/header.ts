import {
  afterNextRender,
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SiteMenu } from '../../core/services/site-menu';
import { MenuItem } from '../../interfaces/menu-item';
import { MenuToggler } from '../menu-toggler/menu-toggler';

import { environment } from '../../../environments/environment';
import { debounceTime, fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'vd-header',
  imports: [RouterLink, RouterLinkActive, CommonModule, MenuToggler],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header implements OnInit, OnDestroy {
  readonly #MOBILE_MENU_BREAKPOINT = 1020;
  protected readonly title = environment.app.title;

  public isMenuCollapsed = true;
  public isMobileMenuOpen = false;
  private menuService = inject(SiteMenu);
  protected menuItems: MenuItem[] = [];
  protected currentOpenMenu = signal<string | null>(null);
  protected isDark = signal<boolean>(false);

  #resizeSubscription: Subscription | null = null;
  #documentClickSubscription: Subscription | null = null;

  constructor() {
    afterNextRender(() => {
      this.#onResize();
      this.#onDocumentClick();
    });
  }

  ngOnInit() {
    this.#loadMenuItems();
  }

  ngOnDestroy() {
    this.#resizeSubscription?.unsubscribe();
    this.#documentClickSubscription?.unsubscribe();
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

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  toggleDropdown(menuLabel: string) {
    if (this.currentOpenMenu() === menuLabel) {
      this.currentOpenMenu.set(null);
    } else {
      this.currentOpenMenu.set(menuLabel);
    }
  }

  closeDropdown() {
    this.currentOpenMenu.set(null);
  }

  toggleTheme() {
    this.isDark.update((v) => !v);
    const root = document.documentElement;
    if (this.isDark()) root.classList.add('dark-theme');
    else root.classList.remove('dark-theme');
  }

  #onResize = () => {
    this.#resizeSubscription = fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(() => {
        const width = window.innerWidth;
        if (width > this.#MOBILE_MENU_BREAKPOINT) {
          this.isMobileMenuOpen = false;
        }
      });
  };

  #onDocumentClick = () => {
    this.#documentClickSubscription = fromEvent(document, 'click').subscribe(
      (event: Event) => {
        const target = event.target as HTMLElement;
        const headerElement = target.closest('header');

        if (!headerElement && this.currentOpenMenu()) {
          this.currentOpenMenu.set(null);
        }
      }
    );
  };
}
