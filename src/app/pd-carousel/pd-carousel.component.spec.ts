import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdCarouselComponent } from './pd-carousel.component';

describe('PdCarouselComponent', () => {
  let component: PdCarouselComponent;
  let fixture: ComponentFixture<PdCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
