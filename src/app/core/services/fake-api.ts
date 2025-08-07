import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakeApiService {
  getRandomImageUrl = (width: number = 1920, height: number = 300): string => {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    return `https://picsum.photos/id/${randomId}/${width}/${height}`;
  };
}
