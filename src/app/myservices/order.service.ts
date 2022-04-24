import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/compat/firestore'
import { Router } from '@angular/router';
import {distanceBetween, geohashForLocation, geohashQueryBounds} from 'geofire-common' 
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
    this.fs.collection('orders').doc(pid).get().toPromise().then((ele)=>{
      var x = ele?.get('pid');
      this.fs.collection('products').doc(x).get().toPromise().then((res)=>{
        var dict = {
          id : ele?.get('id'),
          pid : ele?.get('pid'),
          price:ele?.get('price'),
          quantity:ele?.get('quantity'),
          uid:ele?.get('uid'),
          name:res?.get('name'),
          photo:res?.get('photo'),
        }
        mytemp.push(dict);
      });
    });
    return(mytemp);
  }


  deletecartdetails(id:string,uid:string){
    this.fs.collection('orders').doc(id).delete().then(()=>{
      this.fs.collection('cart').doc(uid).get().toPromise().then((ele)=>{
        var x = ele?.get('mycart');
        var myarr: any[] = [];
        x.forEach((element:any) => {
          myarr.push(element);
        });
        for(var i=0;i<myarr.length;i++)
        {
          if(id==myarr[i])
          {
            myarr.splice(i,1);
            break;
          }
        }
        this.fs.collection('cart').doc(uid).update({
          mycart:myarr,
        }).then(()=>{
          window.location.reload();
        });
      })
    })
  }



  getcartvalue(uid:string)
  {
    var myvalue:any = []
    this.fs.collection('cart').doc(uid).get().toPromise().then((ele)=>{
      var myarr = ele?.get('mycart')
      var myval1=0;
      myarr.forEach((element:any) => { 
        this.fs.collection('orders').doc(element).get().toPromise().then((res)=>{
          var temp:string = res?.get('price')
          var mytemp:number = +temp.slice(1,temp.length)*+res?.get('quantity')
          myval1 = myval1 + mytemp;
          myvalue.pop()
          myvalue.push(myval1)
          this.fs.collection('cart').doc(uid).update({
            myprice:myval1,
          })
        })
      });
    })
    return myvalue;
  }
  
  setsubmit(uid:string)
  {
    this.router.navigate(['receipt']);
  }

  placeorder(mid:string)
  {
    this.fs.collection('pharmacies').doc(mid).get().toPromise().then((ele)=>{
        var x = ele?.get('myappend')
        var x1 = ele?.get('myorders')
        var myarr: any[] =[]
        x.forEach((element:any) => {
          myarr.push(element);
        });
        var myarr2: any[] =[]
        x1.forEach((element:any) => {
          myarr2.push(element);
        });
        console.log('s');
        var uid = JSON.stringify(localStorage.getItem('userid'));
        uid = uid.slice(1,uid.length-1),
        this.fs.collection('cart').doc(uid).get().toPromise().then((ele1)=>{
          myarr.push(ele1?.get('myprice'))
          var y = ele1?.get('orderdelivery')
          var myarr1: any[] =[]
          y.forEach((element:any) => {
            myarr1.push(element);
          });
          var dict = {
            mycart:ele1?.get('mycart'),
            uid:ele1?.get('uid'),
            price:ele1?.get('myprice'),
          }
          console.log(dict)
          this.fs.collection('delivery').add({
            ordercart:dict.mycart,
            orderuid:dict.uid,
            orderprice:dict.price,
            orderedplace:mid,
          }).then((docref)=>{
            myarr1.push(docref.id);
            myarr2.push(docref.id);
          }).then(()=>{
            this.fs.collection('cart').doc(uid).update({
              orderdelivery:myarr1,
            })
            this.fs.collection('pharmacies').doc(mid).update({
              myappend:myarr,
              myorders:myarr2,
            })
          });
        }).then(()=>{
          this.fs.collection('cart').doc(uid).update({
            mycart:[],
          })
        }).then(()=>{
          window.alert('Order Succesfully Placed')
          this.router.navigate(['home'])
        })
    })
  }

}
