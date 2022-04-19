import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class ProductserveService {
  constructor(public fs: AngularFirestore) { }

  readproductitem(val:string)
  { 
  var dict:any = {};
  this.fs.collection('products').doc(val).get().toPromise().then((res1:any)=>{
          dict['id']=res1.get('id'),
          dict['name']=res1.get('name'),
          dict['photo']=res1.get('photo'),
          dict['price']=res1.get('price'),
          dict['des']=res1.get('des'),
          dict['benefits']=res1.get('benefits')
          dict['benefits1']=res1.get('benefits1')      
        });  
  return dict;
  }

}
