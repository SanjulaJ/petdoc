import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdHeaderComponent } from './pd-header/pd-header.component';
import { PdComponentWindowComponent } from './pd-component-window/pd-component-window.component';
import { PdImageSliderComponent } from './pd-image-slider/pd-image-slider.component';
import { PdAboutusComponent } from './pd-aboutus/pd-aboutus.component';


const routes: Routes = [

  { path: 'header', component: PdHeaderComponent  },
  { path: 'component-window', component: PdComponentWindowComponent  },
  { path: 'image-slider', component: PdImageSliderComponent  },
  { path: 'about-us', component: PdAboutusComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
