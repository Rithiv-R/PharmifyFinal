import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopOfferComponent } from './shop-offer.component';

describe('ShopOfferComponent', () => {
  let component: ShopOfferComponent;
  let fixture: ComponentFixture<ShopOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
