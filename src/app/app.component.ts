import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ff-validation-app';

  hardcodedErrors = ['required', 'email'];

  @ViewChild('test') input;

  get myErrors() {
    const errors = this.myForm.get('userEmail').errors;
    return errors ? Object.keys(errors) : [];
  }

  get myEmailValidationMessages(){
    return {'required': 'Field is required!',
      'pattern': this.input.value + ' is not a real e-mail'}
  }

  myMessages = {
    'email': 'Field should contain e-mail',
    'required': 'Field is required!',
    'phone': 'Field should contain phone',
    'pattern': 'Field does not match to pattern'
  };
  myForm: FormGroup = new FormGroup({
    'userEmail': new FormControl('1', [
      Validators.required,
      Validators.pattern('[a-zA-Z_0-9]+@[a-zA-Z_0-9]{2,}[\.][a-zA-Z]{2,4}')
    ]),
  });

  constructor() {
  }

  ngAfterViewInit(): void {
    console.log(this.input);
  }

}
