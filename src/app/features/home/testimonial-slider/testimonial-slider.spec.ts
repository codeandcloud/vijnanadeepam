import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialSlider } from './testimonial-slider';

describe('TestimonialSlider', () => {
  let component: TestimonialSlider;
  let fixture: ComponentFixture<TestimonialSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
