import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferHeadComponent } from './offer-head.component';

describe('OfferHeadComponent', () => {
  let component: OfferHeadComponent;
  let fixture: ComponentFixture<OfferHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
