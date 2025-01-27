import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navItems = [
    { path: '', label: 'Pagina Principal' },
    { path: '/users', label: 'Usuarios' },
    { path: '/dishes', label: 'Platos' },
    { path: '/menus', label: 'Menús' },
    { path: '/orders', label: 'Órdenes' },
  ];
}
