import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddphotoPage} from "../addphoto/addphoto";

/**
 * Generated class for the EventManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-manage',
  templateUrl: 'event-manage.html',
})
export class EventManagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(navParams.get('val9'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventManagePage');
  }


  gotoAdd(){
    this.navCtrl.push(AddphotoPage,{
      val13:'ddd'

    } ) }


}
