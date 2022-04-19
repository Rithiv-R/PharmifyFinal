import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferdetailInfoComponent } from './offerdetail-info.component';

describe('OfferdetailInfoComponent', () => {
  let component: OfferdetailInfoComponent;
  let fixture: ComponentFixture<OfferdetailInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferdetailInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferdetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
