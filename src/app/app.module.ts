import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {FormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { ChangePasswordComponent } from './admin/change-password/change-password.component';
import { ProductDetailsComponent } from './admin/product-details/product-details.component';
import { LogoutComponent } from './admin/logout/logout.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { RemoveProductComponent } from './admin/remove-product/remove-product.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    ChangePasswordComponent,
    ProductDetailsComponent,
    LogoutComponent,
    ShowProductComponent,
    RemoveProductComponent,
    HeaderFooterComponent,
    PaymentComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
