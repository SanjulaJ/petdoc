import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdEventComponent } from './pd-event.component';

describe('PdEventComponent', () => {
  let component: PdEventComponent;
  let fixture: ComponentFixture<PdEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
