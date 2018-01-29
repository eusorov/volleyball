import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
//import {SelectModule} from 'ng2-select';

import { routing }       from './training-detail.routing';

import { TrainingDetail } from './training-detail.component';

//import { MomentModule } from 'moment';

//MomentModule,
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,


    routing
  ],
  declarations: [
    TrainingDetail
  ],
  providers: [
  ]
})

//  SelectModule
export class TrainingDetailModule {}
