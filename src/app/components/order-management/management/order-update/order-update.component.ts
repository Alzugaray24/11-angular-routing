import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../../services/order/order.service';
import { OrderRequestDTO } from '../../../../interfaces/order/order.request.interface';
import { OrderResponseDTO } from '../../../../interfaces/order/order.response.interface';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-update',
  imports: [CommonModule, FormsModule],
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.scss'],
})
export class OrderUpdateComponent implements OnInit {
  orderId: number | null = null;
  order: OrderResponseDTO | undefined;
  customerId: number = 0;
  dishIds: string = '';

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.orderId = Number(params.get('id'));
      if (this.orderId) {
        this.orderService.getOrderById(this.orderId).subscribe((order) => {
          this.order = order;
          this.customerId = order.customer.id;
          this.dishIds = order.dishes.map((dish) => dish.id).join(',');
        });
      }
    });
  }

  updateOrder() {
    if (this.orderId !== null) {
      const dishIdsArray = this.dishIds
        .split(',')
        .map((id) => parseInt(id.trim(), 10));
      const orderRequest: OrderRequestDTO = {
        customerId: this.customerId,
        dishIds: dishIdsArray,
      };

      this.orderService
        .updateOrder(this.orderId, orderRequest)
        .subscribe(() => {
          console.log('Pedido actualizado correctamente');
          this.router.navigate(['/orders']);
        });
    }
  }
}
