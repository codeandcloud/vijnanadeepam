import { Component, OnInit, inject, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageImageService } from '../../shared/media-content/homepage-image-service';

import { PlaceholderComponent } from '../../shared/placeholder-component/placeholder-component';
import { ErrorComponent } from '../../shared/error-component/error-component';
import { EmptyComponent } from '../../shared/empty-component/empty-component';

@Component({
  selector: 'vd-home-carousel',
  imports: [
    NgbCarouselModule,
    NgOptimizedImage,
    PlaceholderComponent,
    ErrorComponent,
    EmptyComponent,
  ],
  templateUrl: './home-carousel.html',
  styleUrl: './home-carousel.scss',
})
export class HomeCarousel {
  storageUrl = input.required<string>();

  protected galleryImages = inject(HomepageImageService);
}
