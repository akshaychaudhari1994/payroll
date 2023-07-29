import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollCalculationComponent } from './payroll-calculation/payroll-calculation.component';

const routes: Routes = [
  {
    path: '', component: PayrollCalculationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
