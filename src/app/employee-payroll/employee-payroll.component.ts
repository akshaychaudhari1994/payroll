// employee-payroll.component.ts
import { Component, OnInit } from '@angular/core';
import { PayrollService } from '../payroll.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-payroll',
  templateUrl: './employee-payroll.component.html',
  styleUrls: ['./employee-payroll.component.scss'], // Add styles if needed
})
export class EmployeePayrollComponent implements OnInit {
  employees!: Employee[]; // You should create a custom model for employees instead of 'any[]'.
  sortDirection: string = 'asc'; // Sorting direction for table columns
  sortColumn: string = 'name'; // Column to sort by initially

  constructor(private payrollService: PayrollService) { }

  ngOnInit() {
    this.getEmployeePayrollInformation();
  }

  getEmployeePayrollInformation(selectedMonth?: any) {
    this.payrollService.getPayrollInformation(selectedMonth).subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.error('Error fetching employee payroll information:', error);
      }
    );
  }

  sortEmployees(column: string) {
    // Implement the logic to sort employees by the selected column.
    // You can use Array.sort() to sort the 'employees' array based on the 'column'.
    // Remember to toggle the sort direction if the same column is clicked again.
    // Once sorted, update the 'employees' array with the sorted data.
  }

  showDetailedCalculation(employee: any) {
    // Implement the logic to show the detailed calculation view for the selected employee.
    // You can use a modal or a pop-up component to display the details.
  }
}
