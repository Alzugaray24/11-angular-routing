import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../../../services/order/order.service';

@Component({
  selector: 'app-order-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss'],
  providers: [OrderService],
})
export class OrderCreateComponent {
  customerId: number = 0;
  dishIds: string = '';

  constructor(private orderService: OrderService) {}

  saveOrder() {
    const dishIdsArray = this.dishIds
      .split(',')
      .map((id) => parseInt(id.trim(), 10));
    if (this.customerId && dishIdsArray.length > 0) {
      const orderRequest = {
        customerId: this.customerId,
        dishIds: dishIdsArray,
      };
      this.orderService.saveOrder(orderRequest).subscribe((response) => {
        console.log('Pedido guardado:', response);
      });
    } else {
      console.error(
        'El ID del cliente y los IDs de los platos no pueden estar vacíos'
      );
    }
  }
}
