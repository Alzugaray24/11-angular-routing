import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule para usar ngModel
import { OrderService } from '../../../../services/order/order.service'; // Ajusta la ruta según tu estructura de proyecto

@Component({
  selector: 'app-order-create',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agrega FormsModule aquí
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss'],
  providers: [OrderService], // Proporciona el servicio aquí si no está en el módulo raíz
})
export class OrderCreateComponent {
  customerId: number = 0;
  dishIds: string = ''; // Usamos un string para capturar los IDs separados por comas

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
