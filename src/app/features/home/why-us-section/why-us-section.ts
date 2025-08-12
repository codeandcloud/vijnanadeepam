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
      icon: 'fa-calendar-alt',
      title: '25+ Years Experience',
      description:
        'Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet',
    },
    {
      icon: 'fa-tasks',
      title: 'Best Interior Design',
      description:
        'Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet',
    },
    {
      icon: 'fa-pencil-ruler',
      title: 'Innovative Architects',
      description:
        'Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet',
    },
    {
      icon: 'fa-user',
      title: 'Customer Satisfaction',
      description:
        'Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet',
    },
    {
      icon: 'fa-hand-holding-usd',
      title: 'Budget Friendly',
      description:
        'Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet',
    },
    {
      icon: 'fa-check',
      title: 'Sustainable Material',
      description:
        'Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet',
    },
  ];
}
