import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostWallModel} from '../../models/post-wall.model';
import {BookFaceService} from '../../services/book-face.service';
import {Subscription} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {CreatePostComponent} from '../create-post/create-post.component';
import {PostCreateModel} from '../../models/post-create.model';
import {Router} from '@angular/router';
import {LikeModel} from '../../models/like.model';
import {BaseAuthenticationComponent} from '../base-authentication/base-authentication.component';
import {CookieService} from 'ngx-cookie-service';
import {LikedPostsModel} from '../../models/liked-posts.model';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent extends BaseAuthenticationComponent implements OnInit, OnDestroy {

  public posts: PostWallModel[];
  public likedPosts: LikedPostsModel[];
  public posts$: Subscription;
  public likedPosts$: Subscription;
  public newPost$: Subscription;
  public handleLike$: Subscription;

  constructor(private bookFaceService: BookFaceService, router: Router, cookieService: CookieService) {
    super(cookieService, router);
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }

  public fetchComponentData(): void {
    this.posts$ = this.bookFaceService.getWall(this.loggedInUseID).subscribe(posts => {
      this.posts = posts;
    });
    this.likedPosts$ = this.bookFaceService.getLikedPostByUser(this.loggedInUseID).subscribe( likedPosts => {
      this.likedPosts = likedPosts;
    });
  }

  public createNewPost(formGroup: FormGroup) {
    const post: PostCreateModel = new PostCreateModel(formGroup, this.loggedInUseID);
    this.newPost$ = this.bookFaceService.createNewPost(post).subscribe(result => {
      this.fetchComponentData();
    });
  }

  public handleLike(postId: number) {
    const like: LikeModel = new LikeModel(this.loggedInUseID, postId);
    this.handleLike$ = this.bookFaceService.handleLike(like).subscribe( result => {
      if (result === 1 ) {
        this.posts.find( post => post.id === postId ).likes++;
        const liked = new LikedPostsModel();
        liked.post_id = postId;
        this.likedPosts.push(liked);
      }
      else if (result === 2 ) {
        this.posts.find( post => post.id === postId ).likes--;
        this.likedPosts = this.likedPosts.filter( p => p.post_id !== postId);
      }
    });
  }

  public isLiked(postId: number): boolean {
    return Array.from<number>(this.likedPosts.map( p => p.post_id)).includes(postId);
  }

  ngOnDestroy(): void {
    if (this.posts$) {
      this.posts$.unsubscribe();
    }
    if (this.newPost$) {
      this.newPost$.unsubscribe();
    }
    if (this.handleLike$) {
      this.handleLike$.unsubscribe();
    }
    if (this.likedPosts$) {
      this.likedPosts$.unsubscribe();
    }
  }

}
