import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

// import { AlertModule } from 'ngx-bootstrap/alert';
// import { RecaptchaModule } from 'ng2-recaptcha';

import { routing }       from './contact.routing';

import { Contact } from './contact.component';

// AlertModule.forRoot(),
// RecaptchaModule.forRoot(),

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Contact
  ],
  providers: [
  ]
})
export class ContactModule {}
