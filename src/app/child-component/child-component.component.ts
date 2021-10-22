import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { Employee } from '../ModelClasses/Employee';
import {EmployeeDetailsService} from '../Service/employee-details.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.sass']
})
export class ChildComponentComponent implements OnInit {

  employees: any;
  employee: any = "";
  constructor(public empData : EmployeeDetailsService) 
  {
  }

   GetEmployeeList()
   {
     debugger;
    this.empData.GetEmployeeList().subscribe((data)=>this.employees = data);
    console.warn(this.employees);
   }

   GetEmployeeByName(empname: string)
   {
     debugger;
     this.empData.GetEmployeeByName(empname).subscribe((data)=>this.employee = data);
     console.warn(this.employee);
   }

@Output() UpdateDataEvent = new EventEmitter<string>();

  @Input() pData: number[] = [];
  ngOnInit(): void {
  }


}
