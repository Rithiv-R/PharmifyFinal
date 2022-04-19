import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferhomeComponent } from './offerhome.component';

describe('OfferhomeComponent', () => {
  let component: OfferhomeComponent;
  let fixture: ComponentFixture<OfferhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
