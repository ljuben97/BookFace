import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostWallModel} from '../models/post-wall.model';
import {PostDetailsModel} from '../models/post-details.model';
import {UserFriendsModel} from '../models/user-friends.model';
import {PostCreateModel} from '../models/post-create.model';
import {CommentCreateModel} from '../models/comment-create.model';
import {LikeModel} from '../models/like.model';
import {UnfriendModel} from '../models/unfriend.model';
import {HandleRequestModel} from '../models/handle-request.model';
import {LikedPostsModel} from '../models/liked-posts.model';

@Injectable()
export class BookFaceService {
  constructor(private http: HttpClient) {
  }

  public getWall(userId: number): Observable<PostWallModel[]> {
    return this.http.get<PostWallModel[]>(`http://localhost:3000/wall/${userId}`);
  }

  public getPostDetails(postId: number): Observable<PostDetailsModel> {
    return this.http.get<PostDetailsModel>(`http://localhost:3000/post/${postId}`);
  }

  public getLikedPostByUser(userId: number): Observable<LikedPostsModel[]> {
    return this.http.get<LikedPostsModel[]>(`http://localhost:3000/post/liked/${userId}`);
  }

  public getCurrentFriends(userId: number): Observable<UserFriendsModel[]> {
    return this.http.get<UserFriendsModel[]>(`http://localhost:3000/friends/current/${userId}`);
  }

  public getSentFriendRequests(userId: number): Observable<UserFriendsModel[]> {
    return this.http.get<UserFriendsModel[]>(`http://localhost:3000/friends/sent/${userId}`);
  }

  public getReceivedFriendRequests(userId: number): Observable<UserFriendsModel[]> {
    return this.http.get<UserFriendsModel[]>(`http://localhost:3000/friends/received/${userId}`);
  }

  public createNewPost(post: PostCreateModel): Observable<number> {
    return this.http.post<number>('http://localhost:3000/post/new', post);
  }

  public createNewComment(comment: CommentCreateModel): Observable<number> {
    return this.http.post<number>('http://localhost:3000/comment/new', comment);
  }

  public handleLike(like: LikeModel): Observable<number> {
    return this.http.post<number>('http://localhost:3000/handle/post-like', like);
  }

  public unfriend(friends: UnfriendModel): Observable<number> {
    return this.http.post<number>('http://localhost:3000/friends/unfriend', friends);
  }

  public cancelFriendRequest(friends: UnfriendModel): Observable<number> {
    return this.http.post<number>('http://localhost:3000/friends/cancel-request', friends);
  }

  public handleFriendRequest(handleRequestModel: HandleRequestModel): Observable<number> {
    return this.http.post<number>('http://localhost:3000/friends/handle-request', handleRequestModel);
  }
}
