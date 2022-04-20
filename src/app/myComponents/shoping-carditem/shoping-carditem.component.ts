import { Component, Input, OnInit } from '@angular/core';
import {AuthService} from '../../myservices/auth.service'
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'; 

@Component({
  selector: 'app-shoping-carditem',
  templateUrl: './shoping-carditem.component.html',
  styleUrls: ['./shoping-carditem.component.css']
})
export class ShopingCarditemComponent implements OnInit {

  @Input() item!:any;
  islogged!:boolean;
  constructor(private service:AuthService,private router:Router,private afAuth:AngularFireAuth) {
    this.afAuth.authState.subscribe(userResponse => {
      if (userResponse) { 
        this.islogged = true
      } else {
        this.islogged = false
      }
    });
  }
  ngOnInit(): void {
  }

  myorder()
  {
    if(this.islogged){
      this.router.navigate(['productadd',this.item.pid]);
    }
    else{
      this.router.navigate(['sign-in',this.item.pid]);
    }
  } 

}
