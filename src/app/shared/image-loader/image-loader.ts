import { Component, computed, input } from '@angular/core';
import { DisplayImage } from '../../interfaces/app-image';

@Component({
  selector: 'vd-image-loader',
  imports: [],
  templateUrl: './image-loader.html',
  styleUrl: './image-loader.scss',
})
export class ImageLoader {
  isLoaded = false;
  defaultClass = 'block h-auto max-w-full';

  image = input.required<DisplayImage>();
  imageHeight = input<number>(200);
  imageWidth = input<number>(200);
  imageClass = input<string>('');

  computedClass = computed(() => {
    return `${this.defaultClass} ${this.imageClass()}`;
  });

  onLoad() {
    this.isLoaded = true;
  }
}
