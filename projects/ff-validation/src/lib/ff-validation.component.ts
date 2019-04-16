import {Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {FFValidationDirective} from './ff-validation.directive';


@Component({
  selector: 'ff-validation',
  templateUrl: './ff-validation.component.html',
  styleUrls: ['./ff-validation.component.scss']
})
export class FFValidationComponent {
  @ContentChild(FFValidationDirective)
  input: FFValidationDirective;
  private _errors: string[] = [];
  private _messages = {};
  private _disabled = false;

  get errors() {
    return this._errors;
  }

  get messages() {
    return this._messages;
  }

  get disabled() {
    return this._disabled;
  }

  @Input('ff-validation-errors') set errors(val) {
    this._errors = val;
  }

  @Input('ff-validation-messages') set messages(val) {
    this._messages = val;
  }

  @Input('ff-validation-disabled') set disabled(val: boolean) {
    this._disabled = val;
  }

  @Input('ff-icon-valid') iconValid: TemplateRef<any>;
  @Input('ff-icon-invalid') iconInvalid: TemplateRef<any>;

  focusInput() {
    this.input && this.input.el.nativeElement.focus();
  }

  isTouched() {
    return this.input && this.input.touched;
  }

  isDirty() {
    return this.input && this.input.dirty;
  }
}
