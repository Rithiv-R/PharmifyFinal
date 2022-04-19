import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferdetailhomeComponent } from './offerdetailhome.component';

describe('OfferdetailhomeComponent', () => {
  let component: OfferdetailhomeComponent;
  let fixture: ComponentFixture<OfferdetailhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferdetailhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferdetailhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
