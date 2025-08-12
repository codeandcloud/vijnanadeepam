import { Component, input } from '@angular/core';
import { DisplayImage } from '../../../../interfaces/app-image';
import { ImageLoader } from '../../../../shared/image-loader/image-loader';

@Component({
  selector: 'vd-testimonial-feature',
  standalone: true,
  imports: [ImageLoader],
  templateUrl: './testimonial-feature.html',
  styleUrl: './testimonial-feature.scss',
})
export class TestimonialFeature {
  testimonial = input.required<DisplayImage>();
  index = input.required<number>();
}
