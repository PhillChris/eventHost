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
    category: undefined,
    description: undefined
  }

  makeEvent(event, name, category, description) {
    console.log(category);
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

    this.events.publish('newEvent', {title: name, category: category, icon: icon, categoryColor: '#78AB46', description: description})
    this.navCtrl.pop()
  }
}
