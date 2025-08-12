import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialFeature } from './testimonial-feature';

describe('TestimonialFeature', () => {
  let component: TestimonialFeature;
  let fixture: ComponentFixture<TestimonialFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
