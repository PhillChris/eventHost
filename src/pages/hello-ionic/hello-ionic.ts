import { Component } from '@angular/core';

import { NavController, NavParams, Events } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { EventMenu } from '../event-menu/event-menu';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  icons: Any;
  items: Array<{title: string, category: string, categoryColor: string, icon: string, description: string}>;
  categoryItems: Array<{title: string, category: string, categoryColor: string, icon: string, description: string}>;
  searchedItems: Array<{title: string, category: string, categoryColor: string, icon: string, description: string}>;
  categories: string[];
  categoryColors: string[];

constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events ) {
    this.icons = {'Education': 'ios-school-outline',
     'Professional': 'ios-briefcase-outline',
     'Leisure': 'ios-american-football-outline',
     'Promoted': 'ios-star-outline'};

    // Generates the sample event data displayed on the website

    let descriptions = ['A fun time.', 'Please to explain derivatives', 'Will pay for job', 'S M O A K  P A R A D I G M S', 'Who actually does this?']
    this.categoryColors = ['#78AB46', '#488aff', '#A9A9A9', '#FFD700']
    this.categories = ['Education', 'Leisure', 'Professional', 'Promoted']

    this.items = [];
    this.items.push({title: 'CLUBHOUSE SOCIAL', category: this.categories[3], icon: this.icons['Promoted'], categoryColor: this.categoryColors[3], description: descriptions[0]});
    this.items.push({title: 'Calculus Study Session', category: this.categories[0], icon: this.icons['Education'], categoryColor: this.categoryColors[0], description: descriptions[1]});
    this.items.push({title: 'Networking Session', category: this.categories[2], icon: this.icons['Professional'], categoryColor: this.categoryColors[2], description: descriptions[2]});
    this.items.push({title: 'LIT420 Office Hours', category: this.categories[0], icon: this.icons['Education'], categoryColor: this.categoryColors[0], description: descriptions[3]});
    this.items.push({title: 'Winter Touch Football', category: this.categories[1], icon: this.icons['Recreation'], categoryColor: this.categoryColors[1], description: descriptions[4]});

    this.categoryItems = this.items.slice();
    this.searchedItems = this.items.slice();

    this.events.subscribe('newEvent', eventInfo => {
    this.items.push(eventInfo)
    this.reset()
    })
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

  categoryTapped(event, category) {
    this.categoryItems = []
    for (let item of this.items) {
      if (item.category === category) {
         this.categoryItems.push(item)
       }
    }
    this.searchedItems = this.categoryItems.slice();
  }


  reset() {
    this.categoryItems = this.items.slice();
    this.searchedItems = this.items.slice();
  }
}
