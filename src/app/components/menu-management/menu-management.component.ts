import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-management',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.scss'],
})
export class MenuManagementComponent {
  constructor(private router: Router) {}

  actions = [
    {
      title: 'Crear Menú',
      route: '/menus/create',
      description: 'Agregar un nuevo menú.',
    },
    {
      title: 'Listar Menús',
      route: '/menus/list',
      description: 'Ver la lista completa de menús.',
    },
    {
      title: 'Actualizar Menú',
      route: '/menus/update',
      description: 'Editar la información de un menú.',
    },
    {
      title: 'Eliminar Menú',
      route: '/menus/delete',
      description: 'Eliminar un menú existente.',
    },
  ];

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
