import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DishService } from '../../../../services/dish/dish.service';

@Component({
  selector: 'app-dish-delete',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dish-delete.component.html',
  styleUrls: ['./dish-delete.component.scss'],
  providers: [DishService],
})
export class DishDeleteComponent {
  dishId: number = 0;

  constructor(private dishService: DishService) {}

  deleteDish() {
    if (this.dishId) {
      this.dishService.deleteDish(this.dishId).subscribe(
        () => {
          console.log('Plato eliminado');
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
