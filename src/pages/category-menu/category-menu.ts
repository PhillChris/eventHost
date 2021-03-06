declare var google

import { Component } from '@angular/core';

import { NavController, NavParams, Events } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';

import { EventMenu } from '../event-menu/event-menu';

import { LoginPage } from '../login-page/login-page';

import firebase from 'firebase/app';

@Component({
  selector: 'page-category-menu',
  templateUrl: 'category-menu.html'
})

export class CategoryMenu {
  rootPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = navParams.get('rootPage');
  }

  submit(event, category) {
    this.rootPage.categoryTapped(event, category);
    this.navCtrl.pop();
  }
}
