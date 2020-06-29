import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WallComponent} from './components/wall/wall.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {FriendsComponent} from './components/friends/friends.component';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';

export const routes: Routes = [
  { path: '', component: WallComponent},
  { path: 'post/:id', component: PostDetailsComponent},
  { path: 'friends', component: FriendsComponent},
  { path: 'auth/login', component: LoginComponent},
  { path: 'auth/logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
