import { Component, input } from '@angular/core';

@Component({
  selector: 'vd-error',
  imports: [],
  templateUrl: './error-component.html',
  styleUrl: './error-component.scss',
})
export class ErrorComponent {
  errorMessage = input<string>('An error occurred while loading the content');
}
