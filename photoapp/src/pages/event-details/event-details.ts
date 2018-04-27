import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EventinfoPage} from "../eventinfo/eventinfo";
import {EventManagePage} from "../event-manage/event-manage";

/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('val7'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
  }

  loadinfo()
  {
    this.navCtrl.push(EventinfoPage, {
      val8: 'uiu'
    })

  }


  loadeventmanage()
  {
    this.navCtrl.push(EventManagePage,{
      val9:'nnn'
    })
  }



}
