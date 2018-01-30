import {Component, ViewChild} from '@angular/core';
import {Router}  from '@angular/router';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';

import { Http, Response, Headers  } from '@angular/http';
import { RecaptchaComponent } from 'ng-recaptcha';

import {UserService} from './../../services/user.service';
import { User } from '../../entities/user';


@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {

  @ViewChild (RecaptchaComponent)
  recaptchaComponent: RecaptchaComponent;

  public form:FormGroup;
  public name:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;

  public submitAttempt: boolean = false;
  public submitted:boolean = false;

  public errorMsg:string;

  public alerts:Array<Object>  =  new Array<Object>();

  constructor(fb:FormBuilder, private http: Http, private userService: UserService, private  router: Router,) {

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')},),
      'captcha': ['', Validators.compose([Validators.required])]
    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  public onSubmit(form: any):void {
     this.submitAttempt=true;
     if (this.form.valid) {
       // your code goes here
       let me = new User('','');
       me.name=form.name;
       me.email=form.email;
       me.password=form.passwords.password;

       this.userService.signup(me, form.captcha).subscribe((user) => {
         if (user) {
           this.router.navigate(['/']);
         }
       },
       err => {
         this.submitAttempt=false;
         this.errorMsg = err.json().error;
         this.recaptchaComponent.reset();
       }
       );
     }
   }

  resolved(captchaResponse: string) {
     console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
}
