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
  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // getEmployeesList(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}`);
  // }

  
   getAllEmployee(): Observable<Employee[]>{
     return this.http.get<Employee[]>('http://localhost:8080/employee');
   }
  
  // findById(employeeId: number): Observable<Employee> {
  //   return this.httpClient.get<Employee>(`http://localhost:8080/employee/${employeeId}`);
  // }

  // create(value: any) {
  //   return this.httpClient.post(`http://api-car-rental.aws.blackfernsoft.pl:8080/rental/cars/`, value);
  // }

//   save(carId: number, value: any): Observable<any> {
//     return this.httpClient.put(`http://localhost:8080/employee/${employeeId}`, value);
//   }
// }
// deleteEmployee(employeeId:number): Observable<Employee>{
//   return this.httpClient.delete<Employee>('http://localhost:8080/employee/delete/${employeeId}')
// }
}
