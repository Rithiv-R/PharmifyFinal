import { Component, Input, OnInit } from '@angular/core';
import {AuthService} from '../../myservices/auth.service'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-signin1',
  templateUrl: './signin1.component.html',
  styleUrls: ['./signin1.component.css']
})
export class Signin1Component implements OnInit {

  
  constructor(public service:AuthService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  signin(email:string,password:string)
  {
    this.service.SignIn1(email,password);
  }  

  forget(email:string)
  {
    this.service.ForgetPass(email);
  }


}
