import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../myservices/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(public service:AuthService) {}

  ngOnInit(): void {
  }

  signup(user:string,email:string,password:string,repassword:string)
  {
    if(password == repassword)
    {
        this.service.SignUp(email,password,user);
        window.alert('User Account Registered Successfully!!')
    }
    else{
      window.alert('Password And Re-password Should be Same!!');
    }
  }

}
