import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginModel} from '../models/login.model';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public login(loginModel: LoginModel): Observable<number> {
    return this.http.post<number>('http://localhost:3000/auth/login', loginModel);
  }
}
