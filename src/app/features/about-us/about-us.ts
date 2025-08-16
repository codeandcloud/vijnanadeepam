import { Component, inject, OnInit } from '@angular/core';
import { FakeApiService } from '../../core/services/fake-api';
import { PageTitle } from '../../shared/page-title/page-title';

@Component({
  selector: 'vd-about-us',
  imports: [PageTitle],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs implements OnInit {
  protected pageTitle = 'About Us';
  private faker = inject(FakeApiService);
  public imageUrl!: string;

  ngOnInit(): void {
    this.getAboutUsImageUrl();
  }

  getAboutUsImageUrl = () => {
    this.imageUrl = this.faker.getRandomImageUrl();
  };
}
