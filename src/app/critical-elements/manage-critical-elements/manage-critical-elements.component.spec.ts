import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCriticalElementsComponent } from './manage-critical-elements.component';

describe('ManageCriticalElementsComponent', () => {
  let component: ManageCriticalElementsComponent;
  let fixture: ComponentFixture<ManageCriticalElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCriticalElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCriticalElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
