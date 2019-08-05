

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdHeaderComponent } from './pd-header/pd-header.component';
import { PdComponentWindowComponent } from './pd-component-window/pd-component-window.component';
import { PdImageSliderComponent } from './pd-image-slider/pd-image-slider.component';
import { PdAboutusComponent } from './pd-aboutus/pd-aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    PdHeaderComponent,
    PdComponentWindowComponent,
    PdImageSliderComponent,
    PdAboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
