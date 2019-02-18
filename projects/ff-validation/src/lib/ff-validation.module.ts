import { NgModule } from '@angular/core';
import { FFValidationComponent } from './ff-validation.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FFValidationComponent],
  imports     : [
    CommonModule,
    FormsModule
  ],
  exports     : [FFValidationComponent]
})
export class FFValidationModule {
}