import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CreateeventPage} from "../createevent/createevent";
import {AdmineventPage} from "../adminevent/adminevent";

/**
 * Generated class for the ItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {

  ManageCategories: string = "competition";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('val5'));
  }


  loadeventcreate() {
    this.navCtrl.push(CreateeventPage, {
      val6: 'zzz'
    })
  }
    loadAdminEvent(){
       this.navCtrl.push(AdmineventPage,{
         val10:'mmm'
       })


    }








}
