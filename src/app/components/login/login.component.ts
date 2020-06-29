import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginModel} from '../../models/login.model';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public formGroup: FormGroup;
  public authSubscription$: Subscription;
  public isInvalid;

  constructor(private authService: AuthService,
              private builder: FormBuilder,
              private router: Router,
              private cookieService: CookieService) { }

  ngOnInit(): void {
    this.formGroup = this.builder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.isInvalid = false;
  }

  public login(): void {
    const loginModel: LoginModel = new LoginModel(this.formGroup);
    this.authSubscription$ = this.authService.login(loginModel).subscribe( result => {
      console.log(result);
      if (result) {
        this.cookieService.set('bookFaceUser', result.toString());
        this.router.navigate(['/']);
      } else {
        this.isInvalid = true;
      }
    });
  }

  public ngOnDestroy() {
    if (this.authSubscription$) {
      this.authSubscription$.unsubscribe();
    }
  }

}
