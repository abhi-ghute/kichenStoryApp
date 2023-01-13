import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './admin/change-password/change-password.component';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'admin', children: [
      { path: 'login', component: LoginComponent },
      {path:'changePassword',component:ChangePasswordComponent},
    ]
  },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
