import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHome1Component } from './shop-home1.component';

describe('ShopHome1Component', () => {
  let component: ShopHome1Component;
  let fixture: ComponentFixture<ShopHome1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopHome1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopHome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
