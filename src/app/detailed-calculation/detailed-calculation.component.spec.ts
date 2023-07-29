import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCalculationComponent } from './detailed-calculation.component';

describe('DetailedCalculationComponent', () => {
  let component: DetailedCalculationComponent;
  let fixture: ComponentFixture<DetailedCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedCalculationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
