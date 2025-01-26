import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../../../../services/menu/menu.service';

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
