import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dish-management',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, HeaderComponent],
  templateUrl: './dish-managment.component.html',
  styleUrls: ['./dish-managment.component.scss'],
})
export class DishManagementComponent {
  constructor(private router: Router) {}

  actions = [
    {
      title: 'Crear Plato',
      route: '/dishes/create',
      description: 'Agregar un nuevo plato al menú.',
    },
    {
      title: 'Listar Platos',
      route: '/dishes/list',
      description: 'Ver la lista completa de platos.',
    },
    {
      title: 'Actualizar Plato',
      route: '/dishes/update',
      description: 'Editar la información de un plato.',
    },
    {
      title: 'Eliminar Plato',
      route: '/dishes/delete',
      description: 'Eliminar un plato existente.',
    },
  ];

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
