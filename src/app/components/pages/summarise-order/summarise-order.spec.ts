import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariseOrder } from './summarise-order';

describe('SummariseOrder', () => {
  let component: SummariseOrder;
  let fixture: ComponentFixture<SummariseOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummariseOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummariseOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
