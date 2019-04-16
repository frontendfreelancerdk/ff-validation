import {NgModule} from '@angular/core';
import {FFValidationComponent} from './ff-validation.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FFValidationDirective} from './ff-validation.directive';

@NgModule({
  declarations: [FFValidationComponent, FFValidationDirective],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [FFValidationComponent, FFValidationDirective]
})
export class FFValidationModule {
  constructor() {
  }
}
