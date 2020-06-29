import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  public formGroup: FormGroup;
  @Output()
  public emitNewComment: EventEmitter<FormGroup>;
  @Input()
  public postId: number;

  constructor(private builder: FormBuilder) {
    this.emitNewComment = new EventEmitter<FormGroup>();
  }

  public ngOnInit(): void {
    this.formGroup = this.builder.group({
      text: new FormControl('', Validators.required),
      postId: new FormControl(this.postId)
    });
  }

  public createComment(): void {
    this.emitNewComment.emit(this.formGroup);
    this.formGroup.controls.text.setValue('');
  }

}
