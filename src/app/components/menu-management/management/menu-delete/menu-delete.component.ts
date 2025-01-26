import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../../../../services/menu/menu.service';

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

  constructor(private menuService: MenuService) {}

  deleteMenu() {
    if (this.menuId) {
      this.menuService.deleteMenu(this.menuId).subscribe(
        () => {
          console.log('Menú eliminado');
        },
        (error) => {
          console.error('Error al eliminar el menú:', error);
        }
      );
    } else {
      console.error('El ID del menú no puede estar vacío');
    }
  }
}
