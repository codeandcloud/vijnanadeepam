import { Component, input } from '@angular/core';
import { create } from 'domain';
import { createNumberArray } from '../../core/utils/array-utils';

export type PlaceHolderType = '' | 'placeholder-glow' | 'placeholder-wave';

@Component({
  selector: 'vd-placeholder',
  imports: [],
  templateUrl: './placeholder-component.html',
  styleUrl: './placeholder-component.scss',
})
export class PlaceholderComponent {
  widthPx = input<number>(320);
  heightPx = input<number>(180);
  containerClass = input<PlaceHolderType>('placeholder-wave');
  count = input<number>(6);
  gap = input<number>(4);

  protected getRange(): number[] {
    return createNumberArray(1, this.count());
  }
}
