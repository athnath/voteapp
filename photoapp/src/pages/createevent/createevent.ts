import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreateeventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createevent',
  templateUrl: 'createevent.html',
})
export class CreateeventPage {



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('val6'));
  }


  public event={
    month:'2018-04-20`',
    timeStarts:'8.30',
    timeEnd:'2018-05-20'


  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateeventPage');
  }

}
