import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { delay, of } from 'rxjs';

import { MetaService } from '../../core/services/meta-service';

import { TestimonialSection } from './testimonial-section/testimonial-section';
import { HeroSection } from './hero-section/hero-section';

import { Testimonial } from '../../interfaces/testimonial';
import { DisplayImage } from '../../interfaces/app-image';

import { testimonialsToImagesAdapter } from '../../core/adapters/testimonial-to-image.adapter';

import { environment } from '../../../environments/environment';
import { WhatWeOfferSection } from './what-we-offer-section/what-we-offer-section';
import { CallToActionSection } from './call-to-action-section/call-to-action-section';
import { WhyUsSection } from './why-us-section/why-us-section';

@Component({
  selector: 'vd-home',
  imports: [
    RouterModule,
    TestimonialSection,
    HeroSection,
    WhatWeOfferSection,
    CallToActionSection,
    WhyUsSection,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit {
  protected pageTitle = 'Home';

  private cdr = inject(ChangeDetectorRef);
  private metaService = inject(MetaService);
  protected storageUrl = environment.storageUrl;

  protected currentIndex = 0;

  ngOnInit(): void {
    this.metaService.init();
  }
}
