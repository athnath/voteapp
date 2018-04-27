import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {UserEventPage} from "../user-event/user-event";
import {SignupPage} from "../signup/signup";
import {ItemsPage} from "../items/items";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  load() {
    this.navCtrl.push(UserEventPage, {
      val: 'abc'

    })
  }

  SignUp(){
    this.navCtrl.push(SignupPage, {
      val3:'axc'

    })

  }

  loadEvents(){

    this.navCtrl.push(ItemsPage,{
      val5:'asc'
    })
  }


}
