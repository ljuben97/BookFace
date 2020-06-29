import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLoggedIn: string;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.cookieService.get('bookFaceUser');
  }

}
