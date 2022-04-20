import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/compat/firestore'


@Injectable({
  providedIn: 'root'
})
export class ShopitemService {

  
  constructor(public fs: AngularFirestore){}

  readproducts(val:string)
  {
    var mytemp:any[]=[];
    this.fs.collection('categories').doc(val).get().toPromise().then((res) => {
      let x = res?.get('products')
      x.forEach((val1:any)=>{
      this.fs.collection('products').doc(val1).get().toPromise().then((res1:any)=>{
          var dict = {
            id:res1.get('id'),
          name:res1.get('name'),
          photo:res1.get('photo'),
          price:res1.get('price'),
          };
          mytemp.push(dict)
      })
    });
  })
  return mytemp;
  }

}
