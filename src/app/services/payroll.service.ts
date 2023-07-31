// payroll.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, filter, forkJoin, map, merge, mergeMap, of, switchMap } from 'rxjs';
import { Employee, LoanDetails } from '../models/employee';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PayrollService {
 
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

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(environment.apiUrl + '/empoyee')
  }

  getLoanDetailById(): Observable<LoanDetails[]> {
    return this.http.get<LoanDetails[]>(environment.apiUrl + '/loanDetails')
  }

  getPayrollInformation(selectedMonth: any): Observable<any> {
    return forkJoin([this.getEmployee(), this.getLoanDetailById()]).pipe(
      map(result => {
        let r1 = result[0].map(i => {
          i.loanDetails = result[1].find(e => e.employeeId == i.id)
          return i
        })
        return r1.filter(e => e.month == selectedMonth)
      }))
  }

}

