import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule para usar ngModel
import { DishService } from '../../../../services/dish/dish.service'; // Ajusta la ruta según tu estructura de proyecto

@Component({
  selector: 'app-dish-create',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agrega FormsModule aquí
  templateUrl: './dish-create.component.html',
  styleUrls: ['./dish-create.component.scss'],
  providers: [DishService], // Proporciona el servicio aquí si no está en el módulo raíz
})
export class DishCreateComponent {
  dishName: string = '';
  dishPrice: number = 0;

  constructor(private dishService: DishService) {}

  saveDish() {
    if (this.dishName.trim() && this.dishPrice != null) {
      this.dishService
        .saveDish(this.dishName, this.dishPrice)
        .subscribe((response) => {
          console.log('Plato guardado:', response);
        });
    } else {
      console.error('El nombre del plato y el precio no pueden estar vacíos');
    }
  }
}
