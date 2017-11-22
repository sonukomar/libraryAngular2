import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './components/books/books.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'books',
    component: BookComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
