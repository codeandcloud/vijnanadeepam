import { Component } from '@angular/core';
import { WhatWeOfferFeature } from './what-we-offer-feature/what-we-offer-feature';
import { Feature } from '../../../interfaces/feature';

@Component({
  selector: 'vd-what-we-offer-section',
  imports: [WhatWeOfferFeature],
  templateUrl: './what-we-offer-section.html',
  styleUrl: './what-we-offer-section.scss',
})
export class WhatWeOfferSection {
  protected features: Feature[] = [
    {
      icon: 'headphones',
      title: 'Audio Library',
      description:
        'Curated narration of textbooks and reference material in clear, high‑quality audio.',
    },
    {
      icon: 'eye',
      title: 'Accessible Lessons',
      description:
        'Structured learning resources designed with screen reader friendly semantics.',
    },
    {
      icon: 'groups',
      title: 'Community Support',
      description:
        'Peer and mentor interaction fostering confidence and collaborative growth.',
    },
    {
      icon: 'graduation-cap',
      title: 'Scholarships',
      description:
        'Guidance and assistance to connect learners with funding opportunities.',
    },
  ];
}
