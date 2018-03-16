import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Auth} from '../../providers/auth/auth';
import {LoginPage} from '../login/login';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //private rootPage: any = StartPage;

  constructor( private camera: Camera, public nav: NavController, public authData: Auth) {
    this.authData = authData;
  }

  // Fonction pour l'appel de la camera
  async takePicture(){

    try {
      // Les Options de la Camera
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true
      }

      const result = await this.camera.getPicture(options);

      const image = 'data:image/jpeg;base64,${'+result+'}';

      const pictures = storage().ref('pictures/');
      pictures.putString(image, 'data_url');

    } catch (error) {
      console.error(error);
    }
  }

  logOut(){
    this.authData.logoutUser().then(() => {
      window.location.reload();
      this.nav.setRoot(LoginPage);
    });
  }
}
