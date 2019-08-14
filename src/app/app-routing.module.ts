import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { PdCarouselComponent } from './pd-carousel/pd-carousel.component';
import { PdInfoTopComponent } from './pd-info-top/pd-info-top.component';

const routes: Routes = [

  { path: 'header', component: PdHeaderComponent  },
  { path: 'component-window', component: PdComponentWindowComponent  },
  { path: 'image-slider', component: PdImageSliderComponent  },
  { path: 'about-us', component: PdAboutusComponent  },
  { path: 'event', component: PdEventComponent  },
  { path: 'blog', component: PdBlogComponent  },
  { path: 'featured-blogs', component: PdFeaturedBlogsComponent  },
  { path: 'doc-team', component: PdDocTeamComponent  },
  { path: 'home', component: PdHomeComponent  },
  { path: 'search', component: PdBlogSearchComponent  },
  { path: 'carousel', component: PdCarouselComponent  },
  { path: 'info', component: PdInfoTopComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
