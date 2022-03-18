import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ShopComponent } from './shop/shop.component';
import {ItemCartComponent} from "./item-cart/item-cart.component";
import {OrderHistoryComponent} from "./order-history/order-history.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home',
      area: ''
    },
    // canActivate: true,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'shop',
        component: ShopComponent
      },
      {
        path: 'item-cart',
        component: ItemCartComponent
      },
      {
        path: 'all-oder-history',
        component: OrderHistoryComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
