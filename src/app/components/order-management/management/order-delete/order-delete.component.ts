import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../../../services/order/order.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-order-delete',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-delete.component.html',
  styleUrls: ['./order-delete.component.scss'],
  providers: [OrderService],
})
export class OrderDeleteComponent {
  orderId: number = 0;
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private orderService: OrderService) {}

  deleteOrder() {
    if (this.orderId) {
      this.orderService
        .deleteOrder(this.orderId)
        .pipe(
          tap({
            next: () => {
              console.log('Pedido eliminado');
              this.message = 'Pedido eliminado exitosamente';
              this.messageType = 'success';
            },
            error: (error) => {
              console.error('Error al eliminar el pedido:', error);
              this.message = 'Error al eliminar el pedido';
              this.messageType = 'error';
            },
          })
        )
        .subscribe();
    } else {
      this.message = 'El ID del pedido no puede estar vacío';
      this.messageType = 'error';
      console.error(this.message);
    }
  }
}
