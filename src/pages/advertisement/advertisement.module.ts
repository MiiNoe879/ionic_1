import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvertisementPage } from './advertisement';

@NgModule({
  declarations: [
    AdvertisementPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvertisementPage),
  ],
  exports: [
    AdvertisementPage
  ]
})
export class AdvertisementPageModule {}
