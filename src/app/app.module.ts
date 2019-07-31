import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MenuPageModule } from '../app/menu/menu.module';
import { MenuPage } from '../app/menu/menu.page';
import { OrderComponent } from '../app/order/order.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './services/product.service';
import { CheckoutComponent } from './checkout/checkout.component';

const appRoutes: Routes = [

  { path: 'Menu', component: MenuPage},
  { path: 'Order', component: OrderComponent},
  { path: 'Order/:id', component: OrderComponent},
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  declarations: [AppComponent,OrderComponent,ProductDetailsComponent,CheckoutComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),MenuPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    ProductService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
