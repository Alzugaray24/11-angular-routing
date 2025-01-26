import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-order-management',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss'],
})
export class OrderManagementComponent {
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

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
