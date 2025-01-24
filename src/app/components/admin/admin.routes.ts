import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from '../home/home.component';
import { UserManagmentComponent } from '../user-managment/user-managment.component';
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
        component: UserManagmentComponent,
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
