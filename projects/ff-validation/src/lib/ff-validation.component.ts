import {Component, ContentChild, Input, OnInit} from '@angular/core';
import {FFValidationDirective} from './ff-validation.directive';


@Component({
  selector: 'ff-validation',
  templateUrl: './ff-validation.component.html',
  styleUrls: ['./ff-validation.component.scss']
})
export class FFValidationComponent implements OnInit {
  @ContentChild(FFValidationDirective)
  input: FFValidationDirective;
  _errors: string[] = [];
  get errors() {
    return this._errors;
  }

  _messages = {};
  get messages() {
    return this._messages;
  }

  @Input() set errors(val) {
    this._errors = val;
  }

  @Input() set messages(val) {
    this._messages = val;
  }

  constructor() {
  }

  ngOnInit() {
  }

  focusInput() {
    this.input && this.input.el.nativeElement.focus();
  }

  isTouched() {
    return this.input && this.input.status === 'touched';
  }

}
