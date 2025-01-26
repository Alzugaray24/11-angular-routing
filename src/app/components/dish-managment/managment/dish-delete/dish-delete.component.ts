import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule para usar ngModel
import { DishService } from '../../../../services/dish/dish.service'; // Ajusta la ruta según tu estructura de proyecto

@Component({
  selector: 'app-dish-delete',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agrega FormsModule aquí
  templateUrl: './dish-delete.component.html',
  styleUrls: ['./dish-delete.component.scss'],
  providers: [DishService], // Proporciona el servicio aquí si no está en el módulo raíz
})
export class DishDeleteComponent {
  dishId: number = 0;

  constructor(private dishService: DishService) {}

  deleteDish() {
    if (this.dishId) {
      this.dishService.deleteDish(this.dishId).subscribe(
        () => {
          console.log('Plato eliminado');
          // Aquí puedes agregar lógica adicional, como mostrar un mensaje de éxito o redirigir a otra página
        },
        (error) => {
          console.error('Error al eliminar el plato:', error);
        }
      );
    } else {
      console.error('El ID del plato no puede estar vacío');
    }
  }
}
