import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserEventPage } from './user-event';

@NgModule({
  declarations: [
    UserEventPage,
  ],
  imports: [
    IonicPageModule.forChild(UserEventPage),
  ],
})
export class UserEventPageModule {}
