import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from '../../../../services/order/order.service';
import { OrderResponseDTO } from '../../../../interfaces/order/order.response.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-list',
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  orders$: Observable<OrderResponseDTO[]> | undefined;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders$ = this.orderService.getAllOrders();
  }
}
