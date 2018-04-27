import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CompetitionPage} from "../competition/competition";
import {VotecPage} from "../votec/votec";

/**
 * Generated class for the UserEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-event',
  templateUrl: 'user-event.html',
})
export class UserEventPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('val'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserEventPage');
  }


  goToCevent(){
    this.navCtrl.push(VotecPage,{
     val12:'nnn'
    })
  }



}
