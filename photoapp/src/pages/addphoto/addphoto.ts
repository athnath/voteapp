import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddphotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addphoto',
  templateUrl: 'addphoto.html',
})
export class AddphotoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('val13'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddphotoPage');
  }

}
