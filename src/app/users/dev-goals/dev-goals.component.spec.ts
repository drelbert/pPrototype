import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevGoalsComponent } from './dev-goals.component';

describe('DevGoalsComponent', () => {
  let component: DevGoalsComponent;
  let fixture: ComponentFixture<DevGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
