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

  // Fonction async pour l'appel de la camera
  async takePicture(){

    try {
      // Les Options de la Camera
      const options: CameraOptions = {
        quality: 75, // Résolution de l'image.
        allowEdit: true, // Condition qui laisse que l'utilisateur puisse modifier l'image avant de l'envoiyer.
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG, // Format JPEG.
        mediaType: this.camera.MediaType.PICTURE,
        targetWidth: 500, // Taille de largeur de l'image envoyé.
        targetHeight: 500, // Taille de l'hauteur de l'image envoyé.
        saveToPhotoAlbum: true, // Permet de sauvegarder l'image prisse dans l'album du cell.
        correctOrientation: true // Fait la correction automatique de la foto dans le serveur.
      }

      const result = await this.camera.getPicture(options);

      const image = `data:image/jpeg;base64,${result}`;

      const pictures = storage().ref('pictures/img');
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
