import { Component, inject, OnInit } from '@angular/core';

import { MetaService } from '../../core/services/meta-service';

import { HomeCarousel } from '../../shared/home-carousel/home-carousel';
import { PageTitle } from '../../shared/page-title/page-title';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'vd-home',
  imports: [HomeCarousel, PageTitle],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  protected pageTitle = 'Home';

  private metaService = inject(MetaService);
  protected storageUrl = environment.storageUrl;

  ngOnInit(): void {
    this.metaService.init();
  }
}
