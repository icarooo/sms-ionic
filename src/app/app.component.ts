import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ClientesPage } from '../pages/clientes/clientes';
import { ClientespopoverPage } from '../pages/clientespopover/clientespopover';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = HomePage;
  
  pages: Array<{title: string, component: any}>;

  constructor(private _notification: OneSignal,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
   this.pages = [
   { title: 'Clientes', component: HomePage },
   { title: 'SMS', component: ClientesPage }
   ];
   platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
 }
 openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  /*initializeApp() {
    this.platform.ready().then(() => {
      this._notification.startInit("105f2f59-0c93-4755-8039-7f4d27fedb91", "1012758352662");
      this._notification.inFocusDisplaying(this._notification.OSInFocusDisplayOption.Notification);
      this._notification.setSubscription(true);
      this._notification.handleNotificationReceived().subscribe(() => {
            // your code after Notification received.
          });
      this._notification.handleNotificationOpened().subscribe(() => {
            // your code to handle after Notification opened
          });
      this._notification.endInit();
    })
  }*/
}

