import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShopserveService {
  items!:Observable<any[]>
  constructor(public fs:AngularFirestore) {
    this.items = this.fs.collection('categories').valueChanges();
  }

  readcategories() : Observable<any>
  {
    return this.items
  }

  adder()
  {
    var x = [
      {
       name:"Ayurvedic Care",
       photo:"https://cdn.arogyamayurveda.com/wp-content/uploads/2021/02/Ayurvedic-tea-for-fatty-swallen.jpg",
       offer:"40% Off",
      },
      {
        name:"Surgicals and Dressings",
        photo:"https://5.imimg.com/data5/FS/LS/MY-904941/surgical-dressings-pads-and-rolls-500x500.jpg",
        offer:"60% Off",
       },
       {
        name:"Covid Essentials",
        photo:"https://www.cnet.com/a/img/resize/309d196f4f069a23971c21dfca03513f91b7b098/2021/11/24/7a54e4d1-baa6-4107-b26c-8d8e1e1bc8af/covid-19-masks-booster-shots-vaccines-syringes-bandaids-winter-2021-cnet-003.jpg?auto=webp&width=1092",
        offer:"50% Off",
       },
       {
        name:"Health Care Devices",
        photo:"https://thehealthcareinsights.com/wp-content/uploads/2020/12/Essential-medical-devices-that-should-be-available-at-your-home.jpg",
        offer:"38% Off",
       },
    ];
    x.forEach((val)=>{
      this.fs.collection('categories').doc(val.name).set({
        name:val.name,
        photo:val.photo,
        offer:val.offer,
    })
    })   
  }

}
