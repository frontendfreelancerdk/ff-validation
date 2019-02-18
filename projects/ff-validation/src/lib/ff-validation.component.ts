import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector   : 'ff-validation',
  templateUrl: './ff-validation.component.html',
  styleUrls  : ['./ff-validation.component.scss']
})
export class FFValidationComponent implements OnInit {
  @Input() placeholder : string = '';
  @Input() ariaLabel : string = '';
  @Input() id : string = '';
  @Input() validators : string[] = [];

  _value : string = '';
  _id : string;

  get value() : string {
    return this._value;
  }

  set value(val : string) {
    this._value = val;
  }

  constructor() {
    this._id = this.idGenerator();
  }

  ngOnInit() {
  }

  private idGenerator() {
    const s4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return ('id' + s4() + s4());
  }

}
