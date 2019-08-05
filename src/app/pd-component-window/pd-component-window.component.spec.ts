import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdComponentWindowComponent } from './pd-component-window.component';

describe('PdComponentWindowComponent', () => {
  let component: PdComponentWindowComponent;
  let fixture: ComponentFixture<PdComponentWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdComponentWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdComponentWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
