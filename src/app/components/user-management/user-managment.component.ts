import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.scss'],
})
export class UserManagementComponent {
  constructor(private router: Router) {}

  actions = [
    {
      title: 'Crear Usuario',
      route: '/users/create',
      description: 'Agregar un nuevo usuario al sistema.',
    },
    {
      title: 'Listar Usuarios',
      route: '/users/list',
      description: 'Ver la lista completa de usuarios.',
    },
    {
      title: 'Actualizar Usuario',
      route: '/users/update',
      description: 'Editar la información de un usuario.',
    },
    {
      title: 'Eliminar Usuario',
      route: '/users/delete',
      description: 'Eliminar un usuario existente.',
    },
  ];

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
