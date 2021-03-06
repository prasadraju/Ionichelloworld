import {Injectable} from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {newsdata} from "./newsdata";

@Injectable()
export class PropertyService {
    baseUrl:string;
    constructor(private http: Http) {
       
        this.baseUrl = "https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=df9dd2060b9f4f9ea26d8e3bde47eeb3";
    }

   properties: Array<any> = [
    {
        id: 1,
        address: "18 Henry st",
        city: "Cambridge",
        state: "MA",
        zip: "01742",
        price: "$975,000",
        title: "Stunning Victorian",
        bedrooms: 4,
        bathrooms: 3,
        long: -71.11095,
        lat: 42.35663,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house01.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house01sq.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 1,
            name: "Caroline Kingsley",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
        }
    },
    {
        id: 2,
        address: "24 Pearl st",
        city: "Cambridge",
        state: "MA",
        zip: "02420",
        price: "$1,200,000",
        title: "Ultimate Sophistication",
        bedrooms: 5,
        bathrooms: 4,
        long: -71.10869,
        lat: 42.359103,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house02.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house02sq.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 1,
            name: "Caroline Kingsley",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
        }
    },
    {
        id: 3,
        address: "61 West Cedar st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$825,000",
        title: "Modern City Living",
        bedrooms: 5,
        bathrooms: 4,
        long: -71.070061,
        lat: 42.359986,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house03.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house03sq.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 2,
            name: "Michael Jones",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
        }
    },
    {
        id: 4,
        address: "32 Prince st",
        city: "Cambridge",
        state: "MA",
        zip: "02420",
        price: "$930,000",
        title: "Stunning Colonial",
        bedrooms: 5,
        bathrooms: 4,
        long: -71.110448,
        lat: 42.360642,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house04.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house04sq.jpg",
        tags: "victorian",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 3,
            name: "Jonathan Bradley",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg"
        }
    },
    {
        id: 5,
        address: "211 Charles Street",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$850,000",
        title: "Waterfront in the City",
        bedrooms: 3,
        bathrooms: 2,
        long: -71.084454,
        lat: 42.368168,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house05.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house05sq.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 4,
            name: "Jennifer Wu",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
        }
    },
    {
        id: 6,
        address: "448 Hanover st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$725,000",
        title: "Quiet Retreat",
        bedrooms: 4,
        bathrooms: 2,
        long: -71.052617,
        lat: 42.366855,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house06.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house06sq.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 5,
            name: "Olivia Green",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg"
        }
    },
    {
        id: 7,
        address: "127 Endicott st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$450,000",
        title: "City Living",
        bedrooms: 3,
        bathrooms: 1,
        long: -71.057352,
        lat: 42.365003,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house07.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house07sq.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 6,
            name: "Miriam Aupont",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg"
        }
    },
    {
        id: 8,
        address: "48 Brattle st",
        city: "Cambridge",
        state: "MA",
        zip: "02420",
        price: "$450,000",
        title: "Heart of Harvard Square",
        bedrooms: 5,
        bathrooms: 4,
        long: -71.121653,
        lat: 42.374117,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house10.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house10sq.jpg",
        tags: "victorian",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 7,
            name: "Michelle Lambert",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michelle_lambert.jpg"
        }
    },
    {
        id: 9,
        address: "121 Harborwalk",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$450,000",
        title: "Seaport District Retreat",
        bedrooms: 3,
        bathrooms: 3,
        long: -71.049327,
        lat: 42.35695,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house09.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house09sq.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 2,
            name: "Michael Jones",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
        }
    },
    {
        id: 10,
        address: "503 Park Drive",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$650,000",
        title: "City Living",
        bedrooms: 2,
        bathrooms: 2,
        long: -71.105475,
        lat: 42.347400,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house08.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house08sq.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 1,
            name: "Caroline Kingsley",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
        }
    },
    {
        id: 11,
        address: "95 Gloucester st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$690,000",
        title: "Architectural Details",
        bedrooms: 3,
        bathrooms: 3,
        lat: 42.349693,
        long: -71.084407,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house11.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house11sq.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 4,
            name: "Jennifer Wu",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
        }
    },
    {
        id: 12,
        address: "145 Commonwealth ave",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$845,000",
        title: "Contemporary Luxury",
        bedrooms: 4,
        bathrooms: 3,
        lat: 42.352466,
        long: -71.075311,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house12.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house12sq.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 5,
            name: "Olivia Green",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg"
        }
    }
];

getProperties():Array<any>{
  return this.properties;
}

msg:any;
data:any;
getNewsData(){
    this.http.get(this.baseUrl).subscribe(
    (res)=> {
    this.msg=res.json().articles;
     //this.data = JSON.parse(res.json());
      console.log(this.msg);
    },
    (err)=>{
    this.msg="problem connecting to the server! try again";
    }
    )
}

getNewsList(): Observable<any[]> {
    return this.http.get(this.baseUrl)
        .map((responseData) => {
            // convert response into json formate and return
            console.log(responseData.json());
            return  <newsdata[]>responseData.json();
        })
        ;
}

}
