import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsDetailPage } from '../pages/newsdetail/newsdetail';
import { PropertyListPage } from '../pages/newslist/property-list';
import { HttpModule } from '@angular/http';
import {PropertyService} from "../providers/property-service-mock";
import { Contacts} from '@ionic-native/contacts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsDetailPage,
    PropertyListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsDetailPage,
    PropertyListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PropertyService,
 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
