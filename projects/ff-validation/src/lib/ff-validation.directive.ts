import {AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[FFValidationInput]',
  exportAs: 'FFValidationInput'
})
export class FFValidationDirective implements AfterViewInit {
  value = '';
  dirty = false;
  touched = false;
  focused = false;

  @HostListener('focus')
  onFocus() {
    this.focused = true;
  }

  @HostListener('input')
  onInput() {
    this.value = this.el.nativeElement.value;
    if (!this.dirty) {
      this.dirty = true;
    }
  }

  @HostListener('blur')
  onBlur() {
    this.focused = false;
    if (!this.touched) {
      this.touched = true;
    }
  }

  constructor(public el: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.value = this.el.nativeElement.value;
  }
}
