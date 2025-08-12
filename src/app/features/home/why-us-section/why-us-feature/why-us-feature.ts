import { Component, input } from '@angular/core';
import { Feature } from '../../../../interfaces/feature';

@Component({
  selector: 'vd-why-us-feature',
  standalone: true,
  imports: [],
  templateUrl: './why-us-feature.html',
  styleUrl: './why-us-feature.scss',
})
export class WhyUsFeature {
  feature = input.required<Feature>();
  index = input.required<number>();
}
