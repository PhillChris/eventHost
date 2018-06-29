declare var google

import { Component, ViewChild, getModuleFactory } from '@angular/core';

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
  @ViewChild('googleMap') mapElement;
  map;
  autocomplete;
  input;

  constructor(public navCtrl: NavController, public events: Events, public navParams: NavParams) {

  }

  ionViewDidLoad(){
    this.initMap();
    this.input = document.getElementById('pac-input');
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.input);
    this.autocomplete = new google.maps.places.Autocomplete(this.input);
    this.autocomplete.bindTo('bounds', this.map);
    var marker = new google.maps.Marker({
      map: this.map,
      anchorPoint: new google.maps.Point(0, -29),
      visible: false
    });
    var autocomplete = this.autocomplete
    var map = this.map
    this.autocomplete.addListener('place_changed', () => {
      marker.setVisible(false);
      var place = this.autocomplete.getPlace();
      if (!place.geometry) {
        window.alert('No details available for input');
        return;
      }
      if (place.geometry.viewport) {
        this.map.fitBounds(place.geometry.viewport);
      } else {
        this.map.setCenter(place.geometry.location);
        this.map.setzoom(17);
      }
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
    });
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: 43.6632, lng: -79.3936 },
      zoom: 15
    });
  }

  makeEvent(event, name, date, startTime, endTime, category, description) {
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
    var address = (<HTMLInputElement>document.getElementById('pac-input')).value
    var geocoder = new google.maps.Geocoder();
    var db = firebase.firestore()
    var startDateTime = new Date(date + ' ' + startTime);
    var endDateTime = new Date(date + ' ' + endTime);
    var creator = this.navParams.get('creator');
    geocoder.geocode( {'address' : address}, function(results, status) {
      if (status == 'OK') {
        var latlng = new firebase.firestore.GeoPoint(results[0].geometry.location.lat(), results[0].geometry.location.lng());
        db.collection('events').add({title: name, address: address, category: category, description: description, start: startDateTime, end: endDateTime, latlng: latlng, creator:
        creator, icon: icon});
      } else {
        alert('Geocoding failed. Reason:' + status);
      }
    });
    this.navCtrl.pop();
  }
}
