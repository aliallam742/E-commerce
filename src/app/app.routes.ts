import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'public', loadChildren: () => import('./public/public-module').then(m => m.PublicModule) },
    { path: 'login', loadComponent: () => import('./feature/auth/login/login').then(c => c.Login) },
    { path: 'register', loadComponent: () => import('./feature/auth/register/register').then(c => c.Register) },
    { path: 'forget-password', loadComponent: () => import('./feature/auth/forget-password/forget-password').then(c => c.ForgetPassword) },
    { path: '', redirectTo: 'public', pathMatch: 'full' },

];
