import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../ModelClasses/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  url: any = "https://localhost:44390/api/Home";
  constructor(private http:HttpClient) 
  {

  }

  GetEmployeeList(): Observable<any>
  {
    return this.http.get(this.url + '/GetEmpList');
  }

  GetEmployeeByName(empName: string):Observable<Employee>
  {
    return this.http.get<Employee>(this.url + '/GetEmployeeByName?empname='+empName+'');
  }
}
