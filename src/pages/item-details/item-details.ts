declare var google

import { Component, ViewChild } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  @ViewChild('googleMap') mapElement;
  googleMap: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    this.initMap()
  }

  initMap() {
    let latLng = new google.maps.LatLng(43.6532, -79.3832)

    let mapOptions = {
      center: latLng,
      zoom: 15
    }

    this.googleMap = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
  }
}
