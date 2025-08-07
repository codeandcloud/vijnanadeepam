import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuToggler } from './menu-toggler';

describe('MenuToggler', () => {
  let component: MenuToggler;
  let fixture: ComponentFixture<MenuToggler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuToggler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuToggler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
