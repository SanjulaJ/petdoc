import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';





import { PdHeaderComponent } from './pd-header/pd-header.component';
import { PdComponentWindowComponent } from './pd-component-window/pd-component-window.component';
import { PdImageSliderComponent } from './pd-image-slider/pd-image-slider.component';
import { PdAboutusComponent } from './pd-aboutus/pd-aboutus.component';
import { PdEventComponent } from './pd-event/pd-event.component';
import { PdBlogComponent } from './pd-blog/pd-blog.component';
import { PdFeaturedBlogsComponent } from './pd-featured-blogs/pd-featured-blogs.component';
import { PdDocTeamComponent } from './pd-doc-team/pd-doc-team.component';
import { PdHomeComponent } from './pd-home/pd-home.component';
import { MatmoduleComponent } from './matmodule/matmodule.component';




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
    MatmoduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatmoduleComponent
    // MatCheckboxModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatCardModule,
    // MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
