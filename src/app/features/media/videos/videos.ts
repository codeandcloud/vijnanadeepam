import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { YouTubeVideoService } from '../../../shared/media-content/youtube-video-service';
import { PlaceholderComponent } from '../../../shared/placeholder-component/placeholder-component';
import { ErrorComponent } from '../../../shared/error-component/error-component';
import { EmptyComponent } from '../../../shared/empty-component/empty-component';

@Component({
  selector: 'vd-videos',
  imports: [PlaceholderComponent, ErrorComponent, EmptyComponent],
  templateUrl: './videos.html',
  styleUrl: './videos.scss',
})
export class Videos {
  youTubeVideos = inject(YouTubeVideoService);
  private sanitizer = inject(DomSanitizer);

  getSafeEmbedUrl(youtubeId: string): SafeResourceUrl {
    const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
