import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './admin/change-password/change-password.component';
import { LoginComponent } from './admin/login/login.component';
import { LogoutComponent } from './admin/logout/logout.component';
import { ProductDetailsComponent } from './admin/product-details/product-details.component';
import { RemoveProductComponent } from './admin/remove-product/remove-product.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { ShowProductComponent } from './show-product/show-product.component';

const routes: Routes = [
  {
    path: 'admin', children: [
      { path: 'login', component: LoginComponent },
      {path:'changePassword',component:ChangePasswordComponent},
      {path:'addProduct',component:ProductDetailsComponent},
      {path:'logout',component:LogoutComponent},
      {path:'remove',component:RemoveProductComponent}
    ]
  },
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'products/:id', component: ShowProductComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'confirm', component: ConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
