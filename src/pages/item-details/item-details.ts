declare var google

import { Component, ViewChild } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import firebase from 'firebase/app';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  userEmail: string;
  @ViewChild('googleMap') mapElement;
  googleMap: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.userEmail = navParams.get('userEmail');
  }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap() {
    const latLng = new google.maps.LatLng(this.selectedItem.latlng.latitude, this.selectedItem.latlng.longitude);

    let mapOptions = {
      center: latLng,
      zoom: 15
    };

    this.googleMap = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    var marker = new google.maps.Marker({
      position: latLng,
      map: this.googleMap,
      title: 'Hello World!'
    });

    marker.setMap(this.googleMap);
  }

  attendEvent(event) {
    /* IN PROGRESS
    const firestore = firebase.firestore();
    firestore.settings({timestampsInSnapshots: true});
    firestore.collection('events').doc(selectedItem.id).get().then(doc => {
        var oldArray = doc.
    });*/

    this.navCtrl.pop();
  }

  displayDescription(event) {
    let alert = this.alertCtrl.create({
      title: 'Description',
      message: this.selectedItem.description,
      buttons: ['Got it!']
    });
    alert.present();
  }

  displayDate(event) {
    let startMillisecs = this.selectedItem.start.seconds * 1000;
    let endMillisecs = this.selectedItem.end.seconds * 1000;
    let startDate = new Date(startMillisecs);
    let endDate = new Date(endMillisecs);

    let alert = this.alertCtrl.create({
      title: 'Times',
      message: 'From ' + startDate.toUTCString() + ' to ' + endDate.toUTCString() + '!',
      buttons: ['Got it!']
    });
    alert.present();
  }

  displayAddress(event) {
    let alert = this.alertCtrl.create({
      title: 'Address',
      message: this.selectedItem.address,
      buttons: ['Got it!']
    });
    alert.present();
  }
}
