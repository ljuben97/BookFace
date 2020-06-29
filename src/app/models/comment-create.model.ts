import {FormGroup} from '@angular/forms';

export class CommentCreateModel {
  text: string;
  // tslint:disable-next-line:variable-name
  user_id: number;
  // tslint:disable-next-line:variable-name
  post_id: number;

  constructor(formGroup: FormGroup, userId: number) {
    this.text = formGroup.controls.text.value;
    this.post_id = formGroup.controls.postId.value;
    this.user_id = userId;
  }
}
