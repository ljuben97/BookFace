import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  public formGroup: FormGroup;
  @Output()
  public emitNewPost: EventEmitter<FormGroup>;

  constructor(private builder: FormBuilder) {
    this.emitNewPost = new EventEmitter<FormGroup>();
  }

  public ngOnInit(): void {
    this.formGroup = this.builder.group({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required)
    });
  }

  public createPost(): void {
    this.emitNewPost.emit(this.formGroup);
    this.formGroup.controls.title.setValue('');
    this.formGroup.controls.body.setValue('');
  }

}
