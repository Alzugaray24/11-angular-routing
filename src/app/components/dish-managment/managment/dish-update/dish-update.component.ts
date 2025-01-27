import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DishService } from '../../../../services/dish/dish.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dish-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dish-update.component.html',
  styleUrls: ['./dish-update.component.scss'],
  providers: [DishService],
})
export class DishUpdateComponent {
  dishId: number = 0;
  dishName: string = '';
  dishPrice: number = 0;
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private dishService: DishService) {}

  updateDish() {
    if (this.dishName.trim() && this.dishPrice != null) {
      const dish = { name: this.dishName, price: this.dishPrice };
      this.dishService
        .updateDish(this.dishId, dish)
        .pipe(
          tap({
            next: (response) => {
              console.log('Plato actualizado:', response);
              this.message = 'Plato actualizado exitosamente';
              this.messageType = 'success';
            },
            error: (error) => {
              console.error('Error al actualizar el plato:', error);
              this.message = 'Error al actualizar el plato';
              this.messageType = 'error';
            },
          })
        )
        .subscribe();
    } else {
      this.message = 'El nombre del plato y el precio no pueden estar vacíos';
      this.messageType = 'error';
      console.error(this.message);
    }
  }
}
