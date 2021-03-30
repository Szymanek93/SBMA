import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InvoiceDTO } from './invoice-list/InvoiceDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private baseUrl = 'http://localhost:8080/invoice'
  constructor(private http: HttpClient) {}

  getInvoice(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

getAllInvoices(): Observable<InvoiceDTO[]>{
  return this.http.get<InvoiceDTO[]>('http://localhost:8080/invoice')
}

createInvoices(InvoiceDTO: Object): Observable<Object>{
  return this.http.post(`${this.baseUrl}`, InvoiceDTO);
}
deleteInvoice(id:number): Observable<any>{
  return this.http.delete(`${this.baseUrl}/${id}`);
}

updateInvoice (id:number, value: any): Observable<Object>{
  return this.http.put(`${this.baseUrl}/${id}`,value);
}

}
