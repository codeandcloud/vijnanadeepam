// src/app/services/meta.service.ts
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private started = false;

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router
  ) {}

  /** Initialize once at app bootstrap */
  init() {
    if (this.started) return;
    this.started = true;
    // Apply for initial snapshot
    this.applyFromSnapshot(this.router.routerState.snapshot.root);

    // Listen for subsequent navigations
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.applyFromSnapshot(this.router.routerState.snapshot.root);
      });
  }

  private applyFromSnapshot(root: ActivatedRouteSnapshot) {
    const deepest = this.getDeepestChild(root);
    const metaData = deepest.data?.['meta'];

    const defaultDescription =
      'Vijnanadeepam is a new media collective that brings reading, knowledge, and entertainment within reach of the visually impaired. It is an online platform that comprehensively supports visually challenged individuals in Kerala across all domains. Our motto is, your voice, our knowledge.';
    const defaultKeyWords =
      'vijnanadeepam, audio, library, blind, people, books, knowledge, volunteers';
    const defaultOgImage = '/og-images/home.svg';

    if (!metaData) return;

    const description =
      metaData.description || metaData.ogDescription || defaultDescription;
    const keywords = metaData.keywords || defaultKeyWords;
    const ogTitle = this.title.getTitle() || 'Vijnanadeepam';
    const ogDescription =
      metaData.ogDescription || metaData.description || defaultDescription;
    const ogImage = metaData.ogImage || defaultOgImage;

    // Update / create tags (updateTag creates if missing)
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    if (ogTitle)
      this.meta.updateTag({ property: 'og:title', content: ogTitle });
    this.meta.updateTag({ property: 'og:description', content: ogDescription });
    this.meta.updateTag({ property: 'og:image', content: ogImage });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }

  private getDeepestChild(
    route: ActivatedRouteSnapshot
  ): ActivatedRouteSnapshot {
    let childRoute = route;
    while (childRoute.firstChild) {
      childRoute = childRoute.firstChild;
    }
    return childRoute;
  }
}
