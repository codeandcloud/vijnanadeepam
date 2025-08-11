import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { DisplayImage } from '../../../interfaces/app-image.model';
import { ImageLoader } from '../../../shared/image-loader/image-loader';

@Component({
  selector: 'vd-testimonial-slider',
  imports: [CarouselModule, ImageLoader],
  templateUrl: './testimonial-slider.html',
  styleUrl: './testimonial-slider.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialSlider {
  testimonials = input.required<DisplayImage[]>();

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    margin: 10,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };
}
