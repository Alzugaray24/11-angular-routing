import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from '../home/home.component';
import { UserManagementComponent } from '../user-management/user-managment.component';
import { UserCreateComponent } from '../user-management/management/user-create/user-create.component';
import { UserListComponent } from '../user-management/management/user-list/user-list.component';
import { UserUpdateComponent } from '../user-management/management/user-update/user-update.component';
import { UserDeleteComponent } from '../user-management/management/user-delete/user-delete.component';
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
import { OrderUpdateComponent } from '../order-management/management/order-update/order-update.component';
import { OrderDeleteComponent } from '../order-management/management/order-delete/order-delete.component';
import { OrderListComponent } from '../order-management/management/order-list/order-list.component';

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
        component: UserManagementComponent,
        children: [
          {
            path: 'create',
            component: UserCreateComponent,
          },
          {
            path: 'list',
            component: UserListComponent,
          },
          {
            path: 'update',
            component: UserUpdateComponent,
          },
          {
            path: 'delete',
            component: UserDeleteComponent,
          },
        ],
      },
      {
        path: 'dishes',
        component: DishManagementComponent,
        children: [
          {
            path: 'create',
            component: DishCreateComponent,
          },
          {
            path: 'list',
            component: DishListComponent,
          },
          {
            path: 'update',
            component: DishUpdateComponent,
          },
          {
            path: 'delete',
            component: DishDeleteComponent,
          },
        ],
      },
      {
        path: 'menus',
        component: MenuManagementComponent,
        children: [
          {
            path: 'create',
            component: MenuCreateComponent,
          },
          {
            path: 'list',
            component: MenuListComponent,
          },
          {
            path: 'update',
            component: MenuUpdateComponent,
          },
          {
            path: 'delete',
            component: MenuDeleteComponent,
          },
        ],
      },
      {
        path: 'orders',
        component: OrderManagementComponent,
        children: [
          {
            path: 'create',
            component: OrderCreateComponent,
          },
          {
            path: 'list',
            component: OrderListComponent,
          },
          {
            path: 'update',
            component: OrderUpdateComponent,
          },
          {
            path: 'delete',
            component: OrderDeleteComponent,
          },
        ],
      },
    ],
  },
];
