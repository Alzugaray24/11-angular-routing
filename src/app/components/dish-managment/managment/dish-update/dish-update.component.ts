import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DishService } from '../../../../services/dish/dish.service';

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
