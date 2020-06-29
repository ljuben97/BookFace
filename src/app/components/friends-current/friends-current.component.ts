import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserFriendsModel} from '../../models/user-friends.model';
import {Subscription} from 'rxjs';
import {BookFaceService} from '../../services/book-face.service';
import {UnfriendModel} from '../../models/unfriend.model';
import {BaseAuthenticationComponent} from '../base-authentication/base-authentication.component';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-friends-current',
  templateUrl: './friends-current.component.html',
  styleUrls: ['./friends-current.component.css']
})
export class FriendsCurrentComponent extends BaseAuthenticationComponent implements OnInit, OnDestroy {

  public currentFriends: UserFriendsModel[];
  public currentFriends$: Subscription;
  public unfriend$: Subscription;

  constructor(private bookFaceService: BookFaceService, cookieService: CookieService, router: Router) {
    super(cookieService, router);
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }

  public fetchComponentData(): void {
    this.currentFriends$ = this.bookFaceService.getCurrentFriends(this.loggedInUseID).subscribe( friends => {
      this.currentFriends = friends;
    });
  }

  public unfriend(userId): void {
    const friends: UnfriendModel = new UnfriendModel(userId, this.loggedInUseID);
    this.unfriend$ = this.bookFaceService.unfriend(friends).subscribe( result => {
      this.fetchComponentData();
    });
  }

  public ngOnDestroy(): void {
    if (this.currentFriends$) {
      this.currentFriends$.unsubscribe();
    }
    if (this.unfriend$) {
      this.unfriend$.unsubscribe();
    }
  }
}
