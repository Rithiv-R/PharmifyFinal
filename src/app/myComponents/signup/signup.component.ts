import { Component, Input, OnInit } from '@angular/core';
import {AuthService} from '../../myservices/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input() pid: any;
  constructor(public service:AuthService,private route:ActivatedRoute) {}

  ngOnInit(): void {
  }

  signup(user:string,email:string,password:string,repassword:string)
  {
    this.pid = this.route.snapshot.paramMap.get('pid');
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
