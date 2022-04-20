import { Component, Input, OnInit } from '@angular/core';
import {AuthService} from '../../myservices/auth.service';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {OrderService} from '../../myservices/order.service';

@Component({
  selector: 'app-pd-itemcard',
  templateUrl: './pd-itemcard.component.html',
  styleUrls: ['./pd-itemcard.component.css']
})
export class PdItemcardComponent implements OnInit {

  @Input() name!:string;
  @Input() price!:string;
  @Input() photo!:string;
  @Input() pid!:string;
  selectedinput!:string;
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
  }

  selectChangeHandler (event: any) {
    this.selectedinput = event.target.value;
  }

  myorder()
  {
    if(this.islogged){
      var x = JSON.stringify(localStorage.getItem('userid'));
      this.service1.addorder(x,this.pid,this.selectedinput,this.price);
    }
    else{
      this.router.navigate(['sign-in',this.pid]);
    }
  } 

}
