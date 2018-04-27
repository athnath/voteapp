import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {UsereventPage} from "../adminevents/adminevents";
import {UserEventPage} from "../user-event/user-event";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('val3'));
  }

  Event(){
    this.navCtrl.push(UserEventPage,{
      val4:'qwe'
    })

  }




}
