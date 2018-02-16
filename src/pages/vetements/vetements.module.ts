import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VetementsPage } from './vetements';

@NgModule({
  declarations: [
    VetementsPage,
  ],
  imports: [
    IonicPageModule.forChild(VetementsPage),
  ],
})
export class VetementsPageModule {}
