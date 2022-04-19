import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTestimonialsComponent } from './shop-testimonials.component';

describe('ShopTestimonialsComponent', () => {
  let component: ShopTestimonialsComponent;
  let fixture: ComponentFixture<ShopTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopTestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
