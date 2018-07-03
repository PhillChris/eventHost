declare var google

import { Component, ViewChild } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  @ViewChild('googleMap') mapElement;
  googleMap: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
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
    let alert = this.alertCtrl.create({
      title: 'Times',
      message: this.selectedItem.start + this.selectedItem.end,
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
