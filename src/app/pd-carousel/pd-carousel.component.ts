import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-pd-carousel',
  templateUrl: './pd-carousel.component.html',
  styleUrls: ['./pd-carousel.component.scss']
})
export class PdCarouselComponent implements AfterViewInit {

  imgags = [
    'https://images.unsplash.com/photo-1550081535-862d341cf425?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'dist/assets/images/blog01.jpg',
    'assets/images/blog02.jpg',
    'images/blog03.jpg',
    'src/assets/images/blog04.jpg'
  ];
  public carouselTileItems: Array<any> = [0, 1, 2, 3, 4, 5];
  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };
  constructor(private _CDR: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this._CDR.detectChanges();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.carouselTileItems.forEach(el => {
      this.carouselTileLoad(el);
    });
  }

  public carouselTileLoad(j) {
    const len = this.carouselTiles[j].length;
    if (len <= 30) {
      for (let i = len; i < len + 15; i++) {
        this.carouselTiles[j].push(
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        );
      }
    }
  }
}
