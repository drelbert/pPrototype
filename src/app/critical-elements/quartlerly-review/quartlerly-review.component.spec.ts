import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartlerlyReviewComponent } from './quartlerly-review.component';

describe('QuartlerlyReviewComponent', () => {
  let component: QuartlerlyReviewComponent;
  let fixture: ComponentFixture<QuartlerlyReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartlerlyReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartlerlyReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
