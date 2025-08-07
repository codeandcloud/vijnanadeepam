import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomTitleStrategy extends TitleStrategy {
  private readonly appTitle = environment.app.title;

  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    let pageTitle = this.buildTitle(snapshot);
    pageTitle = pageTitle ? `${pageTitle} | ${this.appTitle}` : this.appTitle;
    this.title.setTitle(pageTitle);
  }

  override buildTitle(snapshot: RouterStateSnapshot): string | undefined {
    let route = snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.title ?? '';
  }
}
