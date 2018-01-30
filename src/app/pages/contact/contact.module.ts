import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { routing }       from './contact.routing';

import { Contact } from './contact.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    NgbModule,
    RecaptchaFormsModule,
    RecaptchaModule.forRoot(),
    routing
  ],
  declarations: [
    Contact
  ],
  providers: [
  ]
})
export class ContactModule {}
