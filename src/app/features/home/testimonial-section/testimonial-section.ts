import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { DisplayImage } from '../../../interfaces/app-image';
import { Testimonial } from '../../../interfaces/testimonial';
import { testimonialsToImagesAdapter } from '../../../core/adapters/testimonial-to-image.adapter';
import { TestimonialFeature } from './testimonial-feature/testimonial-feature';

@Component({
  selector: 'vd-testimonial-section',
  standalone: true,
  imports: [CarouselModule, TestimonialFeature],
  templateUrl: './testimonial-section.html',
  styleUrl: './testimonial-section.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialSection implements OnInit {
  protected testimonials!: DisplayImage[];
  #mockTestimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        'Education should adapt to the learner. This platform embodies that philosophy with remarkable clarity.',
      name: 'Dr. Meera Nair',
      role: 'Vision Rehabilitation Specialist',
      image: 'testimonials/meera.png',
    },
    {
      id: 2,
      quote:
        'An empowering initiative bringing dignity and independence to countless young minds.',
      name: 'Arjun Rao',
      role: 'Philanthropist & Well Wisher',
      image: 'testimonials/arjun.png',
    },
    {
      id: 3,
      quote:
        'Accessibility here is not an afterthought – it is the foundation. A model for inclusive design.',
      name: 'Sarah Thomas',
      role: 'Assistive Tech Advocate',
      image: 'testimonials/sarah.png',
    },
    {
      id: 4,
      quote:
        'I have rarely seen such dedication to detail in accessible learning resources.',
      name: 'Prof. K. R. Menon',
      role: 'Education Reformer',
      image: 'testimonials/menon.png',
    },
  ];

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

  ngOnInit(): void {
    this.#getTestimonials();
  }

  #getTestimonials() {
    of(this.#mockTestimonials).subscribe((data) => {
      this.testimonials = testimonialsToImagesAdapter(data);
    });
  }
}
