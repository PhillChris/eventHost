import { Component } from '@angular/core';

import { NavController, NavParams, Events } from 'ionic-angular';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';

import { ItemDetailsPage } from '../item-details/item-details';

 @Component({
  selector: 'page-event-menu',
  templateUrl: 'event-menu.html'
})
export class EventMenu {
  constructor(public navCtrl: NavController, public events: Events) {
  }
  newEvent = {
    name: undefined,
    description: undefined
  }

  makeEvent(event, name, description) {
    this.events.publish('newEvent', {title: 'PIZDEC', category: 'Education', icon: 'ios-star-outline', categoryColor: '#78AB46', description: 'cyka blyat'})
  }
}
