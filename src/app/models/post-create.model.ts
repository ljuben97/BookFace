import {FormGroup} from '@angular/forms';

export class PostCreateModel {
  title: string;
  body: string;
  // tslint:disable-next-line:variable-name
  user_id: number;

  constructor(formGroup: FormGroup, userId: number) {
    this.title = formGroup.controls.title.value;
    this.body = formGroup.controls.body.value;
    this.user_id = userId;
  }
}
