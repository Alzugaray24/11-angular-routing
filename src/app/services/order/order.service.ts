import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderRequestDTO } from '../../interfaces/order/order.request.interface';
import { OrderResponseDTO } from '../../interfaces/order/order.response.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/api/order';

  constructor(private http: HttpClient) {}

  saveOrder(orderRequest: OrderRequestDTO): Observable<OrderResponseDTO> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<OrderResponseDTO>(this.apiUrl, orderRequest, {
      headers,
    });
  }

  getAllOrders(): Observable<OrderResponseDTO[]> {
    return this.http.get<OrderResponseDTO[]>(this.apiUrl);
  }

  updateOrder(
    id: number,
    orderRequest: OrderRequestDTO
  ): Observable<OrderResponseDTO> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<OrderResponseDTO>(
      `${this.apiUrl}/${id}`,
      orderRequest,
      { headers }
    );
  }

  deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getOrderById(id: number): Observable<OrderResponseDTO> {
    return this.http.get<OrderResponseDTO>(`${this.apiUrl}/${id}`);
  }
}
