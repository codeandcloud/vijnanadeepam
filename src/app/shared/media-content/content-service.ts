import { Injectable, resource } from '@angular/core';

import { ApiResponse } from '../../interfaces/api-response.model';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export abstract class ContentService<T, U> {
  readonly contentResource = resource({
    loader: async ({ abortSignal }) => {
      try {
        const url = environment.apiBaseUrl + this.getEndpoint();
        const response = await fetch(url, {
          signal: abortSignal,
        });
        if (!response.ok) throw new Error(this.getErrorMessage());
        const result = (await response.json()) as ApiResponse<T>;
        return this.adaptResult(result);
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  });

  // Abstract methods to be implemented by subclasses
  protected abstract getEndpoint(): string;
  protected abstract getErrorMessage(): string;
  protected abstract adaptResult(data: ApiResponse<T>): U;

  get content() {
    return this.contentResource.value;
  }

  get status() {
    return this.contentResource.status;
  }

  get error() {
    return this.contentResource.error;
  }

  reload() {
    this.contentResource.reload();
  }
}
