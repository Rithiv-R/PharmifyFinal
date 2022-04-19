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
  ) {}

   async SignIn(email:string,password:string)
   {
      return this.afAuth.signInWithEmailAndPassword(email,password).then((val)=>{
        this.ngZone.run(()=>{
          localStorage.setItem('userid',email);
          this.router.navigate(['main']);
        });
      })
      .catch((error)=>{
        window.alert(error.message);
      })
   }

   async SignUp(email:string,password:string,user:string)
   {
     return this.afAuth.createUserWithEmailAndPassword(email,password).then(async (result)=>{   
      this.SetUserData(result.user,user);
      localStorage.setItem('userid',email);  
      this.router.navigate(['main']);
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
    return userRef.set(userData, {
      merge: true,
    });
   }   

   async SignOut()
   {
     return this.afAuth.signOut().then(()=>{
       localStorage.removeItem('userid')
       this.router.navigate(['sign-in']);
     })
   }

   get isLogged():boolean{
      const user = JSON.parse(localStorage.getItem('userid')!);
      return user!==null;
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
