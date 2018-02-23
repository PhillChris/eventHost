import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';

import { ItemDetailsPage } from '../item-details/item-details';

 @Component({
  selector: 'page-event-menu',
  templateUrl: 'event-menu.html'
})
export class EventMenu {
  constructor(public navCtrl: NavController) {
  }
  newEvent = {
    name: undefined,
    description: undefined
  }

  makeEvent(event, name, description) {
    console.log(hello-ionic.HelloIonicPage.items)
  }
}
