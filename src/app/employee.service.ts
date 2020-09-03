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
  
  findById(employeeId: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`http://localhost:8080/employee/${employeeId}`);
  }

  // create(value: any) {
  //   return this.httpClient.post(`http://api-car-rental.aws.blackfernsoft.pl:8080/rental/cars/`, value);
  // }

//   save(carId: number, value: any): Observable<any> {
//     return this.httpClient.put(`http://localhost:8080/employee/${employeeId}`, value);
//   }
// }
}
