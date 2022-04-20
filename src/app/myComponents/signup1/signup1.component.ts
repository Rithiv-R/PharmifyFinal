import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../myservices/auth.service';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css']
})
export class Signup1Component implements OnInit {

  constructor(public service:AuthService) {}

  ngOnInit(): void {
  }

  signup(user:string,email:string,password:string,repassword:string)
  {
    if(password == repassword)
    {
        this.service.SignUp1(email,password,user);
        
    }
    else{
      window.alert('Password And Re-password Should be Same!!');
    }
  }

}
