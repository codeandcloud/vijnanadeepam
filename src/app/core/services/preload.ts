import { DOCUMENT, Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreloadService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  preloadImages(imageUrls: string[]): void {
    for (const url of imageUrls) {
      const img: HTMLImageElement = this.document.createElement('img');
      img.src = url;
    }
  }
}
