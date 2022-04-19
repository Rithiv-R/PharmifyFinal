import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferdetailSidebarComponent } from './offerdetail-sidebar.component';

describe('OfferdetailSidebarComponent', () => {
  let component: OfferdetailSidebarComponent;
  let fixture: ComponentFixture<OfferdetailSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferdetailSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferdetailSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
