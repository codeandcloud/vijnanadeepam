import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAndCirculars } from './orders-and-circulars';

describe('OrdersAndCirculars', () => {
  let component: OrdersAndCirculars;
  let fixture: ComponentFixture<OrdersAndCirculars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersAndCirculars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersAndCirculars);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
