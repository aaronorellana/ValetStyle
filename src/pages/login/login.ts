import {NavController, AlertController, LoadingController, Tabs} from 'ionic-angular';
import {Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Auth} from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import {RegisterPage} from '../register/register';
import {ForgotPage} from '../forgot/forgot';
import {HomePage} from '../home/home';
import {TabsPage} from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: any;
  public loadingController;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;
  

  constructor(public nav: NavController, public authData: Auth, public formBuilder: FormBuilder,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController, private auth: AngularFireAuth) {
    this.nav = nav;
    this.authData = authData;

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
    
    auth.auth.onAuthStateChanged(
      function(user) {
        if(user){ 
        //console.log("User is logged in: " + JSON.stringify(user));
        nav.setRoot(TabsPage);
      }
      }
    );
  }
  
  elementChanged(input){
    let field = input.inputControl.name;
    this[field + "Changed"] = true;
  }

  loginUser(event){
  event.preventDefault();
  this.submitAttempt = true;
  if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
  this.loadingController = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
  
  this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password).then((authData: any) => {
    console.log(authData.uid);
    this.loadingController.dismiss();
    this.nav.setRoot(TabsPage);
  }
  )
  .catch((error: any) => {
        if (error) {
          this.loadingController.dismiss();
          let alert = this.alertCtrl.create({
              message: "Problème avec l'authentification.",
              buttons: [
                {
                  text: "Ok",
                  role: 'Annuler'
                }
              ]
            });
            alert.present();
          console.log("Error:" + error.code);
          
        }
      });
    }
  }

  goToSignup(){
    this.nav.push(RegisterPage);
  
  }

  goToResetPassword(){
  this.nav.push(ForgotPage);
  }

}