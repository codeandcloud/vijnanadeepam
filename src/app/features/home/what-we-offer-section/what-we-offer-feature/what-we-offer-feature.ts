import { Component, input } from '@angular/core';
import { Feature } from '../../../../interfaces/feature';

@Component({
  selector: 'vd-what-we-offer-feature',
  imports: [],
  templateUrl: './what-we-offer-feature.html',
  styleUrl: './what-we-offer-feature.scss',
})
export class WhatWeOfferFeature {
  feature = input.required<Feature>();
  index = input.required<number>();
}
