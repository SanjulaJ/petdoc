import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdImageSliderComponent } from './pd-image-slider.component';

describe('PdImageSliderComponent', () => {
  let component: PdImageSliderComponent;
  let fixture: ComponentFixture<PdImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
