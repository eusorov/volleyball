// user.service.ts
import { Injectable } from '@angular/core';
import { Http,Response, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import {GlobalState} from './../global.state';
import { AppState} from './../app.service';

import {User} from './../entities/user';


import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  user : User;

  //private _authenticatedApi = this._apiBase + '/api/authenticated';
  private _authenticatedApi = '/api/authenticated';
  private _logoutApi = '/api/logout';
  private _meApi = '/api/users/me';
  private _signupApi = '/api/signup';
  private _loginApi = '/api/login';


// store the URL so we can redirect after logging in
redirectUrl: string;

constructor(private http: Http, private _state:GlobalState, private _appState: AppState) {
  //  this.loggedIn = !!localStorage.getItem('auth_token');
}


signup(user: User, captcha: string) : Observable<User> {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http
  .post(
    this._signupApi,
    JSON.stringify({ email: user.email, password : user.password, name: user.name, captcha: captcha }),
    <RequestOptionsArgs> {headers: headers, withCredentials: true}
    )
  .map((res : Response) => {
    let user : User;
    user = res.json();
    user.isadmin = user.groups.some( function (group) {
      if (group.name ==="admin") return true;
    });
    this.user = user;
    this._state.notifyDataChanged('isLoggedIn', true);
    this._state.notifyDataChanged('user.loggedin', user);
    this._appState.set("user", user);
    return user;
  })
  .catch(this.handleError);

}

private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    return Observable.throw(error || "Server Error");
  }

  authenticated() {
    return this.http.get(this._authenticatedApi, <RequestOptionsArgs> {withCredentials: true})
    .map((res: Response) => {
      this._state.notifyDataChanged('isLoggedIn', true);
      return res.json();
    })
    .catch(this.handleError);
  }

  logout() {
    return this.http.get(this._logoutApi, <RequestOptionsArgs> {withCredentials: true})
    .map((res: Response) => {
      delete this.user;

      this._state.notifyDataChanged('isLoggedIn', false);
      this._state.notifyDataChanged('user.loggedin', null);
      this._appState.set("user", null);
      return res.json()}
      )
    .catch(this.handleError);
  }


  login(email: string, password: string) : Observable<User> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this._loginApi, JSON.stringify({ 'email': email, 'password' : password }), <RequestOptionsArgs> {headers: headers, withCredentials: true})
    .map((res: Response) => { let user : User;
      user = res.json();
      user.isadmin = user.groups.some( function (group) {
        if (group.name ==="admin") return true;
      });
      this.user = user;
      this._state.notifyDataChanged('user.loggedin', user);
      this._appState.set("user", user);
      return user;
    })
    .catch(this.handleError);
  }

  loginWithProvider(provider: string) : void {
    // es reicht hier in der url die Adresse
    window.location.href='/auth/'+provider;
  }


  getMe() : Observable<User> {
    return this.http.get(this._meApi, <RequestOptionsArgs> {withCredentials: true})
    .map((res: Response) =>  {
      let user: User;
      user = res.json();
      user.isadmin = user.groups.some( function (group) {
        if (group.name ==="admin") return true;
      });
      this.user = user;
      this._state.notifyDataChanged('user.loggedin', user);
      this._appState.set("user", user);
      return this.user;
    });
  }
 }
