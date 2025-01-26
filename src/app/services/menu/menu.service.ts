import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuRequestDTO } from '../../interfaces/menu/menu.request.interface';
import { MenuResponseDTO } from '../../interfaces/menu/menu.response.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private apiUrl = 'http://localhost:8080/api/menu';

  constructor(private http: HttpClient) {}

  saveMenu(menuRequest: MenuRequestDTO): Observable<MenuResponseDTO> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<MenuResponseDTO>(this.apiUrl, menuRequest, {
      headers,
    });
  }

  getAllMenus(): Observable<MenuResponseDTO[]> {
    return this.http.get<MenuResponseDTO[]>(this.apiUrl);
  }

  updateMenu(
    id: number,
    menuRequest: MenuRequestDTO
  ): Observable<MenuResponseDTO> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<MenuResponseDTO>(`${this.apiUrl}/${id}`, menuRequest, {
      headers,
    });
  }

  deleteMenu(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
