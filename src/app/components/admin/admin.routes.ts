import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from '../home/home.component';
import { UserManagementComponent } from '../user-management/user-managment.component';
import { UserCreateComponent } from '../user-management/management/user-create/user-create.component'; // Nuevo componente para crear usuario
import { UserListComponent } from '../user-management/management/user-list/user-list.component'; // Nuevo componente para listar usuarios
import { UserUpdateComponent } from '../user-management/management/user-update/user-update.component'; // Nuevo componente para actualizar usuario
import { UserDeleteComponent } from '../user-management/management/user-delete/user-delete.component'; // Nuevo componente para eliminar usuario
import { DishManagmentComponent } from '../dish-managment/dish-managment.component';
import { MenuManagmentComponent } from '../menu-managment/menu-managment.component';
import { OrderManagmentComponent } from '../order-managment/order-managment.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'users',
        component: UserManagementComponent, // Componente principal de gestión de usuarios
        children: [
          {
            path: 'create', // Ruta para crear un usuario
            component: UserCreateComponent,
          },
          {
            path: 'list', // Ruta para listar usuarios
            component: UserListComponent,
          },
          {
            path: 'update', // Ruta para actualizar un usuario
            component: UserUpdateComponent,
          },
          {
            path: 'delete', // Ruta para eliminar un usuario
            component: UserDeleteComponent,
          },
        ],
      },
      {
        path: 'dishes',
        component: DishManagmentComponent,
      },
      {
        path: 'menus',
        component: MenuManagmentComponent,
      },
      {
        path: 'orders',
        component: OrderManagmentComponent,
      },
    ],
  },
];
