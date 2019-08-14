import { PdCarouselComponent } from './pd-carousel/pd-carousel.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';

// import { OwlModule } from 'ngx-owl-carousel';


import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material';


import { PdHeaderComponent } from './pd-header/pd-header.component';
import { PdComponentWindowComponent } from './pd-component-window/pd-component-window.component';
import { PdImageSliderComponent } from './pd-image-slider/pd-image-slider.component';
import { PdAboutusComponent } from './pd-aboutus/pd-aboutus.component';
import { PdEventComponent } from './pd-event/pd-event.component';
import { PdBlogComponent } from './pd-blog/pd-blog.component';
import { PdFeaturedBlogsComponent } from './pd-featured-blogs/pd-featured-blogs.component';
import { PdDocTeamComponent } from './pd-doc-team/pd-doc-team.component';
import { PdHomeComponent } from './pd-home/pd-home.component';
import { PdBlogSearchComponent } from './pd-blog-search/pd-blog-search.component';
import { PdInfoTopComponent } from './pd-info-top/pd-info-top.component';


// import { MatmoduleComponent } from './matmodule/matmodule.component';




@NgModule({
  declarations: [
    AppComponent,
    PdHeaderComponent,
    PdComponentWindowComponent,
    PdImageSliderComponent,
    PdAboutusComponent,
    PdEventComponent,
    PdBlogComponent,
    PdFeaturedBlogsComponent,
    PdDocTeamComponent,
    PdHomeComponent,
    PdBlogSearchComponent,
    PdCarouselComponent,
    PdInfoTopComponent
    // MatmoduleComponent
    // CarouselModule
  ],
  imports: [
    // OwlModule,
    BrowserAnimationsModule,
    FormsModule,
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
   // MatmoduleComponent
    // MatCheckboxModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatCardModule,
    // MatIconModule


    MatAutocompleteModule,
    MatChipsModule,
    MatCheckboxModule,
MatButtonModule,
MatFormFieldModule,
MatCardModule,
MatIconModule,

  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
