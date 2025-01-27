import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../../../../services/menu/menu.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-menu-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.scss'],
  providers: [MenuService],
})
export class MenuCreateComponent {
  menuName: string = '';
  dishIds: string = '';
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private menuService: MenuService) {}

  saveMenu() {
    const dishIdsArray = this.dishIds
      .split(',')
      .map((id) => parseInt(id.trim(), 10));
    if (this.menuName.trim() && dishIdsArray.length > 0) {
      const menuRequest = { name: this.menuName, dishIds: dishIdsArray };
      this.menuService
        .saveMenu(menuRequest)
        .pipe(
          tap({
            next: (response) => {
              console.log('Menú guardado:', response);
              this.message = 'Menú guardado exitosamente';
              this.messageType = 'success';
            },
            error: (error) => {
              console.error('Error al guardar el menú:', error);
              this.message = 'Error al guardar el menú';
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
