import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdHeaderComponent } from './pd-header/pd-header.component';
import { PdComponentWindowComponent } from './pd-component-window/pd-component-window.component';

const routes: Routes = [

  { path: 'header', component: PdHeaderComponent  },
  { path: 'component-window', component: PdComponentWindowComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
