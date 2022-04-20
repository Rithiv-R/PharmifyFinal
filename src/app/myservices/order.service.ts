import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/compat/firestore'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  x!:any;
  constructor(private fs:AngularFirestore,private router:Router) {}

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
          var x = res?.get('mycart');
          var myarrary = []
          x.forEach((element: any) => {
            myarrary.push(element)
          });
          myarrary.push(docref.id);
          this.fs.collection('cart').doc(uid).update({
            mycart:myarrary,
          })
        }).then(()=>{
          this.fs.collection('orders').doc(docref.id).update({
            id:docref.id,
          })
        }).catch((error)=>{
          window.alert(error);
        })
     }
     ).then(()=>{
        window.alert('Item Added Successfully in your Cart!!');
        this.router.navigate(['shopcat']);
      }        
     );
  }

  getcart(uid:string):any
  {
    var mytemp:any[] = [] 
    this.fs.collection('cart').doc(uid).get().toPromise().then((res)=>{
      let x = res?.get('mycart')
      x.forEach((val1:any)=>{
        mytemp.push(val1)
      })
    })
    return mytemp;
  }
  
  getcartdetails(pid:string):any
  {
    var mytemp:any[] = []
    var x = this.fs.collection('order').doc(pid).get();
  }

 
}
