import { Injectable } from '@angular/core';

import { ContentService } from './content-service';
import { videoAdapter } from '../../core/adapters/video-adapter';
import { ApiResponse } from '../../interfaces/api-response';
import { AppVideo, DisplayVideo } from '../../interfaces/app-video';

@Injectable({
  providedIn: 'root',
})
export class YouTubeVideoService extends ContentService<
  AppVideo[],
  DisplayVideo[]
> {
  protected getEndpoint(): string {
    return '/youtube-videos';
  }

  protected getErrorMessage(): string {
    return 'Failed to fetch videos';
  }

  protected adaptResult(data: ApiResponse<AppVideo[]>): DisplayVideo[] {
    return videoAdapter(data);
  }
}
