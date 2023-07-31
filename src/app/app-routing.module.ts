import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollCalculationComponent } from './payroll-calculation/payroll-calculation.component';
import { EmployeePayrollComponent } from './employee-payroll/employee-payroll.component';
import { DetailedCalculationComponent } from './detailed-calculation/detailed-calculation.component';

const routes: Routes = [
  { path: '', redirectTo: 'payroll-calculation', pathMatch: 'full' },
  {
    path: 'payroll-calculation', component: PayrollCalculationComponent,
  },
  {
    path: 'employee', component: EmployeePayrollComponent
  }
  , {
    path: 'detail-calculation', component: DetailedCalculationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
