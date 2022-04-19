import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferdetailCarditemComponent } from './offerdetail-carditem.component';

describe('OfferdetailCarditemComponent', () => {
  let component: OfferdetailCarditemComponent;
  let fixture: ComponentFixture<OfferdetailCarditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferdetailCarditemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferdetailCarditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
