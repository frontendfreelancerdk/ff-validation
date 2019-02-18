import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FFValidationModule } from 'ff-validation';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FFValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
