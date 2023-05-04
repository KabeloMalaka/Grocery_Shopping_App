import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginDetails } from '../models/loginDetails.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  signUp(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/signup`, user);
  }

  signIn(loginDetails: LoginDetails): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/signin`, loginDetails);
  }

  get isLoggedIn() {
    return this._isLoggedIn.asObservable();
  }

  // Call this method after successful login
  loggedin() {
    this._isLoggedIn.next(true);
  }

  // Call this method after successful logout
  loggedout() {
    this._isLoggedIn.next(false);
  }
}
