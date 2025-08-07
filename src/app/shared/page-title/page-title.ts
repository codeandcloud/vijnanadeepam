import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'vd-page-title',
  imports: [NgOptimizedImage],
  templateUrl: './page-title.html',
  styleUrl: './page-title.scss',
})
export class PageTitle {
  pageTitle = input.required<string>();
  pageDescription = input<string>('');
  imageUrl = input<string>('');
}
