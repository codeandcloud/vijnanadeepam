import { Component } from '@angular/core';
import { WhyUsFeature } from './why-us-feature/why-us-feature';
import { Feature } from '../../../interfaces/feature';

@Component({
  selector: 'vd-why-us-section',
  standalone: true,
  imports: [WhyUsFeature],
  templateUrl: './why-us-section.html',
  styleUrl: './why-us-section.scss',
})
export class WhyUsSection {
  protected features: Feature[] = [
    {
      icon: 'calendar-week',
      title: '25+ Years Experience',
      description:
        'Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet',
    },
    {
      icon: 'list-check',
      title: 'Best Interior Design',
      description:
        'Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet',
    },
    {
      icon: 'pen-ruler',
      title: 'Innovative Architects',
      description:
        'Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet',
    },
    {
      icon: 'user',
      title: 'Customer Satisfaction',
      description:
        'Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet',
    },
    {
      icon: 'piggy-bank',
      title: 'Budget Friendly',
      description:
        'Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet',
    },
    {
      icon: 'certificate',
      title: 'Sustainable Material',
      description:
        'Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet',
    },
  ];
}
