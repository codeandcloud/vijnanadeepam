import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { BackToTop } from './shared/back-to-top/back-to-top';
import { MetaService } from './core/services/meta-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, BackToTop],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // Initialize meta handling once
  private meta = inject(MetaService);
  constructor() {
    this.meta.init();
  }
}
