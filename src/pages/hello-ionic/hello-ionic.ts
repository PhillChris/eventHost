import { Component } from '@angular/core';

import { NavController, NavParams, Events } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { EventMenu } from '../event-menu/event-menu';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  icons: string[];
  items: Array<{title: string, category: string, categoryColor: string, icon: string, description: string}>;
  categoryItems: Array<{title: string, category: string, categoryColor: string, icon: string, description: string}>;
  searchedItems: Array<{title: string, category: string, categoryColor: string, icon: string, description: string}>;
  categories: string[];
  categoryColors: string[];

constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events ) {
    this.icons = ['ios-school-outline', 'ios-american-football-outline', 'ios-briefcase-outline',
    'ios-star-outline'];

    // Generates the sample event data displayed on the website

    let descriptions = ['A fun time.', 'Please to explain derivatives', 'Will pay for job', 'S M O A K  P A R A D I G M S', 'Who actually does this?']
    this.categoryColors = ['#78AB46', '#488aff', '#A9A9A9', '#FFD700']
    this.categories = ['Education', 'Leisure', 'Professional', 'Promoted']

    this.items = [];
    this.items.push({title: 'Board Game Night', category: this.categories[3], icon: this.icons[2], categoryColor: this.categoryColors[3], description: "Planning to play Scythe, Cosmic Encounter, and Diplomacy. Players with any level of experience are welcome."})
    this.items.push({title: 'Very Fun Party', category: this.categories[3], icon: this.icons[2], categoryColor: this.categoryColors[3], description: "This will be the best party ever, I assure you."})
    this.items.push({title: 'MAT137 Study Session', category: this.categories[0], icon: this.icons[0], categoryColor: this.categoryColors[0], description: 'Studying MAT137 in preperation for the upcoming midterm. We cannot dissapoint Alfonso.'})
    this.items.push({title: 'Careers in Finance - Information and Networking', category: this.categoris[2], icon: this.icons[1], categoryColor: this.categoryColors[2], description: 'Learn some very boring things about finance that will make you rich.'})
    this.items.push({title: 'Introduction to Machine Learning', category: this.categories[0], icon: this.icons[0], categoryColor: this.categoryColors[0], description: 'Learn the basics of neural networks! No prior knowledge required. Held in BA1160.'})
    this.items.push({title: 'Winter Touch Football', category: this.categories[1], icon: this.icons[3], categoryColor: this.categoryColors[1], description: 'Touch football, but with snow all over the place. These have the potential to devolve into snowball fights, which are still fun. Approximately 12 players required.'})
    this.items.push({title: 'CSC240 Midterm Prep', category: this.categories[0], icon: this.icons[0], categoryColor: this.categoryColors[0], description: 'A CSSU-hosted group preparation session for the CSC240 midterm. Hopefully we can get more than 4/30 on this one.'})
    this.items.push({title: 'Entrepreneur Meetup', category: this.categoris[2], icon: this.icons[1], categoryColor: this.categoryColors[2], description: 'A networking and knowledge sharing session for entrereneurs of Toronto.'})
    this.items.push({title: 'Russian Language Exchange', category: this.categories[0], icon: this.icons[0], categoryColor: this.categoryColors[0], description: 'Russian speakers learning English and English speakers learning Russian are invited to meet up and practice their language skills with each other.'})
    this.items.push({title: 'Community Centre Dodgeball Game', category: this.categories[1], icon: this.icons[3], categoryColor: this.categoryColors[1], description: 'Come play dodgeball at the community centre! It will be fun!'})


    this.categoryItems = this.items.slice();
    this.searchedItems = this.items.slice();

    this.events.subscribe('newEvent', eventInfo => {
    this.items.push(eventInfo)
    this.reset()

    console.log(this.items)
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
