import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-order-management',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, HeaderComponent],
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss'],
})
export class OrderManagementComponent {
  orderId: number | null = null;

  constructor(private router: Router) {}

  actions = [
    {
      title: 'Crear Pedido',
      route: '/orders/create',
      description: 'Agregar un nuevo pedido.',
    },
    {
      title: 'Listar Pedidos',
      route: '/orders/list',
      description: 'Ver la lista completa de pedidos.',
    },
    {
      title: 'Actualizar Pedido',
      route: '/orders/update',
      description: 'Editar la información de un pedido.',
    },
    {
      title: 'Eliminar Pedido',
      route: '/orders/delete',
      description: 'Eliminar un pedido existente.',
    },
  ];

  navigateTo(route: string, id?: number) {
    if (id !== undefined && id !== null) {
      this.router.navigate([`${route}/${id}`]);
    } else {
      this.router.navigate([route]);
    }
  }
}
