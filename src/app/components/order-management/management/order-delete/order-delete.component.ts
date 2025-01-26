import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../../../services/order/order.service';

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

  constructor(private orderService: OrderService) {}

  deleteOrder() {
    if (this.orderId) {
      this.orderService.deleteOrder(this.orderId).subscribe(
        () => {
          console.log('Pedido eliminado');
        },
        (error) => {
          console.error('Error al eliminar el pedido:', error);
        }
      );
    } else {
      console.error('El ID del pedido no puede estar vacío');
    }
  }
}
