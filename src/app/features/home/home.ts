import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestimonialSection } from './testimonial-section/testimonial-section';
import { HeroSection } from './hero-section/hero-section';

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
export class Home {}
