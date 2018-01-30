import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';
import { AppState} from '../../../app.service';


import {UserService} from '../../../services/user.service';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss']
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;

  public user: any;

  constructor(private _state:GlobalState, private _appState: AppState, private _userService: UserService) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });

    console.log("this.user:"+this.user)
    console.log(this.user)
    this.user = this._appState.get("user");
    this._state.subscribe('user.loggedin', (user) => {
      this.user = user;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  public logout() {
    this._userService.logout().subscribe(data => {});
    delete this.user;
  }
}
