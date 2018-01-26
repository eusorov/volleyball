import { Routes, RouterModule }  from '@angular/router';

import { Success } from './success.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Success
  }
];

export const routing = RouterModule.forChild(routes);
