import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../myservices/auth.service'
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  islogged!:boolean;
  x!:string
  constructor(private service:AuthService,public router:Router,private afAuth:AngularFireAuth) {
    this.afAuth.authState.subscribe(userResponse => {
      if (userResponse) { 
        this.islogged = true
        this.x = JSON.stringify(localStorage.getItem('userid'));
      } else {
        this.islogged = false
      }
    });
  }

  ngOnInit(): void {
  }

  signout(){
    this.service.SignOut();
  }

  signin()
  {
    this.router.navigate(['sign-in1']);
  }
  

}
