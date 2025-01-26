import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DishRequestDTO } from '../../interfaces/dish/dish.request.interface';
import { DishResponseDTO } from '../../interfaces/dish/dish.response.interface';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  private apiUrl = 'http://localhost:8080/api/dish';

  constructor(private http: HttpClient) {}

  saveDish(name: string, price: number): Observable<DishResponseDTO> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body: DishRequestDTO = { name, price };
    return this.http.post<DishResponseDTO>(this.apiUrl, body, { headers });
  }

  getAllDishes(): Observable<DishResponseDTO[]> {
    return this.http.get<DishResponseDTO[]>(this.apiUrl);
  }

  updateDish(id: number, dish: DishRequestDTO): Observable<DishResponseDTO> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<DishResponseDTO>(`${this.apiUrl}/${id}`, dish, {
      headers,
    });
  }

  deleteDish(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
