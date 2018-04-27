import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VotecPage } from './votec';

@NgModule({
  declarations: [
    VotecPage,
  ],
  imports: [
    IonicPageModule.forChild(VotecPage),
  ],
})
export class VotecPageModule {}
