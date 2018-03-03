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
  latLng: any;
  constructor(public navCtrl: NavController, public events: Events) {
    this.latLng = new google.maps.LatLng(50, 0);
  }

  newEvent = {
    name: undefined,
    category: undefined,
    date: undefined,
    time: undefined,
    description: undefined,
    address: undefined
  }

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

    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': address}, function(results, status) {
      if (status == 'OK') {
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });

    var latLng = new google.maps.LatLng(lat_lng[0], lat_lng[1])
    this.events.publish('newEvent', {title: name, category: category, icon: icon, startdate: date, latLng: latLng, starttime: time, categoryColor: '#78AB46', description: description})
    this.navCtrl.pop()
  }
}
