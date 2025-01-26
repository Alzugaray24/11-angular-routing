import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishService } from '../../../../services/dish/dish.service';
import { DishResponseDTO } from '../../../../interfaces/dish/dish.response.interface';

@Component({
  selector: 'app-dish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss'],
})
export class DishListComponent implements OnInit {
  dishes: DishResponseDTO[] = [];

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.dishService.getAllDishes().subscribe((data) => {
      console.log(data);

      this.dishes = data;
    });
  }
}
