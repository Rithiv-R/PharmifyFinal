import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopinghomeComponent } from './shopinghome.component';

describe('ShopinghomeComponent', () => {
  let component: ShopinghomeComponent;
  let fixture: ComponentFixture<ShopinghomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopinghomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopinghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
