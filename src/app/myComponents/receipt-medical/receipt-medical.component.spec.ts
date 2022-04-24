import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptMedicalComponent } from './receipt-medical.component';

describe('ReceiptMedicalComponent', () => {
  let component: ReceiptMedicalComponent;
  let fixture: ComponentFixture<ReceiptMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptMedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
