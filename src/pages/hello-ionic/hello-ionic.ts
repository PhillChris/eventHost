
declare var google

import { Component } from '@angular/core';

import { NavController, NavParams, Events } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { EventMenu } from '../event-menu/event-menu';

import firebase from 'firebase/app';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  icons: string[];
  items: any;
  categoryItems: Array<{title: string, category: string, startdate: string, starttime: string, latLng: any, categoryColor: string, icon: string, description: string}>;
  searchedItems: Array<{title: string, category: string, startdate: string, starttime: string, latLng: any, categoryColor: string, icon: string, description: string}>;
  categories: string[];
  categoryColors: string[];
  eventlist: any;

constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events ) {
    this.icons = ['ios-school-outline', 'ios-american-football-outline', 'ios-briefcase-outline',
    'ios-star-outline'];

    // Generates the sample event data displayed on the website

    let descriptions = ['A fun time.', 'Please to explain derivatives', 'Will pay for job', 'S M O A K  P A R A D I G M S', 'Who actually does this?']
    this.categoryColors = ['#78AB46', '#488aff', '#A9A9A9', '#FFD700']
    this.categories = ['Education', 'Leisure', 'Professional', 'Promoted']
    firebase.initializeApp({
      apiKey: 'AIzaSyChwrT1PnjHZ3eIuurYm6_gVmmj_zXVGA8',
      authDomain: 'eventhost-205623.firebaseapp.com',
      projectId: 'eventhost-205623'
    });
    this.items = []
    const firestore = firebase.firestore();
    firestore.settings({timestampsInSnapshots: true});
    this.eventlist = firestore.collection('events');
    this.eventlist.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log('pushing data', doc.data())
          this.items.push(doc.data());
          this.reset()
        });
      })
      .catch(err => {
        console.log('Error getting documents, ', err); 
      });


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
