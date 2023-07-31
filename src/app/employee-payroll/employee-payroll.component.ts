// employee-payroll.component.ts
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Employee } from '../models/employee';
import { PayrollService } from '../services/payroll.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-employee-payroll',
  templateUrl: './employee-payroll.component.html',
  styleUrls: ['./employee-payroll.component.scss'],
})
export class EmployeePayrollComponent implements OnInit {
  @Input() employees!: Employee[];
  selectedEmployee!: Employee
  modalRef?: BsModalRef;

  constructor(private payrollService: PayrollService,
    private modalService: BsModalService) { }

  ngOnInit() {
  }

  getEmployeePayrollInformation(selectedMonth?: any) {
    this.payrollService.getPayrollInformation(selectedMonth).subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (error) => {
        console.error('Error fetching employee payroll information:', error);
      }
    })
  }

  sortAsc: boolean = true;

  sortEmployees(column: string) {
    this.employees = this.employees.sort((a, b) => {
      const aValue: any = a[column as keyof Employee];
      const bValue: any = b[column as keyof Employee];
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return this.sortAsc ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }
      return this.sortAsc ? aValue - bValue : bValue - aValue;
    });
    this.sortAsc = !this.sortAsc;
  }

  showDetailedCalculation(employee: any) {
    employee.netPayout = employee.basicSalary - employee.deductions - employee.loanDetails.emi;
    this.selectedEmployee = employee;
  }

  openModal(template: TemplateRef<any>, employee: any) {
    this.modalRef = this.modalService.show(template);
    this.selectedEmployee = employee
  }
}
