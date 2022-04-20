import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../myservices/order.service'
import {AuthService} from '../../myservices/auth.service';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {


  array!:any;
  islogged!:boolean;
  constructor(private service:AuthService,private router:Router,private afAuth:AngularFireAuth,private service1:OrderService) {
    this.afAuth.authState.subscribe(userResponse => {
      if (userResponse) { 
        this.islogged = true
      } else {
        this.islogged = false
      }
    });
  }

  ngOnInit(): void {
    this.myfetch()
  }

  
  myfetch()
  {
    var z = JSON.stringify(localStorage.getItem('userid'));
    if(z!=null){
      var x = JSON.stringify(localStorage.getItem('userid'));
      this.array = this.service1.getcart(x.slice(1,x.length-1));
    }
    else{
      console.log('No User');
    }
  } 

}
