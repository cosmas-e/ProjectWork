import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';

import { LoginPage } from "../login/login";
import { RegisterPage } from "../register/register";

declare var google: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {

  @ViewChild('username') uname;
  @ViewChild('password') password;
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public platform: Platform) {
    platform.ready().then(()=> {
      this.initMap();
    })
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
  }

signIn() {
  this.navCtrl.push(LoginPage);
}

register() {
  this.navCtrl.push(RegisterPage);
}

}
