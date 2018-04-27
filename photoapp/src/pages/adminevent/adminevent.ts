import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CompetitionPage} from "../competition/competition";
import {EventDetailsPage} from "../event-details/event-details";

/**
 * Generated class for the AdmineventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminevent',
  templateUrl: 'adminevent.html',
})
export class AdmineventPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('val10'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmineventPage');
  }




  loadcompetition()
  {
    this.navCtrl.push(CompetitionPage,{
      val1:'xyz'
    })
  }



  goToPage(){
    this.navCtrl.push(EventDetailsPage,{
      val7:'asd'
    })

  }











}
