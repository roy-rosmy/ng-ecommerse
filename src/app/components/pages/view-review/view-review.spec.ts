import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReview } from './view-review';

describe('ViewReview', () => {
  let component: ViewReview;
  let fixture: ComponentFixture<ViewReview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewReview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewReview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
