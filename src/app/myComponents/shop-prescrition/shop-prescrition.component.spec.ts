import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPrescritionComponent } from './shop-prescrition.component';

describe('ShopPrescritionComponent', () => {
  let component: ShopPrescritionComponent;
  let fixture: ComponentFixture<ShopPrescritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopPrescritionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPrescritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
