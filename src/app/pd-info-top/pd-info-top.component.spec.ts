import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdInfoTopComponent } from './pd-info-top.component';

describe('PdInfoTopComponent', () => {
  let component: PdInfoTopComponent;
  let fixture: ComponentFixture<PdInfoTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdInfoTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdInfoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
