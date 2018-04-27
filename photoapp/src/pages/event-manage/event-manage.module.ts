import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventManagePage } from './event-manage';

@NgModule({
  declarations: [
    EventManagePage,
  ],
  imports: [
    IonicPageModule.forChild(EventManagePage),
  ],
})
export class EventManagePageModule {}
