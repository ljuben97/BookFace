import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookFaceService} from '../../services/book-face.service';
import {UserFriendsModel} from '../../models/user-friends.model';
import {Subscription} from 'rxjs';
import {UnfriendModel} from '../../models/unfriend.model';
import {BaseAuthenticationComponent} from '../base-authentication/base-authentication.component';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sent-friend-requests',
  templateUrl: './sent-friend-requests.component.html',
  styleUrls: ['./sent-friend-requests.component.css']
})
export class SentFriendRequestsComponent extends BaseAuthenticationComponent implements OnInit, OnDestroy {

  public sentRequests: UserFriendsModel[];
  public sentRequests$: Subscription;
  public cancelRequest$: Subscription;

  constructor(private bookFaceService: BookFaceService, cookieService: CookieService, router: Router) {
    super(cookieService, router);
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }

  public fetchComponentData(): void {
    this.sentRequests$ = this.bookFaceService.getSentFriendRequests(this.loggedInUseID).subscribe( requests => {
      this.sentRequests = requests;
    });
  }

  public cancelFriendRequest(userId: number): void {
    const friends: UnfriendModel = new UnfriendModel(this.loggedInUseID, userId);
    this.cancelRequest$ = this.bookFaceService.cancelFriendRequest(friends).subscribe( result => {
      console.log(result);
      this.fetchComponentData();
    });
  }

  public ngOnDestroy(): void {
    if (this.sentRequests$) {
      this.sentRequests$.unsubscribe();
    }
    if (this.cancelRequest$) {
      this.cancelRequest$.unsubscribe();
    }
  }
}
