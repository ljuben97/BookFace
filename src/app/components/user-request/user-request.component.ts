import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserFriendsModel} from '../../models/user-friends.model';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.css']
})
export class UserRequestComponent implements OnInit {

  @Input()
  public user: UserFriendsModel;
  @Input()
  public status: number;

  @Output()
  public emitUnfriend: EventEmitter<number>;
  @Output()
  public emitCancelFriendRequest: EventEmitter<number>;

  @Output()
  public emitDeclineRequest: EventEmitter<number>;
  @Output()
  public emitAcceptRequest: EventEmitter<number>;

  constructor() {
    this.emitUnfriend = new EventEmitter<number>();
    this.emitCancelFriendRequest = new EventEmitter<number>();
    this.emitAcceptRequest = new EventEmitter<number>();
    this.emitDeclineRequest = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  public unfriend(userId): void {
    this.emitUnfriend.emit(userId);
  }

  public cancelFriendRequest(userId: number): void {
    this.emitCancelFriendRequest.emit(userId);
  }

  public acceptRequest(userId: number): void {
    this.emitAcceptRequest.emit(userId);
  }

  public declineRequest(userId: number): void {
    this.emitDeclineRequest.emit(userId);
  }

}
