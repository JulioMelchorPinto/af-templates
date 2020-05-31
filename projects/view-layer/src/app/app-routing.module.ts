import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '',redirectTo: '/dashboard',pathMatch: 'full',},
  {path: 'dashboard',loadChildren: () =>import('./dashboard/dashboard.module').then((m) => m.DashboardModule),},
  {path: 'users',loadChildren: () =>import('./users/users.module').then((m) => m.UsersModule),},
  {path: 'account',loadChildren: () =>import('./account/account.module').then((m) => m.AccountModule),},
  /* No layout routes */
  {path: 'login',loadChildren: () =>import('./login/login.module').then((m) => m.LoginModule),data: { showHeader: false, showSidebar: false }},
  {path: 'register',loadChildren: () =>import('./register/register.module').then((m) => m.RegisterModule),data: { showHeader: false, showSidebar: false }},
  /* Not found redirection */
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
