import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  managementOptions = [
    {
      title: 'Gestión de Usuarios',
      description: 'Administra los usuarios registrados en la plataforma.',
      route: '/users',
      icon: 'person',
    },
    {
      title: 'Gestión de Platos',
      description: 'Agrega, edita o elimina platos del menú.',
      route: '/dishes',
      icon: 'restaurant',
    },
    {
      title: 'Gestión del Menú',
      description: 'Crea y administra los menús disponibles.',
      route: '/menus',
      icon: 'menu_book',
    },
    {
      title: 'Gestión de Pedidos',
      description: 'Visualiza y gestiona los pedidos realizados.',
      route: '/orders',
      icon: 'shopping_cart',
    },
  ];

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
