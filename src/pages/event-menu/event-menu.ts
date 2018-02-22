import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

 @Component({
  selector: 'page-event-menu',
  templateUrl: 'event-menu.html'
})
export class EventMenu {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      
  }
}
