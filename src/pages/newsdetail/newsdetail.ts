import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-detail',
  templateUrl: 'newsdetail.html',
})
export class NewsDetailPage {
  art: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.art = this.navParams.data;
    //console.log('ionViewDidLoad DetailPage'+this.art);
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
