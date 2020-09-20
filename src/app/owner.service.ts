import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from './owner-list/owner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private baseUrl= 'http://localhost:8080/owner';
  constructor(private http: HttpClient) { }

getAllOwners():Observable<Owner[]>{
  return this.http.get<Owner[]>('http://localhost:8080/owner');
}
createOwner(business: Object): Observable<Object> {
  return this.http.post(`${this.baseUrl}`, business);
}
getOwners(id:number): Observable<any>{
  return this.http.get(`${this.baseUrl}/${id}`);
}

updateOwner(id: number, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl}/${id}`, value);
}

deleteOwner(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`);
}
}

