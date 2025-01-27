import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DishService } from '../../../../services/dish/dish.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dish-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dish-create.component.html',
  styleUrls: ['./dish-create.component.scss'],
  providers: [DishService],
})
export class DishCreateComponent {
  dishName: string = '';
  dishPrice: number = 0;
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private dishService: DishService) {}

  saveDish() {
    if (this.dishName.trim() && this.dishPrice != null) {
      const dishRequest = { name: this.dishName, price: this.dishPrice };
      this.dishService
        .saveDish(this.dishName, this.dishPrice)
        .pipe(
          tap({
            next: (response) => {
              console.log('Plato guardado:', response);
              this.message = 'Plato guardado exitosamente';
              this.messageType = 'success';
            },
            error: (error) => {
              console.error('Error al guardar el plato:', error);
              this.message = 'Error al guardar el plato';
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
