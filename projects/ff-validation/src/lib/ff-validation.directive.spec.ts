import {Component, ViewChild} from '@angular/core';
import {FFValidationDirective} from './ff-validation.directive';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

@Component({
  selector: 'container',
  template: `<input FFValidationInput #input="FFValidationInput">`,
})
export class Container {
  @ViewChild('input') input;

  test() {
    console.log('input.value', this.input.value);
  }
}

describe('Directive: FFValidationDirective', () => {
  let fixture;
  let container;
  let directiveEl;
  let directiveInstance;

  //setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Container, FFValidationDirective]
    });
    fixture = TestBed.createComponent(Container);
    directiveEl = fixture.debugElement.query(By.directive(FFValidationDirective));
    directiveInstance = directiveEl.injector.get(FFValidationDirective);
    container = fixture.componentInstance;
  });

  //specs
  it('should create', () => {
    expect(directiveEl).not.toBeNull();
  });
  it('should have default values', () => {
    expect(directiveInstance.dirty).toBe(false);
    expect(directiveInstance.touched).toBe(false);
    expect(directiveInstance.focused).toBe(false);
    expect(directiveInstance.value).toBe('');
  });
  it('should respond to changes in input', () => {
    fixture.whenStable().then(() => {
      const el = directiveEl.nativeElement;

      expect(el.value).toBe('');

      el.value = 'someValue';
      el.dispatchEvent(new Event('input'));

      expect(directiveInstance.value).toBe('someValue');
      expect(directiveInstance.dirty).toBe(true);
    });
  });
  it('should be touched after focus and blur', () => {
    fixture.whenStable().then(() => {
      const el = directiveEl.nativeElement;
      el.dispatchEvent(new Event('focus'));
      expect(directiveInstance.focused).toBe(true);
      el.dispatchEvent(new Event('blur'));

      expect(directiveInstance.touched).toBe(true);
    });
  });

  it('should have a value equals to input value after view init', () => {
    fixture.whenStable().then(() => {
      const el = directiveEl.nativeElement;
      el.value = 'test';
      expect(directiveInstance.value).toBe('');
      directiveInstance.ngAfterViewInit();
      expect(directiveInstance.value).toBe('test');
    });
  });
});
