import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishService } from '../../../../services/dish/dish.service';
import { DishResponseDTO } from '../../../../interfaces/dish/dish.response.interface';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss'],
})
export class DishListComponent implements OnInit {
  dishes: DishResponseDTO[] = [];
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.dishService
      .getAllDishes()
      .pipe(
        tap(
          (data) => {
            this.dishes = data;
            this.message = 'Platos cargados exitosamente';
            this.messageType = 'success';
          },
          (error) => {
            console.error('Error al cargar los platos:', error);
            this.message = 'Error al cargar los platos';
            this.messageType = 'error';
          }
        )
      )
      .subscribe();
  }
}
