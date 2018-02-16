import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BienvenuePage } from '../pages/bienvenue/bienvenue';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';


const firebaseAuth = {
  apiKey: "AIzaSyA-XA6GC8FSl6lCG0G4wV5xZQz5uZ3xqUc",
  authDomain: "valetstyle-ec971.firebaseapp.com",
  databaseURL: "https://valetstyle-ec971.firebaseio.com",
  projectId: "valetstyle-ec971",
  storageBucket: "valetstyle-ec971.appspot.com",
  messagingSenderId: "977489922962"
};

@NgModule({
  declarations: [
    MyApp,
    BienvenuePage,
    SignupPage,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BienvenuePage,
    SignupPage,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
