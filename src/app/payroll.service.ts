// payroll.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PayrollService {
  private apiUrl = 'api/payroll'; // Replace this with the actual API endpoint if you have a real backend.

  // Mock data for employees and their payroll information.
  private mockEmployees: any[] = [
    // Mock data for employees (you can add more employees here)
    {
      id: 1,
      name: 'John Doe',
      basicSalary: 20000,
      loanDetails: {
        amount: 10000,
        interestRate: 0.05,
        emi: 2500,
      },
    },
    // Add more employees...
  ];

  constructor(private http: HttpClient) {}

  // Method to retrieve payroll information for the selected month.
  getPayrollInformation(selectedMonth: string): Observable<any> {
    // Replace this with the actual API call if you have a real backend.
    // For now, let's use mock data and return it as an observable.
    return of(this.filterPayrollDataByMonth(selectedMonth));
  }

  // Helper method to filter payroll data by the selected month.
  private filterPayrollDataByMonth(selectedMonth: string): any[] {
    // Assuming you have a property like 'createdAt' that indicates the month for each employee's payroll data.
    return this.mockEmployees.filter((employee) => {
      // Assuming you have a property 'createdAt' containing the month in the format "MMMM".
      const employeeMonth = new Date(employee.createdAt).toLocaleString('default', { month: 'long' });
      return employeeMonth === selectedMonth;
    });
  }
}
