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
}