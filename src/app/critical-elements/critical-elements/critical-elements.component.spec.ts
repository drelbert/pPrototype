import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalElementsComponent } from './critical-elements.component';

describe('CriticalElementsComponent', () => {
  let component: CriticalElementsComponent;
  let fixture: ComponentFixture<CriticalElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
