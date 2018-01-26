import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';

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

  constructor(private _state:GlobalState, private _userService: UserService) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });

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
    this._state.notifyDataChanged('user.loggedin', null);
    this._state.notifyDataChanged('isLoggedIn', false);
    delete this.user;
  }
}
