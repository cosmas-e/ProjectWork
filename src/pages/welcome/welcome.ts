import {Component} from "@angular/core";
import {NavController, MenuController} from "ionic-angular";
import {RegisterPage} from "../register/register";
import {MainTabsPage} from "../main-tabs/main-tabs";
import { Geolocation } from '@ionic-native/geolocation';


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  lat: any;
  lng: any;

  constructor(public nav: NavController, public geo: Geolocation,  public menuCtrl: MenuController) {
    this.menuCtrl.swipeEnable(false);
  }

  ionViewDidLoad(){
    this.geo.getCurrentPosition().then ( pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
    }).catch( err => console.log(err));
  }

  // go to home page
  goHome() {
    this.nav.setRoot(MainTabsPage);
  }

  // go to sign up page
  signUp() {
    this.nav.setRoot(RegisterPage);
  }
}
