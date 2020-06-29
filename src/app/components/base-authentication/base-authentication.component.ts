import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-base-authentication',
  templateUrl: './base-authentication.component.html',
  styleUrls: ['./base-authentication.component.css']
})
export abstract class BaseAuthenticationComponent implements OnInit {

  protected loggedInUseID: number;

  protected constructor(protected cookieService: CookieService, protected router: Router) { }

  ngOnInit(): void {
    this.loggedInUseID = +this.cookieService.get('bookFaceUser');
    if (!this.loggedInUseID) {
      this.router.navigate(['auth/login']);
    }
    this.fetchComponentData();
  }

  public abstract fetchComponentData(): void;

}
