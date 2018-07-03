declare var google

import { Component } from '@angular/core';

import { NavController, NavParams, Events } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { EventMenu } from '../event-menu/event-menu';

import { LoginPage } from '../login-page/login-page';

import { CategoryMenu } from '../category-menu/category-menu';

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
  myEvents: Array<{title: string, category: string, startdate: string, starttime: string, latLng: any, categoryColor: string, icon: string, description: string}>
  categories: string[];
  categorySelected: string;
  categoryColors: string[];
  eventlist: any;
  userEmail: string;
  userStatus: string;

constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.icons = ['ios-school-outline', 'ios-american-football-outline', 'ios-briefcase-outline',
    'ios-star-outline'];

    // Generates the sample event data displayed on the website
    this.categoryColors = ['#78AB46', '#488aff', '#A9A9A9', '#FFD700']
    this.categories = ['Education', 'Leisure', 'Professional', 'Promoted']
    firebase.initializeApp({
      apiKey: 'AIzaSyChwrT1PnjHZ3eIuurYm6_gVmmj_zXVGA8',
      authDomain: 'eventhost-205623.firebaseapp.com',
      projectId: 'eventhost-205623'
    });
    this.userStatus = 'Not Logged In'
    this.categorySelected = 'All Categories'
    this.items = []
    const firestore = firebase.firestore();
    firestore.settings({timestampsInSnapshots: true});
    this.eventlist = firestore.collection('events');
    this.eventlist.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log('pushing data', doc.data());
          this.items.push(doc.data());
        });
        this.categoryItems = this.items.slice();
        this.searchedItems = this.items.slice();
      })
      .catch(err => {
        console.log('Error getting documents, ', err);
      });

    this.categoryItems = this.items.slice();
    this.searchedItems = this.items.slice();

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser.email);
        this.userEmail = firebaseUser.email;
        this.userStatus = "Logged in as " + this.userEmail;
      }
    });
    /*this.navCtrl.push(LoginPage);*/
  }

  getItems(searchbar: any) {
    var query = searchbar.target.value.toLowerCase();

    if (!query) {
      this.searchedItems = this.categoryItems;
      return;
    }

    this.searchedItems = []
    for(let i = 0; i < this.categoryItems.length; i++) {
      if (this.categoryItems[i].title.toLowerCase().includes(query)) {
        this.searchedItems.push(this.categoryItems[i]);
      }
    }
  }

  logout(event) {
    this.navCtrl.push(LoginPage)
  }

  createEvent(event) {
    this.navCtrl.push(EventMenu, {creator: this.userEmail});
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  categorySelect(event) {
    this.navCtrl.push(CategoryMenu, {
      rootPage: this
    });
  }

  updateFilter(category) {
    if (category !=  'All') {
      this.categoryItems = []
      for (let item of this.items) {
        if (item.category == category) {
           this.categoryItems.push(item)
         }
      }
      this.searchedItems = this.categoryItems.slice();
    } else {
      this.categoryItems = this.items.slice();
      this.searchedItems = this.items.slice();
    }
  }

  reset() {
    this.eventlist.get()
    .then(snapshot => {
      this.items = []
      snapshot.forEach(doc => {
        console.log('pushing data', doc.data());
        this.items.push(doc.data());
      });
      this.categoryItems = this.items.slice();
      this.searchedItems = this.items.slice();
    })
    .catch(err => {
      console.log('Error getting documents, ', err);
    });

    this.categoryItems = this.items.slice();
    this.searchedItems = this.items.slice();
  }
}
