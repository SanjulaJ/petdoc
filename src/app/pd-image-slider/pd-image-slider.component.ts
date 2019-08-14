import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
// import { OwlModule } from 'ngx-owl-carousel';


@NgModule({
  imports: [ CarouselModule ],
  exports: [CarouselModule],
  declarations: [ PdImageSliderComponent ]
})

@Component({
  selector: 'app-pd-image-slider',
  templateUrl: './pd-image-slider.component.html',
  styleUrls: ['./pd-image-slider.component.scss']
})
export class PdImageSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
