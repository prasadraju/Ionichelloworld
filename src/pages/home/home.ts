import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';
import { PropertyListPage } from '../newslist/property-list';

import {PropertyService} from '../../providers/property-service-mock';
import {newsdata} from "../../providers/newsdata";


//import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   
  constructor( public navCtrl: NavController,public alertCtrl: AlertController, public service: PropertyService) {


  }


  
    showAlert() {
      const alert = this.alertCtrl.create({
        title: 'New Friend!',
        subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
        buttons: ['OK']
      });
      alert.present();
    }

  submitMtd():void{
    //this.navCtrl.push(DetailPage) 
   
    //this.getNewsList();
    
    
   
    // this.navCtrl.push(PropertyListPage) 
    

  // let contact: Contact = this.contacts.create();
    
  //   contact.name = new ContactName(null, 'Smith', 'John');
  //   contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
  //   contact.save().then(
  //     () => console.log('Contact saved!', contact),
  //     (error: any) => console.error('Error saving contact.', error)
  //   );

    //this.showAlert();
  }


  _postsArray: newsdata[];
  // API call to get country list
  public getNewsList() {
    // call service for get country list
    this.service.getNewsList()
      .subscribe(response => {
        this._postsArray=response;
        console.log("result:" + this._postsArray); 
      }, error => {
              console.log("error:" + error);
         });
  }

  

  //https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=df9dd2060b9f4f9ea26d8e3bde47eeb3

}
