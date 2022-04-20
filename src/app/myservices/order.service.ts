import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/compat/firestore'
import { PdItemcardComponent } from '../myComponents/pd-itemcard/pd-itemcard.component';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private fs:AngularFirestore) {}

  addorder(uid:string,pid:string,quantity:string,price:string)
  {
     this.fs.collection('orders').add({
        uid:uid,
        pid:pid,
        quantity:quantity,
        price:price,
     }
     ).then((docref)=>{
        this.fs.collection('cart').doc(uid).get().toPromise().then((res) => {
          let x = res?.get('mycart')
          x.push(docref.id);
          this.fs.collection('cart').doc(uid).update({
            mycart:x,
          })
        }).then(()=>{
          this.fs.collection('orders').doc(docref.id).update({
            id:docref.id,
          })
        })
     }
     );
  }

}
