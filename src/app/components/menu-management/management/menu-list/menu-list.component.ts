import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../../../services/menu/menu.service';
import { MenuResponseDTO } from '../../../../interfaces/menu/menu.response.interface';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  menus: MenuResponseDTO[] = [];
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService
      .getAllMenus()
      .pipe(
        tap(
          (data) => {
            this.menus = data;
            this.message = 'Menús cargados exitosamente';
            this.messageType = 'success';
          },
          (error) => {
            console.error('Error al cargar los menús:', error);
            this.message = 'Error al cargar los menús';
            this.messageType = 'error';
          }
        )
      )
      .subscribe();
  }
}
