import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventinfoPage } from './eventinfo';


@NgModule({
  declarations: [
    EventinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(EventinfoPage),
  ],
})
export class EventinfoPageModule {}
