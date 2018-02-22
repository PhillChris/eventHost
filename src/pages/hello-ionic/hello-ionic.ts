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
  selectedItems: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    this.types = ['Games', 'Study Group', 'Types'];
    this.initializeItems();
  }

  initializeItems() {
    this.items = [];
    this.selectedItems = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Event ' + i,
        note: this.types[Math.floor(Math.random() * this.types.length)],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    for(let i = 0; i < 10; i++) {
      this.selectedItems.push(this.items[i])
    }
  }

  getItems(searchbar: any) {
    var query = searchbar.target.value.toLowerCase();

    if (!query) {
      this.selectedItems = this.items
      return;
    }

    this.selectedItems = []
    for(let i = 0; i < this.items.length; i++) {
      if (this.items[i].title.toLowerCase().includes(query)) {
        this.selectedItems.push(this.items[i]);
      }
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

}
