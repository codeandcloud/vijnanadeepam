import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUsFeature } from './why-us-feature';

describe('WhyUsFeature', () => {
  let component: WhyUsFeature;
  let fixture: ComponentFixture<WhyUsFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyUsFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyUsFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
