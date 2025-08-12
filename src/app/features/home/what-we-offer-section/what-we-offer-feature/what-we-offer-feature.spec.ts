import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeOfferFeature } from './what-we-offer-feature';

describe('WhatWeOfferFeature', () => {
  let component: WhatWeOfferFeature;
  let fixture: ComponentFixture<WhatWeOfferFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWeOfferFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWeOfferFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
