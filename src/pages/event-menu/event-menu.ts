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
    var homePage = new HelloIonicPage(NavController, NavParams)
    homePage.items.push({title: name, category: 'Education', categoryColor: '#78AB46', icon: 'ios-school-outline', description: description})
    homePage.categoryItems.push({title: name, category: 'Education', categoryColor: '#78AB46', icon: 'ios-school-outline', description: description})
    homePage.searchedItems.push({title: name, category: 'Education', categoryColor: '#78AB46', icon: 'ios-school-outline', description: description})
    this.navCtrl.pop()
  }
}
