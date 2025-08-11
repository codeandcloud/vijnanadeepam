import { Component } from '@angular/core';

@Component({
  selector: 'vd-back-to-top',
  imports: [],
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.scss',
})
export class BackToTop {
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
    });
  }
}
