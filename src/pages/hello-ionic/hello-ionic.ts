import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  icons: string[];
  items: Array<{title: string, category: string, icon: string}>;
  categories: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['ios-school-outline', 'ios-briefcase-outline',
    'ios-star-outline', 'ios-american-football-outline'];

    this.items = [];
    this.items.push({title: 'CLUBHOUSE SOCIAL', category: 'Promoted', icon: this.icons[2]})
    this.items.push({title: 'Calculus Study Session', category: 'Education', icon: this.icons[0]})
    this.items.push({title: 'Networking Session', category: 'Professional', icon: this.icons[1]})
    this.items.push({title: 'LIT420 Office Hours', category: 'Education', icon: this.icons[0]})
    this.items.push({title: 'Winter Touch Football', category: 'Leisure', icon: this.icons[3]})
    /*for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Event ' + i,
        note: this.types[Math.floor(Math.random() * this.types.length)],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

}
