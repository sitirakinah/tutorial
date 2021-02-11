import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment} from '../environments/environment';
import firebase from "firebase/app";
import { LogoComponent } from './component/logo/logo.component';
import { StartComponent } from './component/start/start.component';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { IonicStorageModule } from '@ionic/storage';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from './service/portfolio.service';

firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [AppComponent,LogoComponent,StartComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule],
  
  providers: [
    StatusBar,
    SplashScreen,
    PortfolioService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
