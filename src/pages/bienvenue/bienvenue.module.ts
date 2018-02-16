import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BienvenuePage } from './bienvenue';

@NgModule({
  declarations: [
    BienvenuePage,
  ],
  imports: [
    IonicPageModule.forChild(BienvenuePage),
  ],
})
export class BienvenuePageModule {}
