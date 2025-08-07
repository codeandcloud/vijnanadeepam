// src/app/services/meta.service.ts
import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(
    private metaService: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  init() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        // Set the page title
        const title: string = data['title'];

        // Set meta tags from route data
        if (data['meta']) {
          const [defaultDescription, defaultKeyWords, defaultOgImage] = [
            'Vijnanadeepam is a new media collective that brings reading, knowledge, and entertainment within reach of the visually impaired. It is an online platform that comprehensively supports visually challenged individuals in Kerala across all domains. Our motto is, your voice, our knowledge.',
            'vijnanadeepam, audio, library, blind, people, books, knowledge, volunteers',
            '/public/logos/vijnanadeepam-banner-980x280.jpg',
          ];

          const meta = data['meta'];
          this.metaService.updateTag({
            name: 'description',
            content: meta.description || defaultDescription,
          });
          this.metaService.updateTag({
            name: 'keywords',
            content: meta.keywords || defaultKeyWords,
          });
          this.metaService.updateTag({
            property: 'og:title',
            content: meta.ogTitle || title,
          });
          this.metaService.updateTag({
            property: 'og:description',
            content:
              meta.ogDescription || meta.description || defaultDescription,
          });
          this.metaService.updateTag({
            property: 'og:image',
            content: meta.ogImage || defaultOgImage,
          });
          this.metaService.updateTag({
            name: 'robots',
            content: 'index, follow',
          });
        }
      });
  }
}
