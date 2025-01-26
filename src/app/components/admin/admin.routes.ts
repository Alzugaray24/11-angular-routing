import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from '../home/home.component';
import { UserManagementComponent } from '../user-management/user-managment.component';
import { UserCreateComponent } from '../user-management/management/user-create/user-create.component'; // Nuevo componente para crear usuario
import { UserListComponent } from '../user-management/management/user-list/user-list.component'; // Nuevo componente para listar usuarios
import { UserUpdateComponent } from '../user-management/management/user-update/user-update.component'; // Nuevo componente para actualizar usuario
import { UserDeleteComponent } from '../user-management/management/user-delete/user-delete.component'; // Nuevo componente para eliminar usuario
import { DishManagementComponent } from '../dish-managment/dish-managment.component';
import { DishCreateComponent } from '../dish-managment/managment/dish-create/dish-create.component';
import { DishListComponent } from '../dish-managment/managment/dish-list/dish-list.component';
import { DishUpdateComponent } from '../dish-managment/managment/dish-update/dish-update.component';
import { DishDeleteComponent } from '../dish-managment/managment/dish-delete/dish-delete.component';
import { MenuManagementComponent } from '../menu-management/menu-management.component';
import { MenuCreateComponent } from '../menu-management/management/menu-create/menu-create.component';
import { MenuListComponent } from '../menu-management/management/menu-list/menu-list.component';
import { MenuUpdateComponent } from '../menu-management/management/menu-update/menu-update.component';
import { MenuDeleteComponent } from '../menu-management/management/menu-delete/menu-delete.component';
import { OrderManagementComponent } from '../order-management/order-management.component';
import { OrderCreateComponent } from '../order-management/management/order-create/order-create.component';
import { OrderListComponent } from '../order-management/management/order-list/order-list.component';
import { OrderUpdateComponent } from '../order-management/management/order-update/order-update.component';
import { OrderDeleteComponent } from '../order-management/management/order-delete/order-delete.component';
import { O } from '@angular/cdk/keycodes';

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
        component: DishManagementComponent,
        children: [
          {
            path: 'create', // Ruta para crear un plato
            component: DishCreateComponent,
          },
          {
            path: 'list', // Ruta para listar platos
            component: DishListComponent,
          },
          {
            path: 'update', // Ruta para actualizar un plato
            component: DishUpdateComponent,
          },
          {
            path: 'delete', // Ruta para eliminar un plato
            component: DishDeleteComponent,
          },
        ],
      },
      {
        path: 'menus',
        component: MenuManagementComponent,
        children: [
          {
            path: 'create', // Ruta para crear un menú
            component: MenuCreateComponent,
          },
          {
            path: 'list', // Ruta para listar menús
            component: MenuListComponent,
          },
          {
            path: 'update', // Ruta para actualizar un menú
            component: MenuUpdateComponent,
          },
          {
            path: 'delete', // Ruta para eliminar un menú
            component: MenuDeleteComponent,
          },
        ],
      },
      {
        path: 'orders',
        component: OrderManagementComponent,
        children: [
          {
            path: 'create', // Ruta para crear un pedido
            component: OrderCreateComponent,
          },
          {
            path: 'list', // Ruta para listar pedidos
            component: OrderListComponent,
          },
          {
            path: 'update', // Ruta para actualizar un pedido
            component: OrderUpdateComponent,
          },
          {
            path: 'delete', // Ruta para eliminar un pedido
            component: OrderDeleteComponent,
          },
        ],
      },
    ],
  },
];
