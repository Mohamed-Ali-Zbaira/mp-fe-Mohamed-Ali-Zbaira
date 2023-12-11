// client.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrlAllClients = 'http://localhost:8081/api/clients/all';
  private apiUrlByNbFactures = 'http://localhost:8081/api/clients/by-nb-factures';
  private apiUrl = 'http://localhost:8081/api/clients/invoice-counts-ordered-descending';
  private apiUrll = 'http://localhost:8081/api/clients/most-loyal';
  private apiUrlSearch = 'http://localhost:8081/api/clients/search';
  private apiUrlActiveClients = 'http://localhost:8081/api/clients/active-clients';
  private apiUrlNonActiveClients = 'http://localhost:8081/api/clients/non-active-clients';

  constructor(private httpClient: HttpClient) { }

  getAllClients(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrlAllClients);
  }

  getClientsByNbFactures(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrlByNbFactures);
  } 
  getInvoiceCountsOrderedDescending(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}`);
  }
   getClientWithHighestTotalAmount(): Observable<any> {
    const url = `${this.apiUrll}`;
    return this.httpClient.get<any>(url);
  }
  searchClients(name: string, lastname: string): Observable<any[]> {
    const params = { name, lastname };
    return this.httpClient.get<any[]>(this.apiUrlSearch, { params });
  }  
  getActiveClients(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrlActiveClients);
  }

  getNonActiveClients(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrlNonActiveClients);
  }

}
