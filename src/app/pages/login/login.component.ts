import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator} from '../../theme/validators';

import {UserService} from './../../services/user.service';
import {GlobalState} from '../../global.state';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/observable/interval';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitAttempt:boolean = false;
  public isLoggedIn: boolean = false;

  public authSub: Subscription;
  private loopCount = 100;

  public errorMsg = '';

  constructor(private fb:FormBuilder, private userService: UserService, private router: Router) {

    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(5), EmailValidator.validate])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  submitForm(form: any, isValid : boolean ): void{
    this.submitAttempt = true;
    if (isValid) {
      this.userService.login(form.email, form.password).subscribe(user => {
          if (user) {
              this.router.navigate(['/']);
          }
        },
        err => { //TODO
                this.errorMsg = err.json().reason;
              }
        );
    }
  }

  loginWithProvider(provider: string) {
    this.userService.loginWithProvider(provider);
   }
 }
