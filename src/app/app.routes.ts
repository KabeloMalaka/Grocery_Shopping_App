import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./pages/auth/sign-up/sign-up.page').then( m => m.SignUpPage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart.page').then( m => m.CartPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'order',
    loadComponent: () => import('./pages/order/order.page').then( m => m.OrderPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-user',
    loadComponent: () => import('./pages/auth/manage-user/manage-user.page').then( m => m.ManageUserPage),
    canActivate: [AuthGuard]
  },
];
