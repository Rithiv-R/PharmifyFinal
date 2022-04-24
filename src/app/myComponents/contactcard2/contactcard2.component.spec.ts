import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactcard2Component } from './contactcard2.component';

describe('Contactcard2Component', () => {
  let component: Contactcard2Component;
  let fixture: ComponentFixture<Contactcard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contactcard2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Contactcard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
