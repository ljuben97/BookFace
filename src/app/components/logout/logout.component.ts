import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.cookieService.delete('bookFaceUser', '/');
  }

  public toLogin(): void {
    this.router.navigate(['auth/login']);
  }

  public toRegister(): void {
    this.router.navigate(['auth/register']);
  }
}
