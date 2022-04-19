import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHome2Component } from './shop-home2.component';

describe('ShopHome2Component', () => {
  let component: ShopHome2Component;
  let fixture: ComponentFixture<ShopHome2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopHome2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopHome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
