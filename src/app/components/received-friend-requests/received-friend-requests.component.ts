import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserFriendsModel} from '../../models/user-friends.model';
import {Subscription} from 'rxjs';
import {BookFaceService} from '../../services/book-face.service';
import {HandleRequestModel} from '../../models/handle-request.model';
import {BaseAuthenticationComponent} from '../base-authentication/base-authentication.component';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-received-friend-requests',
  templateUrl: './received-friend-requests.component.html',
  styleUrls: ['./received-friend-requests.component.css']
})
export class ReceivedFriendRequestsComponent extends BaseAuthenticationComponent implements OnInit, OnDestroy {

  public receivedRequests: UserFriendsModel[];
  public receivedRequests$: Subscription;
  public handleRequest$: Subscription;

  constructor(private bookFaceService: BookFaceService, cookieService: CookieService, router: Router) {
    super(cookieService, router);
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }

  public fetchComponentData(): void {
    this.receivedRequests$ = this.bookFaceService.getReceivedFriendRequests(this.loggedInUseID).subscribe( requests => {
      this.receivedRequests = requests;
    });
  }

  public acceptRequest(userId: number): void {
    this.handleFriendRequest(userId, true);
  }

  public declineRequest(userId: number): void {
    this.handleFriendRequest(userId, false);
  }

  private handleFriendRequest(userId: number, accepted: boolean): void {
    const handleRequestModel: HandleRequestModel = new HandleRequestModel(userId, this.loggedInUseID, accepted);
    this.handleRequest$ = this.bookFaceService.handleFriendRequest(handleRequestModel).subscribe( result => {
      console.log(result);
      this.fetchComponentData();
    });
  }

  public ngOnDestroy(): void {
    if (this.receivedRequests$) {
      this.receivedRequests$.unsubscribe();
    }
    if (this.handleRequest$) {
      this.handleRequest$.unsubscribe();
    }
  }
}
