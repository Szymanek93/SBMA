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
}

