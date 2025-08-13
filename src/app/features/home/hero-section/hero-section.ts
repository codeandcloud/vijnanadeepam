import {
  afterNextRender,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { delay, of } from 'rxjs';
import { PreloadService } from '../../../core/services/preload';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'vd-hero-section',
  imports: [RouterLink],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  currentImage = 'hero/default.jpg';
  currentIndex = 0;

  private cdr = inject(ChangeDetectorRef);
  private preload = inject(PreloadService);

  protected backgroundImages!: string[];
  protected mockBackgroundImages: string[] = [
    'hero/hero1.jpg',
    'hero/hero2.jpg',
    'hero/hero3.jpg',
  ];
  constructor() {
    afterNextRender(() => {
      this.#preloadImages();
      this.#startSlideshow();
    });
  }

  ngOnInit(): void {
    this.#getBackgroundImages();
  }

  #getBackgroundImages() {
    of(this.mockBackgroundImages)
      .pipe(delay(2000))
      .subscribe((data) => {
        this.backgroundImages = data;
        this.preload.preloadImages(data);
        this.cdr.markForCheck();
      });
  }

  get hasBackgroundImage(): boolean {
    return this.backgroundImages && this.backgroundImages.length > 0;
  }

  #preloadImages() {
    const intervalId = setInterval(() => {
      if (this.hasBackgroundImage) {
        this.preload.preloadImages(this.backgroundImages);
        clearInterval(intervalId);
      }
    }, 500);
  }

  #startSlideshow() {
    setInterval(() => {
      if (this.hasBackgroundImage) {
        this.currentIndex =
          (this.currentIndex + 1) % this.backgroundImages.length;
        this.currentImage = this.backgroundImages[this.currentIndex];
        this.cdr.markForCheck();
      }
    }, 5000);
  }
}
