import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../myservices/auth.service'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public service:AuthService) { }

  ngOnInit(): void {
  }

  signin(email:string,password:string)
  {
    this.service.SignIn(email,password);
  }  
}
