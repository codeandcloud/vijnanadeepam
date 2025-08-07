import { TestBed } from '@angular/core/testing';

import { SiteMenu } from './site-menu';

describe('SiteMenu', () => {
  let service: SiteMenu;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteMenu);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
