import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferFaqComponent } from './offer-faq.component';

describe('OfferFaqComponent', () => {
  let component: OfferFaqComponent;
  let fixture: ComponentFixture<OfferFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
