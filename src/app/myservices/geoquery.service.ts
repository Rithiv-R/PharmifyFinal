import { Injectable } from '@angular/core';
import {distanceBetween, geohashForLocation, geohashQueryBounds} from 'geofire-common' 
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GeoqueryService {

  x!:any;
  y!:any;
  listitems!:any;
  item!:Observable<any[]>
  constructor(public fs:AngularFirestore) {
    this.item = fs.collection('pharmacies').valueChanges()
  }

  mysearch()
  {
    var object:any[]=[];
    navigator.geolocation.getCurrentPosition((position)=>{
      this.x = position.coords.latitude;
      this.y = position.coords.longitude;
    })
    this.item.subscribe((val)=>{
      var array:any[] = []
      val.forEach((element)=>{
        array.push({
          address:element.address,
          name:element.name,
          phone:element.phone,
          id:element.id,
          geohash:element.geohash,
          latitude:element.latitude,
          longitude:element.longitude,
          photo:element.photo,
        })
      })
    var y1: any[] = []
    var radius = 40*1000;
    array.forEach((element)=>{
     const distanceInKm = distanceBetween([element.latitude, element.longitude], [this.x,this.y]);
     const distanceInM = distanceInKm * 1000;
      if (distanceInM <= radius) {
        element['distanceInM'] = radius,
        y1.push(element)
      }
    })
    var sortedArray: {}[] = array.sort((n1,n2) => {
    if (n1.distanceInM > n2.distanceInM) {
        return 1;
    }
    if (n1.distanceInM < n2.distanceInM) {
        return -1;
    }
    return 0;
    });
    object.push(sortedArray[0]);
    }) 
    return object;
  }
}
