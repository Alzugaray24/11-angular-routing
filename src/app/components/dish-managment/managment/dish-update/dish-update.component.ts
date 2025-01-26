import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule para usar ngModel
import { DishService } from '../../../../services/dish/dish.service'; // Ajusta la ruta según tu estructura de proyecto

@Component({
  selector: 'app-dish-update',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agrega FormsModule aquí
  templateUrl: './dish-update.component.html',
  styleUrls: ['./dish-update.component.scss'],
  providers: [DishService], // Proporciona el servicio aquí si no está en el módulo raíz
})
export class DishUpdateComponent {
  dishId: number = 0;
  dishName: string = '';
  dishPrice: number = 0;

  constructor(private dishService: DishService) {}

  updateDish() {
    if (this.dishName.trim() && this.dishPrice != null) {
      const dish = { name: this.dishName, price: this.dishPrice };
      this.dishService.updateDish(this.dishId, dish).subscribe((response) => {
        console.log('Plato actualizado:', response);
      });
    } else {
      console.error('El nombre del plato y el precio no pueden estar vacíos');
    }
  }
}
