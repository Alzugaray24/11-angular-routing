import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../../../../services/menu/menu.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-menu-delete',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu-delete.component.html',
  styleUrls: ['./menu-delete.component.scss'],
  providers: [MenuService],
})
export class MenuDeleteComponent {
  menuId: number = 0;
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private menuService: MenuService) {}

  deleteMenu() {
    if (this.menuId) {
      this.menuService
        .deleteMenu(this.menuId)
        .pipe(
          tap({
            next: () => {
              console.log('Menú eliminado');
              this.message = 'Menú eliminado exitosamente';
              this.messageType = 'success';
            },
            error: (error) => {
              console.error('Error al eliminar el menú:', error);
              this.message = 'Error al eliminar el menú';
              this.messageType = 'error';
            },
          })
        )
        .subscribe();
    } else {
      this.message = 'El ID del menú no puede estar vacío';
      this.messageType = 'error';
      console.error(this.message);
    }
  }
}
