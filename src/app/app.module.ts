
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Feature Modules */

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/post/post.component';
import { LikedUserComponent } from './components/liked-user/liked-user.component';
import { CommentComponent } from './components/comment/comment.component';
import {BookFaceService} from './services/book-face.service';
import { WallComponent } from './components/wall/wall.component';
import {HttpClientModule} from '@angular/common/http';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { FriendsComponent } from './components/friends/friends.component';
import { FriendsCurrentComponent } from './components/friends-current/friends-current.component';
import { SentFriendRequestsComponent } from './components/sent-friend-requests/sent-friend-requests.component';
import { ReceivedFriendRequestsComponent } from './components/received-friend-requests/received-friend-requests.component';
import { UserRequestComponent } from './components/user-request/user-request.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import {CookieService} from 'ngx-cookie-service';
import { LoginComponent } from './components/login/login.component';
import {AuthService} from './services/auth.service';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    PostComponent,
    LikedUserComponent,
    CommentComponent,
    WallComponent,
    PostDetailsComponent,
    FriendsComponent,
    FriendsCurrentComponent,
    SentFriendRequestsComponent,
    ReceivedFriendRequestsComponent,
    UserRequestComponent,
    CreatePostComponent,
    CreateCommentComponent,
    LoginComponent,
    LogoutComponent
  ],
  providers: [
    BookFaceService,
    CookieService,
    AuthService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
