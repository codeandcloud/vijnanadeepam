import { TestBed } from '@angular/core/testing';

import { HomepageImageService } from './homepage-image-service';

describe('HomepageImageService', () => {
  let service: HomepageImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepageImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
