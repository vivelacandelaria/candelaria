import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrerPage } from './registrer';

@NgModule({
  declarations: [
    RegistrerPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrerPage),
  ],
})
export class RegistrerPageModule {}
