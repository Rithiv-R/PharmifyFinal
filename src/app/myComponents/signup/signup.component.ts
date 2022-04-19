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
    this.pid = this.route.snapshot.paramMap.get('pid');
  }

  signup(user:string,email:string,password:string,repassword:string)
  {
    if(password == repassword)
    {
        this.service.SignUp(email,password,user,this.pid);
        window.alert('User Account Registered Successfully!!')
    }
    else{
      window.alert('Password And Re-password Should be Same!!');
    }
  }

}
