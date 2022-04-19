import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFaqComponent } from './shop-faq.component';

describe('ShopFaqComponent', () => {
  let component: ShopFaqComponent;
  let fixture: ComponentFixture<ShopFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
