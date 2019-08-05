import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdAboutusComponent } from './pd-aboutus.component';

describe('PdAboutusComponent', () => {
  let component: PdAboutusComponent;
  let fixture: ComponentFixture<PdAboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdAboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
