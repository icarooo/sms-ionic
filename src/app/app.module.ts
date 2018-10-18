import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SMS } from '@ionic-native/sms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClientesPage } from '../pages/clientes/clientes';
import { ClientespopoverPage } from '../pages/clientespopover/clientespopover';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';

import { OneSignal } from '@ionic-native/onesignal';

@NgModule({
  declarations: [
  MyApp,
  HomePage,
  ClientesPage,
  ClientespopoverPage
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
  ClientesPage,
  ClientespopoverPage
  ],
  providers: [
  StatusBar,
  SplashScreen,
  OneSignal,
  SMS,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
  
  ]
})
export class AppModule {}
