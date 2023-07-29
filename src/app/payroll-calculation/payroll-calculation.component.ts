// payroll-calculation.component.ts
import { Component } from '@angular/core';
import { PayrollService } from '../payroll.service';
import { Month, Months } from '../models/months';

@Component({
  selector: 'app-payroll-calculation',
  templateUrl: './payroll-calculation.component.html',
  styleUrls: ['./payroll-calculation.component.scss'], // Add styles if needed
})
export class PayrollCalculationComponent {
  selectedMonth!: string; // Assuming you want to store the selected month as a string

  // Assuming months is an array containing the list of months, e.g., ["January", "February", ...]
  months: Month[] = [
    { id: 1, name: Months.JANUARY },
    { id: 2, name: Months.FEBRUARY },
    { id: 3, name: Months.MARCH },
    { id: 4, name: Months.APRIL },
    { id: 5, name: Months.MAY },
    { id: 6, name: Months.JUNE },
    { id: 7, name: Months.JULY },
    { id: 8, name: Months.AUGUST },
    { id: 9, name: Months.SEPTEMBER },
    { id: 10, name: Months.OCTOBER },
    { id: 11, name: Months.NOVEMBER },
    { id: 12, name: Months.DECEMBER },
  ];

  constructor(private payrollService: PayrollService) { }

  calculatePayroll() {
    // Assuming you have a method in your service to fetch payroll information for the selected month
    this.payrollService.getPayrollInformation(this.selectedMonth).subscribe(
      (payrollData) => {
        // Assuming you want to handle the retrieved payrollData here
        console.log('Payroll data for', this.selectedMonth, ':', payrollData);
      },
      (error) => {
        // Handle error if the API call fails
        console.error('Error fetching payroll information:', error);
      }
    );
  }
}
