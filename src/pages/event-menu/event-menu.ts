declare var google

import { Component } from '@angular/core';

import { NavController, NavParams, Events } from 'ionic-angular';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';

import { ItemDetailsPage } from '../item-details/item-details';

import firebase from 'firebase';

 @Component({
  selector: 'page-event-menu',
  templateUrl: 'event-menu.html'
})
export class EventMenu {
  db: any;
  latLng: any;
  constructor(public navCtrl: NavController, public events: Events) {

  }

  makeEvent(event, name, date, startTime, endTime, category, description, address) {
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
    var geocoder = new google.maps.Geocoder();
    var db = firebase.firestore()
    var startDateTime = new Date(date + ' ' + startTime);
    var endDateTime = new Date(date + ' ' + endTime);
    geocoder.geocode( {'address' : address}, function(results, status) {
      if (status == 'OK') {
        var latlng = new firebase.firestore.GeoPoint(results[0].geometry.location.lat(), results[0].geometry.location.lng());
        db.collection('events').add({title: name, address: address, category: category, description: description, start: startDateTime, end: endDateTime, latlng: latlng});
      } else {
        alert('Geocoding failed. Reason:' + status);
      }
    });
    this.navCtrl.pop();
  }
}
