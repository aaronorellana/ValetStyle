import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
	@ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

 alert(message: string) {
  this.alertCtrl.create({
    title: 'Info!',
    subTitle: 'Il y a une erreur dans votre courriel ou mot de passe.',
    buttons: ['OK']
  }).present();
}

signInUser() {
  this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
  .then( data => {
    console.log('Informations recues', this.fire.auth.currentUser);
    this.alert('Super, Vous êtes connecter !');
    this.navCtrl.setRoot(TabsPage);
    // user est connecter
  })
  .catch( error => {
    console.log('il y a une erreur', error);
    this.alert(error.message);
  })
  console.log('Il est connecter', this.user.value, this.password.value);
}

}
