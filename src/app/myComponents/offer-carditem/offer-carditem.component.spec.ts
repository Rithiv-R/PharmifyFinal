import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCarditemComponent } from './offer-carditem.component';

describe('OfferCarditemComponent', () => {
  let component: OfferCarditemComponent;
  let fixture: ComponentFixture<OfferCarditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferCarditemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferCarditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
