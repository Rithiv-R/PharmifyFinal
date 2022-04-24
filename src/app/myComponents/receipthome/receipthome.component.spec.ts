import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipthomeComponent } from './receipthome.component';

describe('ReceipthomeComponent', () => {
  let component: ReceipthomeComponent;
  let fixture: ComponentFixture<ReceipthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceipthomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
