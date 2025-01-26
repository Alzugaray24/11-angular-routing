import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule para usar ngModel
import { OrderService } from '../../../../services/order/order.service'; // Ajusta la ruta según tu estructura de proyecto

@Component({
  selector: 'app-order-delete',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agrega FormsModule aquí
  templateUrl: './order-delete.component.html',
  styleUrls: ['./order-delete.component.scss'],
  providers: [OrderService], // Proporciona el servicio aquí si no está en el módulo raíz
})
export class OrderDeleteComponent {
  orderId: number = 0;

  constructor(private orderService: OrderService) {}

  deleteOrder() {
    if (this.orderId) {
      this.orderService.deleteOrder(this.orderId).subscribe(
        () => {
          console.log('Pedido eliminado');
          // Aquí puedes agregar lógica adicional, como mostrar un mensaje de éxito o redirigir a otra página
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
