declare var google

import { Component } from '@angular/core';

import { NavController, NavParams, Events } from 'ionic-angular';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';

import { ItemDetailsPage } from '../item-details/item-details';

 @Component({
  selector: 'page-event-menu',
  templateUrl: 'event-menu.html'
})
export class EventMenu {
  name: any;
  latLng: any;
  date: any;
  time: any;
  description: any;
  address: any;
  constructor(public navCtrl: NavController, public events: Events) {
    this.latLng = new google.maps.LatLng(43.612562, -79.753870);
  }

  updateLatLng(results, status)

  makeEvent(event, name, date, time, category, description, address) {
    var icons = ['ios-school-outline', 'ios-american-football-outline', 'ios-briefcase-outline', 'ios-star-outline'];
    var icon = undefined;
    if (category === 'Education') {
      icon = icons[0];
    } else if (category === 'Leisure') {
      icon = icons[1];
    } else if (category === 'Professional') {
      icon = icons[2];
    } else {
      icon = icons[3];
    }

    this.events.publish('newEvent', {title: name, category: category, icon: icon, description: description, startdate: date, starttime: time, latLng: this.latLng})
    this.navCtrl.pop()
  }
}
