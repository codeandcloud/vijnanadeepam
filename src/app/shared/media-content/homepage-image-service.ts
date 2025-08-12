import { inject, Injectable } from '@angular/core';

import { ContentService } from './content-service';
import { imageAdapter } from '../../core/adapters/image-adapter';
import { ApiResponse } from '../../interfaces/api-response';
import { AppImage, DisplayImage } from '../../interfaces/app-image';

@Injectable({
  providedIn: 'root',
})
export class HomepageImageService extends ContentService<
  AppImage[],
  DisplayImage[]
> {
  protected getEndpoint(): string {
    return '/homepage-images';
  }

  protected getErrorMessage(): string {
    return 'Failed to fetch images';
  }

  protected adaptResult(data: ApiResponse<AppImage[]>): DisplayImage[] {
    return imageAdapter(data);
  }
}
