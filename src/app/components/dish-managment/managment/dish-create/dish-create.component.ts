import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DishService } from '../../../../services/dish/dish.service';

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
