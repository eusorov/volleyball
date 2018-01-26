import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { AlertModule } from 'ngx-bootstrap/alert';
import { RecaptchaModule } from 'ng2-recaptcha';

import { routing }       from './contact.routing';

import { Contact } from './contact.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    AlertModule.forRoot(),
    RecaptchaModule.forRoot(),
    routing
  ],
  declarations: [
    Contact
  ],
  providers: [
  ]
})
export default class ContactModule {}
