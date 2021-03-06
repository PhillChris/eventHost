declare var google

import { Component } from '@angular/core';

import { NavController, NavParams, Events } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { EventMenu } from '../event-menu/event-menu';

import {HelloIonicPage} from '../hello-ionic/hello-ionic'

import firebase from 'firebase/app';

@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html'
})

export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {

  }

  login(event, user, pass) {

    const nav = this.navCtrl;

    firebase.auth().signInWithEmailAndPassword(user, pass)
    .then(login => {
      nav.pop();
    })
    .catch(error => {
      alert("Error: " + error);
    });

  }
}
