import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollCalculationComponent } from './payroll-calculation.component';

describe('PayrollCalculationComponent', () => {
  let component: PayrollCalculationComponent;
  let fixture: ComponentFixture<PayrollCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollCalculationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
