import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Business } from './business-list/business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private baseUrl= 'http://localhost:8080/business';
  constructor(private http: HttpClient) { }

getAllBusiness():Observable<Business[]>{
  return this.http.get<Business[]>('http://localhost:8080/business');
}
createBusiness(business: Object): Observable<Object> {
  return this.http.post(`${this.baseUrl}`, business);
}
getBusiness(id:number): Observable<any>{
  return this.http.get(`${this.baseUrl}/${id}`);
}

updateBusiness(id: number, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl}/${id}`, value);
}

deleteBusiness(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`);
}
}