import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../../../../services/menu/menu.service';

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

  constructor(private menuService: MenuService) {}

  saveMenu() {
    const dishIdsArray = this.dishIds
      .split(',')
      .map((id) => parseInt(id.trim(), 10));
    if (this.menuName.trim() && dishIdsArray.length > 0) {
      const menuRequest = { name: this.menuName, dishIds: dishIdsArray };
      this.menuService.saveMenu(menuRequest).subscribe((response) => {
        console.log('Menú guardado:', response);
      });
    } else {
      console.error(
        'El nombre del menú y los IDs de los platos no pueden estar vacíos'
      );
    }
  }
}
