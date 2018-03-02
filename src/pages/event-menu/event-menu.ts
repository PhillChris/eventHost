import { Component } from '@angular/core';

import { NavController, NavParams, Events } from 'ionic-angular';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';

import { ItemDetailsPage } from '../item-details/item-details';

 @Component({
  selector: 'page-event-menu',
  templateUrl: 'event-menu.html'
})
export class EventMenu {
    icons: Any;

  constructor(public navCtrl: NavController, public events: Events) {
    this.icons = {'Education': 'ios-school-outline',
     'Professional': 'ios-briefcase-outline',
     'Leisure': 'ios-american-football-outline',
     'Promoted': 'ios-star-outline'};
  }
  newEvent = {
    name: undefined,
    description: undefined,
    category: undefined
  }

  makeEvent(event, name, category, description) {
    this.events.publish('newEvent', {title: name, category: icons[category],
       icon: category, categoryColor: '#78AB46', description: description});
    this.navCtrl.pop()
  }
}
