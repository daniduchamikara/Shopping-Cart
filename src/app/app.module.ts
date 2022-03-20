import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShopComponent } from './shop/shop.component';
import {ApiService} from './service/api.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { ItemCartComponent } from './item-cart/item-cart.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import {LoginComponent} from './login/login.component';
import { UserDetailsComponent } from './item-cart/user-details/user-details.component';
import { RegisterUserComponent } from './login/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    ShopComponent,
    ItemCartComponent,
    OrderHistoryComponent,
    LoginComponent,
    UserDetailsComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
