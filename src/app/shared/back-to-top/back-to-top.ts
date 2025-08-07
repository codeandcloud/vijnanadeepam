import {
  Component,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  afterNextRender,
  computed,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'vd-back-to-top',
  imports: [],
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.scss',
})
export class BackToTop implements OnDestroy {
  private readonly scrollPosition = signal(0);
  readonly display = computed(() =>
    this.scrollPosition() > 100 ? 'grid' : 'none'
  );

  private onScrollListener?: () => void;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
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

  ngOnDestroy() {
    if (this.onScrollListener) {
      window.removeEventListener('scroll', this.onScrollListener);
    }
  }

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
      });
    }
  }
}
