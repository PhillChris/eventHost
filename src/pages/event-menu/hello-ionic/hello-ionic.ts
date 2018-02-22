import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { EventMenu } from '../event-menu/event-menu';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  icons: string[];
  items: Array<{title: string, category: string, icon: string, description: string}>;
  categoryItems: Array<{title: string, category: string, icon: string, description: string}>;
  searchedItems: Array<{title: string, category: string, icon: string, description: string}>;
  categories: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['ios-school-outline', 'ios-briefcase-outline',
    'ios-star-outline', 'ios-american-football-outline'];

    // Generates the sample event data displayed on the website

    let descriptions = ['A fun time.', 'Please to explain derivatives', 'Will pay for job', 'S M O A K  P A R A D I G M S', 'Who actually does this?']

    this.items = [];
    this.items.push({title: 'CLUBHOUSE SOCIAL', category: 'Promoted', icon: this.icons[2], description: descriptions[0]});
    this.items.push({title: 'Calculus Study Session', category: 'Education', icon: this.icons[0], description: descriptions[1]});
    this.items.push({title: 'Networking Session', category: 'Professional', icon: this.icons[1], description: descriptions[2]});
    this.items.push({title: 'LIT420 Office Hours', category: 'Education', icon: this.icons[0], description: descriptions[3]});
    this.items.push({title: 'Winter Touch Football', category: 'Leisure', icon: this.icons[3], description: descriptions[4]});

    this.categoryItems = this.items.slice();
    this.searchedItems = this.items.slice();
    /*for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Event ' + i,
        note: this.types[Math.floor(Math.random() * this.types.length)],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/
  }

  getItems(searchbar: any) {
    var query = searchbar.target.value.toLowerCase();

    if (!query) {
      this.searchedItems = this.categoryItems
      return;
    }

    this.searchedItems = []
    for(let i = 0; i < this.categoryItems.length; i++) {
      if (this.categoryItems[i].title.toLowerCase().includes(query)) {
        this.searchedItems.push(this.categoryItems[i]);
      }
    }
  }

  createEvent(event) {
    this.navCtrl.push(EventMenu)
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  categoryTapped(event, cat) {
    this.categoryItems = []
    for (let item of this.items) {
      if (item.category === cat) {
         this.categoryItems.push(item)
       }
    }
    this.searchedItems = this.categoryItems.slice();
  }

  reset(event) {
    this.categoryItems = this.items.slice();
    this.searchedItems = this.items.slice();
  }
}
