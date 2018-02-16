import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ForgotPage } from '../pages/forgot/forgot';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Auth } from '../providers/auth/auth';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Code de FireBase
export const firebaseConfig = {
  apiKey: "AIzaSyA-XA6GC8FSl6lCG0G4wV5xZQz5uZ3xqUc",
  authDomain: "valetstyle-ec971.firebaseapp.com",
  databaseURL: "https://valetstyle-ec971.firebaseio.com",
  projectId: "valetstyle-ec971",
  storageBucket: "valetstyle-ec971.appspot.com",
  messagingSenderId: "977489922962"
};


@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ForgotPage,
    RegisterPage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ForgotPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Auth
  ]
})
export class AppModule { }
