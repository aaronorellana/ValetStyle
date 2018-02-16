import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {

    @ViewChild('username') user;
    @ViewChild('password') password;
  
    constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad RegisterPage');
    }
  
    alert(message: string) {
      this.alertCtrl.create({
        title: 'Info!',
        subTitle: 'Il y a une erreur dans votre courriel.',
        buttons: ['OK']
      }).present();
    }
  
    registerUser() {
      this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
      .then(data => {
        console.log('informations recues ', data);
        this.alert('Votre compte est prêt !');
      })
      .catch(error => {
        console.log('Il y a une erreur ', error);
        this.alert(error.message);
      });
      console.log('Would register user with ', this.user.value, this.password.value);
    }
  
  }
