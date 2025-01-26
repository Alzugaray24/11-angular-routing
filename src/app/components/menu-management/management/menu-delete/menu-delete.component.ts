import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule para usar ngModel
import { MenuService } from '../../../../services/menu/menu.service'; // Ajusta la ruta según tu estructura de proyecto

@Component({
  selector: 'app-menu-delete',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agrega FormsModule aquí
  templateUrl: './menu-delete.component.html',
  styleUrls: ['./menu-delete.component.scss'],
  providers: [MenuService], // Proporciona el servicio aquí si no está en el módulo raíz
})
export class MenuDeleteComponent {
  menuId: number = 0;

  constructor(private menuService: MenuService) {}

  deleteMenu() {
    if (this.menuId) {
      this.menuService.deleteMenu(this.menuId).subscribe(
        () => {
          console.log('Menú eliminado');
          // Aquí puedes agregar lógica adicional, como mostrar un mensaje de éxito o redirigir a otra página
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
