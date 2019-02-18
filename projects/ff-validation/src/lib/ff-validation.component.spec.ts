import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FFValidationComponent } from './ff-validation.component';
import { FormsModule } from '@angular/forms';

describe('FFValidationComponent', () => {
  let component : FFValidationComponent;
  let fixture : ComponentFixture<FFValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FFValidationComponent],
      imports     : [FormsModule]
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
