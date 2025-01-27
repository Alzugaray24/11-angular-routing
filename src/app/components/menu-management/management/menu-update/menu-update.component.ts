import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../../../../services/menu/menu.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-menu-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu-update.component.html',
  styleUrls: ['./menu-update.component.scss'],
  providers: [MenuService],
})
export class MenuUpdateComponent {
  menuId: number = 0;
  menuName: string = '';
  dishIds: string = '';
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private menuService: MenuService) {}

  updateMenu() {
    const dishIdsArray = this.dishIds
      .split(',')
      .map((id) => parseInt(id.trim(), 10));
    if (this.menuName.trim() && dishIdsArray.length > 0) {
      const menuRequest = { name: this.menuName, dishIds: dishIdsArray };
      this.menuService
        .updateMenu(this.menuId, menuRequest)
        .pipe(
          tap({
            next: (response) => {
              console.log('Menú actualizado:', response);
              this.message = 'Menú actualizado exitosamente';
              this.messageType = 'success';
            },
            error: (error) => {
              console.error('Error al actualizar el menú:', error);
              this.message = 'Error al actualizar el menú';
              this.messageType = 'error';
            },
          })
        )
        .subscribe();
    } else {
      this.message =
        'El nombre del menú y los IDs de los platos no pueden estar vacíos';
      this.messageType = 'error';
      console.error(this.message);
    }
  }
}
