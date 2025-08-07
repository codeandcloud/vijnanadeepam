import { Component, input } from '@angular/core';
import { DisplayImage } from '../../interfaces/app-image.model';

@Component({
  selector: 'vd-image-loader',
  imports: [],
  templateUrl: './image-loader.html',
  styleUrl: './image-loader.scss',
})
export class ImageLoader {
  image = input.required<DisplayImage>();
  imageSrc = input.required<string>();
  imageHeight = input<number>(200);
  imageWidth = input<number>(200);

  isLoaded = false;

  onLoad() {
    this.isLoaded = true;
  }
}
