import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCardlistComponent } from './offer-cardlist.component';

describe('OfferCardlistComponent', () => {
  let component: OfferCardlistComponent;
  let fixture: ComponentFixture<OfferCardlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferCardlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferCardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
