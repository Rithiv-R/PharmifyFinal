import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingHeaderComponent } from './shoping-header.component';

describe('ShopingHeaderComponent', () => {
  let component: ShopingHeaderComponent;
  let fixture: ComponentFixture<ShopingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
