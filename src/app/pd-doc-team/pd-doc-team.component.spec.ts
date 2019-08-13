import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdDocTeamComponent } from './pd-doc-team.component';

describe('PdDocTeamComponent', () => {
  let component: PdDocTeamComponent;
  let fixture: ComponentFixture<PdDocTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdDocTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdDocTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
