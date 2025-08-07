import { Component, inject, OnInit } from '@angular/core';
import { FakeApiService } from '../../core/services/fake-api';
import { PageTitle } from '../../shared/page-title/page-title';

import { MetaService } from '../../core/services/meta-service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'vd-about-us',
  imports: [PageTitle],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs implements OnInit {
  protected pageTitle = 'About Us';
  private metaService = inject(MetaService);
  private faker = inject(FakeApiService);
  public imageUrl!: string;

  ngOnInit(): void {
    this.metaService.init();
    this.getAboutUsImageUrl();
  }

  getAboutUsImageUrl = () => {
    this.imageUrl = this.faker.getRandomImageUrl();
  };
}
