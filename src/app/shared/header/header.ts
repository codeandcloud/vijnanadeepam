import {
  afterNextRender,
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import {
  NgbCollapse,
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
} from '@ng-bootstrap/ng-bootstrap';

import { SiteMenu } from '../../core/services/site-menu';
import { MenuItem } from '../../core/models/menu-item';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'vd-header',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    NgbCollapse,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem,
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header implements OnInit, OnDestroy {
  protected readonly title = environment.app.title;

  public isMenuCollapsed = true;
  private menuService = inject(SiteMenu);
  protected menuItems: MenuItem[] = [];

  private readonly scrollPosition = signal(0);
  readonly isSticky = computed(() => this.scrollPosition() > 300);

  private onScrollListener?: () => void;

  constructor() {
    afterNextRender(() => {
      this.onScrollListener = () => {
        this.scrollPosition.set(
          window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0
        );
      };
      window.addEventListener('scroll', this.onScrollListener, {
        passive: true,
      });
    });
  }

  ngOnInit() {
    this.#loadMenuItems();
  }

  ngOnDestroy() {
    if (this.onScrollListener) {
      window.removeEventListener('scroll', this.onScrollListener);
    }
  }

  #loadMenuItems = (): void => {
    this.menuService.getItems().subscribe((items) => {
      this.menuItems = items;
    });
  };
}
