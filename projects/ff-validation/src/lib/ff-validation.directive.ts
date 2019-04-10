import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[FFValidationInput]'
})
export class FFValidationDirective {

  constructor(public el: ElementRef) {
    console.log(el);
  }

  status = 'untouched';
  focus = false;

  @HostListener('focus')
  onFocus() {
    this.focus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.focus = false;
    if (this.status === 'untouched') {
      this.status = 'touched';
    }
  }

}
