import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  types: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['ios-school-outline', 'ios-briefcase-outline',
    'ios-star-outline', 'ios-american-football-outline'];
    this.types = ['Games', 'Study Group', 'Types'];

    this.items = [];
    /*this.items.push({title: 'Study Session', , icon: })*/
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Event ' + i,
        note: this.types[Math.floor(Math.random() * this.types.length)],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

}
