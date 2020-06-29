import {FormGroup} from '@angular/forms';

export class LoginModel {
  email: string;
  password: string;

  constructor(formGroup: FormGroup) {
    this.email = formGroup.controls.email.value;
    this.password = formGroup.controls.password.value;
  }
}
