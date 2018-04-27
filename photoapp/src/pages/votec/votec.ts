import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VotecPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-votec',
  templateUrl: 'votec.html',
})
export class VotecPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('val12'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VotecPage');
  }

}
