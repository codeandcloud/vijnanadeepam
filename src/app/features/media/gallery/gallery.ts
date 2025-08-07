import { Component, inject } from '@angular/core';
import { MetaService } from '../../../core/services/meta-service';
import { GalleryImageService } from '../../../shared/media-content/gallery-image-service';

import { ImageLoader } from '../../../shared/image-loader/image-loader';
import { PlaceholderComponent } from '../../../shared/placeholder-component/placeholder-component';
import { ErrorComponent } from '../../../shared/error-component/error-component';
import { EmptyComponent } from '../../../shared/empty-component/empty-component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'vd-gallery',
  imports: [ImageLoader, PlaceholderComponent, ErrorComponent, EmptyComponent],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  private pageTitle = 'Gallery';
  galleryImages = inject(GalleryImageService);

  private metaService = inject(MetaService);
  protected storageUrl = environment.storageUrl;

  ngOnInit(): void {
    this.metaService.init();
  }
}
