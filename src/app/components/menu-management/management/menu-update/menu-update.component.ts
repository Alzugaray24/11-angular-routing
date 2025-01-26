import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule para usar ngModel
import { MenuService } from '../../../../services/menu/menu.service'; // Ajusta la ruta según tu estructura de proyecto

@Component({
  selector: 'app-menu-update',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agrega FormsModule aquí
  templateUrl: './menu-update.component.html',
  styleUrls: ['./menu-update.component.scss'],
  providers: [MenuService], // Proporciona el servicio aquí si no está en el módulo raíz
})
export class MenuUpdateComponent {
  menuId: number = 0;
  menuName: string = '';
  dishIds: string = ''; // Usamos un string para capturar los IDs separados por comas

  constructor(private menuService: MenuService) {}

  updateMenu() {
    const dishIdsArray = this.dishIds
      .split(',')
      .map((id) => parseInt(id.trim(), 10));
    if (this.menuName.trim() && dishIdsArray.length > 0) {
      const menuRequest = { name: this.menuName, dishIds: dishIdsArray };
      this.menuService
        .updateMenu(this.menuId, menuRequest)
        .subscribe((response) => {
          console.log('Menú actualizado:', response);
        });
    } else {
      console.error(
        'El nombre del menú y los IDs de los platos no pueden estar vacíos'
      );
    }
  }
}
