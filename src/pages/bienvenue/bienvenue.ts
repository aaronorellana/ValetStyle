import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';

/**
 * Generated class for the BienvenuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bienvenue',
  templateUrl: 'bienvenue.html',
})
export class BienvenuePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BienvenuePage');
  }

  /* Méthode pour aller ver la page désiré */
  login() {
    this.navCtrl.push(LoginPage);
  }

  /* Méthode pour aller ver la page désiré */
  signup() {
    this.navCtrl.push(SignupPage);
  }

}
