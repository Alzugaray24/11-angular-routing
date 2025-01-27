import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../../../services/order/order.service';
import { OrderRequestDTO } from '../../../../interfaces/order/order.request.interface';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-order-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.scss'],
})
export class OrderUpdateComponent {
  orderId: number = 0;
  customerId: number = 0;
  dishIds: string = '';
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private orderService: OrderService) {}

  updateOrder() {
    const dishIdsArray = this.dishIds
      .split(',')
      .map((id) => parseInt(id.trim(), 10));
    if (this.customerId && dishIdsArray.length > 0) {
      const orderRequest: OrderRequestDTO = {
        customerId: this.customerId,
        dishIds: dishIdsArray,
      };
      this.orderService
        .updateOrder(this.orderId, orderRequest)
        .pipe(
          tap({
            next: (response) => {
              console.log('Pedido actualizado:', response);
              this.message = 'Pedido actualizado exitosamente';
              this.messageType = 'success';
            },
            error: (error) => {
              console.error('Error al actualizar el pedido:', error);
              this.message = 'Error al actualizar el pedido';
              this.messageType = 'error';
            },
          })
        )
        .subscribe();
    } else {
      this.message =
        'El ID del cliente y los IDs de los platos no pueden estar vacíos';
      this.messageType = 'error';
      console.error(this.message);
    }
  }
}
