import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgGoalsComponent } from './org-goals.component';

describe('OrgGoalsComponent', () => {
  let component: OrgGoalsComponent;
  let fixture: ComponentFixture<OrgGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
