import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerRequestDTO } from '../../interfaces/customer/customer.request.interface';
import { CustomerResponseDTO } from '../../interfaces/customer/customer.response.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://localhost:8080/api/customer';

  constructor(private http: HttpClient) {}

  saveCustomer(name: string): Observable<CustomerResponseDTO> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body: CustomerRequestDTO = { name };
    return this.http.post<CustomerResponseDTO>(this.apiUrl, body, { headers });
  }

  getAllCustomers(): Observable<CustomerResponseDTO[]> {
    const response = this.http.get<CustomerResponseDTO[]>(this.apiUrl);
    return response;
  }
}
