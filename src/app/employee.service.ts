import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee-list/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl= 'http://localhost:8080/employee';
  constructor(private http: HttpClient) {}

  getEmployee(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createEmployee(employeeDTO: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employeeDTO);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
   getAllEmployee(): Observable<Employee[]>{
     return this.http.get<Employee[]>('http://localhost:8080/employee');
   }
  
}
