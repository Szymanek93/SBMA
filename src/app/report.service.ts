import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from './report-list/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  
  private baseUrl = 'http://localhost:8080/report'
  constructor(private http: HttpClient) {}

  getReport(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

getAllReports(): Observable<Report[]>{
  return this.http.get<Report[]>('http://localhost:8080/report')
}

createReport(report: Object): Observable<Object>{
  return this.http.post(`${this.baseUrl}`, report);
}
deleteReport(id:number): Observable<any>{
  return this.http.delete(`${this.baseUrl}/${id}`);
}

updateReport (id:number, value: any): Observable<Object>{
  return this.http.put(`${this.baseUrl}/${id}`,value);
}


}
