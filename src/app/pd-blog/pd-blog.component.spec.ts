import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdBlogComponent } from './pd-blog.component';

describe('PdBlogComponent', () => {
  let component: PdBlogComponent;
  let fixture: ComponentFixture<PdBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
