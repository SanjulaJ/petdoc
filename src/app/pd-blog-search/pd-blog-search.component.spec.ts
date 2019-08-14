import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdBlogSearchComponent } from './pd-blog-search.component';

describe('PdBlogSearchComponent', () => {
  let component: PdBlogSearchComponent;
  let fixture: ComponentFixture<PdBlogSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdBlogSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdBlogSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
