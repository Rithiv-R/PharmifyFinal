import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingItemgridComponent } from './shoping-itemgrid.component';

describe('ShopingItemgridComponent', () => {
  let component: ShopingItemgridComponent;
  let fixture: ComponentFixture<ShopingItemgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingItemgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingItemgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
