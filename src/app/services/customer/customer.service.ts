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
    return this.http.get<CustomerResponseDTO[]>(this.apiUrl);
  }

  updateCustomer(
    id: number,
    customer: CustomerRequestDTO
  ): Observable<CustomerResponseDTO> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<CustomerResponseDTO>(
      `${this.apiUrl}/${id}`,
      customer,
      { headers }
    );
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
