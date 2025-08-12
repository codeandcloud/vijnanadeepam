import { Injectable, resource } from '@angular/core';

import { ApiResponse } from '../../interfaces/api-response';
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
        // During SSR/prerender we must not throw, return a safe fallback instead.
        return this.getFallback();
      }
    },
  });

  // Abstract methods to be implemented by subclasses
  protected abstract getEndpoint(): string;
  protected abstract getErrorMessage(): string;
  protected abstract adaptResult(data: ApiResponse<T>): U;

  // Default fallback to avoid SSR/prerender failures on network errors.
  // Override in subclasses if a non-null default is preferred.
  protected getFallback(): U {
    return null as unknown as U;
  }

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
