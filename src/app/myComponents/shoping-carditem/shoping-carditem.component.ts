import { Component, Input, OnInit } from '@angular/core';
import {AuthService} from '../../myservices/auth.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-shoping-carditem',
  templateUrl: './shoping-carditem.component.html',
  styleUrls: ['./shoping-carditem.component.css']
})
export class ShopingCarditemComponent implements OnInit {

  @Input() item!:any;
  constructor(private service:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  myorder()
  {
    var x = this.service.isLogged()
    if(x==false){
      this.router.navigate(['sign-in',this.item.pid]);
    }
    else{
      this.router.navigate(['']);
    }
  } 

}
