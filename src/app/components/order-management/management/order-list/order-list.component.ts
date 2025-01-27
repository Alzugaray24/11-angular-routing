import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from '../../../../services/order/order.service';
import { OrderResponseDTO } from '../../../../interfaces/order/order.response.interface';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  orders$: Observable<OrderResponseDTO[]> | undefined;
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders$ = this.orderService.getAllOrders().pipe(
      tap({
        next: (data) => {
          console.log('Pedidos cargados:', data);
          this.message = 'Pedidos cargados exitosamente';
          this.messageType = 'success';
        },
        error: (error) => {
          console.error('Error al cargar los pedidos:', error);
          this.message = 'Error al cargar los pedidos';
          this.messageType = 'error';
        },
      })
    );
  }
}
