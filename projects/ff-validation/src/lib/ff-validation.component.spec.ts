import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FFValidationComponent } from './ff-validation.component';

describe('FFValidationComponent', () => {
  let component: FFValidationComponent;
  let fixture: ComponentFixture<FFValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FFValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
