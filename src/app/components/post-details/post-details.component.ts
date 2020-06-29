import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookFaceService} from '../../services/book-face.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {PostDetailsModel} from '../../models/post-details.model';
import {FormControl, FormGroup} from '@angular/forms';
import {CommentCreateModel} from '../../models/comment-create.model';
import {BaseAuthenticationComponent} from '../base-authentication/base-authentication.component';
import {CookieService} from 'ngx-cookie-service';
import {UserLikesModel} from '../../models/user-likes.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent extends BaseAuthenticationComponent implements OnInit, OnDestroy {

  public post: PostDetailsModel;
  public post$: Subscription;
  public newComment$: Subscription;

  constructor(private bookFaceService: BookFaceService, private route: ActivatedRoute, cookieService: CookieService, router: Router) {
    super(cookieService, router);
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }

  public fetchComponentData(): void {
    const postId = +this.route.snapshot.paramMap.get('id');
    this.post$ = this.bookFaceService.getPostDetails(postId).subscribe( post => {
      this.post = post;
      if (!this.post.likes) {
        this.post.likes = new Array<UserLikesModel>();
      }
      console.log(this.post);
    });
  }

  public createNewComment(formGroup: FormGroup) {
    const comment: CommentCreateModel = new CommentCreateModel(formGroup, this.loggedInUseID);
    this.newComment$ = this.bookFaceService.createNewComment(comment).subscribe( p => {
      this.fetchComponentData();
    });
  }

  public ngOnDestroy(): void {
    if (this.post$) {
      this.post$.unsubscribe();
    }
    if (this.newComment$) {
      this.newComment$.unsubscribe();
    }
  }

}
