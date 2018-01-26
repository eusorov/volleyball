import { Routes, RouterModule }  from '@angular/router';

import { Contact } from './contact.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {    path: '',     component: Contact  }
];

export const routing = RouterModule.forChild(routes);
