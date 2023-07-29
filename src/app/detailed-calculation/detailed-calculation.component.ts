// detailed-calculation.component.ts
import { Component, Input } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-detailed-calculation',
  templateUrl: './detailed-calculation.component.html',
  styleUrls: ['./detailed-calculation.component.scss'],
})
export class DetailedCalculationComponent {
  @Input() selectedEmployee!: Employee;

  constructor() { }

}
