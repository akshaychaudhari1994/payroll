// detailed-calculation.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee';
import { BehaviorSubject, Observable, from, map } from 'rxjs';

export interface User {
  id: number;
  name: string
}
@Component({
  selector: 'app-detailed-calculation',
  templateUrl: './detailed-calculation.component.html',
  styleUrls: ['./detailed-calculation.component.scss'],
})
export class DetailedCalculationComponent implements OnInit {
  @Input() selectedEmployee!: Employee;

  constructor() { }

  ngOnInit(): void {
    
  }
}

