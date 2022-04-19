import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCarditemComponent } from './shoping-carditem.component';

describe('ShopingCarditemComponent', () => {
  let component: ShopingCarditemComponent;
  let fixture: ComponentFixture<ShopingCarditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingCarditemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingCarditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
