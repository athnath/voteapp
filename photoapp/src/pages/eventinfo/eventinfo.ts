import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventinfo',
  templateUrl: 'eventinfo.html',
})
export class EventinfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('val8'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventinfoPage');
  }

}
