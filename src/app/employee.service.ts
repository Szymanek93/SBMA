import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee-list/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {

   }
   getEmployee(): Observable<Employee[]>{
     return this.httpClient.get<Employee[]>('http://localhost:8080/employee/findAll');
     
   }
}
