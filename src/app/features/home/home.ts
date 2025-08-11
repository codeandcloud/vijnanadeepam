import {
  afterNextRender,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { delay, of } from 'rxjs';

import { MetaService } from '../../core/services/meta-service';

import { TestimonialSlider } from './testimonial-slider/testimonial-slider';

import { Testimonial } from '../../interfaces/testimonial.model';
import { DisplayImage } from '../../interfaces/app-image.model';

import { testimonialsToImagesAdapter } from '../../core/adapters/testimonial-to-image.adapter';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'vd-home',
  imports: [RouterModule, TestimonialSlider],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit {
  protected pageTitle = 'Home';

  private cdr = inject(ChangeDetectorRef);
  private metaService = inject(MetaService);
  protected storageUrl = environment.storageUrl;

  protected features = [
    {
      icon: 'fa-ear-listen',
      title: 'Audio Library',
      desc: 'Curated narration of textbooks and reference material in clear, high‑quality audio.',
    },
    {
      icon: 'fa-universal-access',
      title: 'Accessible Lessons',
      desc: 'Structured learning resources designed with screen reader friendly semantics.',
    },
    {
      icon: 'fa-people-group',
      title: 'Community Support',
      desc: 'Peer and mentor interaction fostering confidence and collaborative growth.',
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Scholarships',
      desc: 'Guidance and assistance to connect learners with funding opportunities.',
    },
  ];
  protected currentIndex = 0;
  protected backgroundImages!: string[];
  protected mockBackgroundImages: string[] = [
    'hero/hero1.jpg',
    'hero/hero2.jpg',
    'hero/hero3.jpg',
  ];

  protected testimonials!: DisplayImage[];
  protected mockTestimonials: Testimonial[] = [
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

  constructor() {
    afterNextRender(() => {
      setInterval(() => {
        if (this.hasBackgroundImage) {
          this.currentIndex =
            (this.currentIndex + 1) % this.backgroundImages.length;
          this.cdr.markForCheck();
        }
      }, 5000); // Change image every 5 seconds
    });
  }

  ngOnInit(): void {
    this.metaService.init();
    this.#getTestimonials();
    this.#getBackgroundImages();
  }

  #getTestimonials() {
    of(this.mockTestimonials)
      .pipe(delay(2000))
      .subscribe((data) => {
        this.testimonials = testimonialsToImagesAdapter(data);
        this.cdr.markForCheck();
      });
  }

  #getBackgroundImages() {
    of(this.mockBackgroundImages)
      .pipe(delay(2000))
      .subscribe((data) => {
        this.backgroundImages = data;
        this.cdr.markForCheck();
      });
  }

  protected get getCurrentBackgroundImage(): string {
    const fallbackImage = '/hero/hero1.jpg';
    const currentImage = this.hasBackgroundImage
      ? this.backgroundImages[this.currentIndex]
      : fallbackImage;
    return currentImage;
  }

  protected get hasBackgroundImage(): boolean {
    return this.backgroundImages && this.backgroundImages.length > 0;
  }
}
