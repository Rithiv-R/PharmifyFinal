import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signin1Component } from './signin1.component';

describe('Signin1Component', () => {
  let component: Signin1Component;
  let fixture: ComponentFixture<Signin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Signin1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Signin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
