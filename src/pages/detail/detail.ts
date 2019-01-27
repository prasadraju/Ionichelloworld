import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public service: PropertyService) {

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  items = [
    'Bread',
    'Milk',
    'Cheese',
    'Snacks',
    'Apples',
    'Bananas',
    'Peanut Butter',
    'Chocolate',
    'Avocada',
    'Vegemite',
    'Muffins',
    'Paper towels'
];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }


}
