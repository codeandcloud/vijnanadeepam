import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeOfferSection } from './what-we-offer-section';

describe('WhatWeOfferSection', () => {
  let component: WhatWeOfferSection;
  let fixture: ComponentFixture<WhatWeOfferSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWeOfferSection],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatWeOfferSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
