import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdFeaturedBlogsComponent } from './pd-featured-blogs.component';

describe('PdFeaturedBlogsComponent', () => {
  let component: PdFeaturedBlogsComponent;
  let fixture: ComponentFixture<PdFeaturedBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdFeaturedBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdFeaturedBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
