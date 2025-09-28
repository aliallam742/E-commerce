import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'public', loadChildren: () => import('./public/public-module').then(m => m.PublicModule) },
    { path: 'login', loadComponent: () => import('./auth/login/login').then(c => c.Login) },
    { path: 'register', loadComponent: () => import('./auth/register/register').then(c => c.Register) },
    { path: 'forget-password', loadComponent: () => import('./auth/forget-password/forget-password').then(c => c.ForgetPassword) },
    { path: '', redirectTo: 'public', pathMatch: 'full' },

];
