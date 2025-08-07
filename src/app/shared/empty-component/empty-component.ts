import { Component, input } from '@angular/core';

@Component({
  selector: 'vd-empty',
  imports: [],
  templateUrl: './empty-component.html',
  styleUrl: './empty-component.scss',
})
export class EmptyComponent {
  emptyMessage = input<string>('An error occurred while loading the content');
}
