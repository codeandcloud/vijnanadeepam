import { TestBed } from '@angular/core/testing';

import { PreloadService } from './preload';

describe('PreloadService', () => {
  let service: PreloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
