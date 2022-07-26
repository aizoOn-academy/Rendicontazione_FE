import { Router } from '@angular/router';
import { User } from './user';
import { HttpClient } from '@angular/common/http'

import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

const USER_TOKEN = 'user';

@Injectable()
export class AuthService {

  private user?: User;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.user = JSON.parse(window.sessionStorage.getItem(USER_TOKEN)!);
  }

  login(username: string, password: string, onSuccess: () => void, onError: (error: string) => void) {

    return this.http
      .post<any>( environment.apiURL + "/login", { username: username, password: password })
      .subscribe(
        (response) => {
          this.user = response;
          window.sessionStorage.setItem(USER_TOKEN, JSON.stringify(this.user));
        },
        (error) => {
          onError(error);
        },
        () => {
          onSuccess();
        }
      );

  }

  logout() {
    
    return this.http.post<any>(environment.apiURL + "/logout", {"reserved": "futureProof!"}).subscribe(
      (next) => {
        window.sessionStorage.removeItem(USER_TOKEN);
        this.user = undefined;
        
        this.router.navigateByUrl('/login');
      }
    );

  }

  get isLoggedIn() {
    return this.user != undefined;
  }

  getUser() {
    return this.user;
  }

}
