import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostWallModel} from '../../models/post-wall.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  public post: PostWallModel;
  @Input()
  public isLiked: boolean;
  @Output()
  public emitLike: EventEmitter<number>;

  constructor(private router: Router) {
    this.emitLike = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  public likeClick(postId: number) {
    console.log('emit');
    this.emitLike.emit(postId);
  }

  public navigate(id: number) {
    this.router.navigate(['post/', id]);
  }

}
