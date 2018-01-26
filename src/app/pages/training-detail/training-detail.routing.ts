import { Routes, RouterModule }  from '@angular/router';

import { TrainingDetail } from './training-detail.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {    path: '',     component: TrainingDetail  },
  {  path: ':id', component: TrainingDetail}
];

export const routing = RouterModule.forChild(routes);
