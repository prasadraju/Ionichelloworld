import {Component} from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';
import { NewsDetailPage } from '../newsdetail/newsdetail';
import { Http,Response } from '@angular/http';

@Component({
    selector: 'page-property-list',
    templateUrl: 'property-list.html'
})
export class PropertyListPage {

    properties: Array<any>;
    article:any="";

    constructor(public navCtrl: NavController, public service: PropertyService,private http:Http) {
        this.properties=service.getProperties();
    }

    // ngOnInit() {
    //     console.log("ngOnInit called");
    //     this.getUserData();
    // }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DetailPage');
        this.getUserData();
      }


    getUserData(){

        // this.http.get("https://newsapi.org/v1//articles?source=entertainment-weekly&sortBy=top&apiKey=df9dd2060b9f4f9ea26d8e3bde47eeb3").subscribe(

        this.http.get("https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=df9dd2060b9f4f9ea26d8e3bde47eeb3").subscribe(
        (res)=> {
         var msg:any=res.json();
        this.article=msg.articles;
          console.log(this.article);
        },
        (err)=>{
        var msg="problem connecting to the server! try again";
        }
        )
    }

    openPropertyDetail(art: any) {
        this.navCtrl.push(NewsDetailPage, art);
     }

    // openPropertyDetail(property: any) {
    //    this.navCtrl.push(NewsDetailPage, property);
    // }

}
