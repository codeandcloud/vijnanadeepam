import { Injectable } from '@angular/core';

import { ContentService } from './content-service';
import { imageAdapter } from '../../core/adapters/image-adapter';
import { ApiResponse } from '../../interfaces/api-response.model';
import { AppImage, DisplayImage } from '../../interfaces/app-image.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GalleryImageService extends ContentService<
  AppImage[],
  DisplayImage[]
> {
  protected getEndpoint(): string {
    return '/gallery-images';
  }

  protected getErrorMessage(): string {
    return 'Failed to fetch images';
  }

  protected adaptResult(source: ApiResponse<AppImage[]>): DisplayImage[] {
    if (!source || !source.data || source.data.length === 0) {
      // Gracefully handle empty content; SSR should not fail.
      return [];
    }
    const storageUrl = environment.storageUrl;
    source.data.forEach((img) => {
      img.image = `${storageUrl}/${img.image}`;
    });
    return imageAdapter(source);
  }

  protected override getFallback(): DisplayImage[] {
    return [];
  }
}
