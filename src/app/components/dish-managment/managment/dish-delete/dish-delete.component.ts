import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DishService } from '../../../../services/dish/dish.service';
import { tap } from 'rxjs/operators';

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
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private dishService: DishService) {}

  deleteDish() {
    if (this.dishId) {
      this.dishService
        .deleteDish(this.dishId)
        .pipe(
          tap({
            next: () => {
              console.log('Plato eliminado');
              this.message = 'Plato eliminado exitosamente';
              this.messageType = 'success';
            },
            error: (error) => {
              console.error('Error al eliminar el plato:', error);
              this.message = 'Error al eliminar el plato';
              this.messageType = 'error';
            },
          })
        )
        .subscribe();
    } else {
      this.message = 'El ID del plato no puede estar vacío';
      this.messageType = 'error';
      console.error(this.message);
    }
  }
}
