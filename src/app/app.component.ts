import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ff-validation-app';
  myErrors = ['email'];
  myMessages = {
    'email': 'email lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, ut!',
    'required': 'required',
    'phone': 'phone'
  };
  myForm: FormGroup = new FormGroup({

    'userName': new FormControl('Tom', Validators.required),
    'userEmail': new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')
    ]),
  });

  constructor() {
    setInterval(() => {
      this.myErrors = ['email'];
      setTimeout(() => {
        this.myErrors = [];
      }, 2000);
    }, 4000);
  }
}
