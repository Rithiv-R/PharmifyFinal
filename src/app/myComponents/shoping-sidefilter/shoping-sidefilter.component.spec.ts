import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingSidefilterComponent } from './shoping-sidefilter.component';

describe('ShopingSidefilterComponent', () => {
  let component: ShopingSidefilterComponent;
  let fixture: ComponentFixture<ShopingSidefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingSidefilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingSidefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
