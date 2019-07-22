import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AsamLaksaComponent } from '../app/asam-laksa/asam-laksa.component';
import { KamHeongChickenComponent } from '../app/kam-heong-chicken/kam-heong-chicken.component';
import { MarmiteChickenComponent } from '../app/marmite-chicken/marmite-chicken.component';
import { SaltedEggBeefComponent } from '../app/salted-egg-beef/salted-egg-beef.component';
import { SpaghettiComponent } from '../app/spaghetti/spaghetti.component';
import { SzeChuanNoodlesComponent } from '../app/sze-chuan-noodles/sze-chuan-noodles.component';
import { MenuPageModule } from '../app/menu/menu.module';
import { MenuPage } from '../app/menu/menu.page';

const appRoutes: Routes = [
  { path: 'asamlaksak', component: AsamLaksaComponent },
  { path: 'KamHeongChicken', component: KamHeongChickenComponent },
  { path: 'MarmiteChicken', component: MarmiteChickenComponent },
  { path: 'SaltedEggBeef', component: SaltedEggBeefComponent },
  { path: 'SzeChuanNoodles', component: SzeChuanNoodlesComponent },
  { path: 'Spaghetti', component: SpaghettiComponent },
  { path: 'Menu', component: MenuPage}
  
];

@NgModule({
  declarations: [AppComponent,AsamLaksaComponent,KamHeongChickenComponent,MarmiteChickenComponent,SaltedEggBeefComponent,SpaghettiComponent,SzeChuanNoodlesComponent],
  entryComponents: [MenuPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),MenuPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
