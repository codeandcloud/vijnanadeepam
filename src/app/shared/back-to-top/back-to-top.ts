import { afterNextRender, Component, OnDestroy, signal } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  Observable,
  Subject,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'vd-back-to-top',
  imports: [],
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.scss',
})
export class BackToTop implements OnDestroy {
  #unsubscribe = new Subject<void>();

  #scroll$?: Observable<number>;

  protected opacity = signal(0);

  constructor() {
    afterNextRender(() => {
      this.#scroll$ = fromEvent(window, 'scroll').pipe(
        debounceTime(200),
        map(() => window.scrollY),
        distinctUntilChanged(),
        takeUntil(this.#unsubscribe)
      );

      this.#scroll$.subscribe((scrollY) => {
        this.opacity.set(scrollY > 200 ? 0.85 : 0);
      });
    });
  }
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
    });
  }

  ngOnDestroy(): void {
    this.#unsubscribe.next();
    this.#unsubscribe.complete();
  }
}
