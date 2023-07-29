import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayrollCalculationComponent } from './payroll-calculation/payroll-calculation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EmployeePayrollComponent } from './employee-payroll/employee-payroll.component';
import { DetailedCalculationComponent } from './detailed-calculation/detailed-calculation.component';

@NgModule({
  declarations: [
    AppComponent,
    PayrollCalculationComponent,
    EmployeePayrollComponent,
    DetailedCalculationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
