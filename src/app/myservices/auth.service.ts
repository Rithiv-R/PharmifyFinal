import { Injectable,NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any;
  constructor(
    public afs:AngularFirestore,
    public afAuth:AngularFireAuth,
    public router:Router,
    public ngZone:NgZone,
  ) {
  }

   async SignIn(email:string,password:string,pid:string)
   {
       this.afAuth.signInWithEmailAndPassword(email,password).then((val)=>{
        this.ngZone.run(()=>{
          localStorage.setItem('userid',email);
          this.router.navigate(['productadd',pid]);
        });
      })
      .catch((error)=>{
        window.alert(error.message);
      })
   }

   async SignIn1(email:string,password:string)
   {
      this.afAuth.signInWithEmailAndPassword(email,password).then((val)=>{
        this.ngZone.run(()=>{
          localStorage.setItem('userid',email);
          this.router.navigate(['']);
        });
      })
      .catch((error)=>{
        window.alert(error.message);
      })
   }

   async SignUp(email:string,password:string,user:string,pid:string)
   {
      this.afAuth.createUserWithEmailAndPassword(email,password).then(async (result)=>{   
      this.SetUserData(result.user,user).then(()=>window.alert('User Account Registered Successfully!!'));
      localStorage.setItem('userid',email);  
      this.router.navigate(['productadd',pid]);
     })
     .catch((error)=>{
       window.alert(error.message);
     })
   }

   async SignUp1(email:string,password:string,user:string)
   {
      this.afAuth.createUserWithEmailAndPassword(email,password).then(async (result)=>{   
      this.SetUserData(result.user,user).then(()=>window.alert('User Account Registered Successfully!!'));
      localStorage.setItem('userid',email);  
      this.router.navigate(['']);
     })
     .catch((error)=>{
       window.alert(error.message);
     })
   }

   SetUserData(user:any,person:any){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.email}`
    );
    const userData = {
      uid: user.email,
      email: user.email,
      displayName: person,
    };
    this.afs.collection('cart').doc(user).set({
      uid:user,
      mycart:[],
      orderdelivery:[],
      placed:0,
    })
    return userRef.set(userData, {
      merge: true,
    });
   }   

   async SignOut()
   {
     this.afAuth.signOut().then(()=>{
       localStorage.removeItem('userid');
       console.log(JSON.stringify(localStorage.getItem('userid')!));
     })
     this.router.navigate(['home']);
   }

   async ForgetPass(passowrdResetEmail:string)
   {
     return this.afAuth.sendPasswordResetEmail(passowrdResetEmail).then(()=>{
       window.alert('Password Email Sent!');
     }).catch((error)=>{
      window.alert(error);
     });
   }

   loggedid():string
   {
      const user = JSON.stringify(localStorage.getItem('userid')!);
      if(user!=null)
      {
        return user;
      }
      return 'No User Found';
   }

}
