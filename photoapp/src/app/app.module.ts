import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import {UserEventPage} from "../pages/UserEventPage/UserEventPage";
import {CompetitionPage} from "../pages/competition/competition";
import {ItemsPage} from "../pages/items/items";
import {SignupPage} from "../pages/signup/signup";
import {CreateeventPage} from "../pages/createevent/createevent";
import {EventDetailsPage} from "../pages/event-details/event-details";
import {EventinfoPage} from "../pages/eventinfo/eventinfo";
import {EventManagePage} from "../pages/event-manage/event-manage";
import {UserEventPage} from "../pages/user-event/user-event";
import {AdmineventPage} from "../pages/adminevent/adminevent";
import {VotecPage} from "../pages/votec/votec";
import {AddphotoPage} from "../pages/addphoto/addphoto";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    CompetitionPage,
    ItemsPage,
    CreateeventPage,
    EventDetailsPage,
    EventinfoPage,
    EventManagePage,
    UserEventPage,
    AdmineventPage,
    VotecPage,
    AddphotoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    CompetitionPage,
    ItemsPage,
    CreateeventPage,
    EventDetailsPage,
    EventinfoPage,
    EventManagePage,
    UserEventPage,
    AdmineventPage,
    VotecPage,
    AddphotoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
