
declare var google

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
  items: Array<{title: string, category: string, startdate: string, starttime: string, latLng: any, categoryColor: string, icon: string, description: string}>;
  categoryItems: Array<{title: string, category: string, startdate: string, starttime: string, latLng: any, categoryColor: string, icon: string, description: string}>;
  searchedItems: Array<{title: string, category: string, startdate: string, starttime: string, latLng: any, categoryColor: string, icon: string, description: string}>;
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
    this.items.push({title: 'Board Game Night', category: this.categories[3], icon: this.icons[3], starttime: '17:30', latLng: new google.maps.LatLng(43.669124, -79.397698), startdate: '2018-03-04', categoryColor: this.categoryColors[3], description: 'Planning to play Scythe, Cosmic Encounter, and Diplomacy. Players with any level of experience are welcome.'})
    this.items.push({title: 'Very Fun Party', category: this.categories[3], icon: this.icons[3], starttime: '20:00', latLng: new google.maps.LatLng(43.688276, -79.348225), startdate: '2018-03-04', categoryColor: this.categoryColors[3], description: 'This will be the best party ever, I assure you.'})
    this.items.push({title: 'Singles Tennis Tournament', category: this.categories[3], icon: this.icons[3], starttime: '9:00', latLng: new google.maps.LatLng(43.647456, -79.463010), startdate: '2018-03-04', categoryColor: this.categoryColors[3], description: 'Sign up for $10, play 12 rounds of tennis, and potentially win $200!'})
    this.items.push({title: 'Internet Governance Seminar', category: this.categories[3], icon: this.icons[3], starttime: '10:00', latLng: new google.maps.LatLng(43.663830, -79.395267), startdate: '2018-03-04', categoryColor: this.categoryColors[3], description: 'Join the University of Toronto\'s Internet Governance Forum and discuss critical issues in online governance.'})
    this.items.push({title: 'Community Centre Dodgeball Game', category: this.categories[1], icon: this.icons[1], starttime: '16:30', latLng: new google.maps.LatLng(43.654344, -79.398272), startdate: '2018-03-05', categoryColor: this.categoryColors[1], description: 'Come play dodgeball at the community centre! It will be fun!'})
    this.items.push({title: 'MAT137 Study Session', category: this.categories[0], icon: this.icons[0], starttime: '17:00', latLng: new google.maps.LatLng(43.669124, -79.397698), startdate: '2018-03-03', categoryColor: this.categoryColors[0], description: 'Studying MAT137 in preperation for the upcoming midterm. We cannot dissapoint Alfonso.'})
    this.items.push({title: 'Careers in Finance - Information and Networking', category: this.categories[2], icon: this.icons[2], latLng: new google.maps.LatLng(43.655930, -79.399570), starttime: '19:30', startdate: '2018-03-04', categoryColor: this.categoryColors[2], description: 'Learn some very boring things about finance that will make you rich.'})
    this.items.push({title: 'Introduction to Machine Learning', category: this.categories[0], icon: this.icons[0], starttime: '18:30', latLng: new google.maps.LatLng(43.669609, -79.380022), startdate: '2018-03-03', categoryColor: this.categoryColors[0], description: 'Learn the basics of neural networks! No prior knowledge required. Held in BA1160.'})
    this.items.push({title: 'Winter Touch Football', category: this.categories[1], icon: this.icons[1], starttime: '22:00', latLng: new google.maps.LatLng(43.669124, -79.377009), startdate: '2018-03-04', categoryColor: this.categoryColors[1], description: 'Touch football, but with snow all over the place. These have the potential to devolve into snowball fights, which are still fun. Approximately 12 players required.'})
    this.items.push({title: 'CSC240 Midterm Prep', category: this.categories[0], icon: this.icons[0], starttime: '21:30', latLng: new google.maps.LatLng(43.659618, -79.396921), startdate: '2018-03-03', categoryColor: this.categoryColors[0], description: 'A CSSU-hosted group preparation session for the CSC240 midterm. Hopefully we can get more than 4/30 on this one.'})
    this.items.push({title: 'Entrepreneur Meetup', category: this.categories[2], icon: this.icons[2], starttime: '17:30', latLng: new google.maps.LatLng(43.668501, -79.395968), startdate: '2018-03-03', categoryColor: this.categoryColors[2], description: 'A networking and knowledge sharing session for entrereneurs of Toronto.'})
    this.items.push({title: 'Russian Language Exchange', category: this.categories[0], icon: this.icons[0], starttime: '22:30', latLng: new google.maps.LatLng(43.666036, -79.407863), startdate: '2018-03-04', categoryColor: this.categoryColors[0], description: 'Russian speakers learning English and English speakers learning Russian are invited to meet up and practice their language skills with each other.'})
    this.items.push({title: 'Magic: The Gathering Tournament', category: this.categories[1], icon: this.icons[1], starttime: '16:00', latLng: new google.maps.LatLng(43.664721, -79.413183), startdate: '2018-03-05', categoryColor: this.categoryColors[1], description: 'This tournament consists of 8 rounds, has a $5 entry fee, and a $100 prize for the winner'})
    this.items.push({title: 'ECO102 Study Session', category: this.categories[0], icon: this.icons[0], starttime: '14:00', latLng: new google.maps.LatLng(43.664130, -79.398479), startdate: '2018-03-03', categoryColor: this.categoryColors[0], description: 'What even are spending multipliers? Come learn that with us!'})
    this.items.push({title: 'TU20 - Learn How to Get Hired', category: this.categories[2], icon: this.icons[2], latLng: new google.maps.LatLng(43.405350, -79.718846), starttime: '19:00', startdate: '2018-03-04', categoryColor: this.categoryColors[2], description: 'Learn how to use social media to network, make a resume, and succeed at interviews.'})
    this.items.push({title: 'Linguistics Program Fair', category: this.categories[0], icon: this.icons[0], starttime: '10:30', latLng: new google.maps.LatLng(43.661224, -79.394270), startdate: '2018-03-03', categoryColor: this.categoryColors[0], description: 'What is Linguistics, and why should you study it? Come to the program fair to learn about courses and opportunities in the linguistics department.'})
    this.items.push({title: 'Basketball Game', category: this.categories[1], icon: this.icons[1], starttime: '17:00', latLng: new google.maps.LatLng(43.667020, -79.398006), startdate: '2018-03-04', categoryColor: this.categoryColors[1], description: 'Very informal basketbal game, people of all skill levels welcome.'})
    this.items.push({title: 'LIN102 Exam Prep', category: this.categories[0], icon: this.icons[0], starttime: '15:00', latLng: new google.maps.LatLng(43.661896, -79.394176), startdate: '2018-03-03', categoryColor: this.categoryColors[0], description: 'Practice drawing trees, entailment, and thematic roles before the LIN102 exam!'})
    this.items.push({title: 'Entrepreneur Meetup', category: this.categories[2], icon: this.icons[2], starttime: '10:00', latLng: new google.maps.LatLng(43.651166, -79.381275), startdate: '2018-03-03', categoryColor: this.categoryColors[2], description: 'A networking and knowledge sharing session for entrereneurs of Toronto.'})
    this.items.push({title: 'Study Skills Seminar', category: this.categories[0], icon: this.icons[0], starttime: '16:30', latLng: new google.maps.LatLng(43.665768, -79.397671), startdate: '2018-03-04', categoryColor: this.categoryColors[0], description: 'Learn how to manage your time and develop healthy and effectice work habits!'})


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
