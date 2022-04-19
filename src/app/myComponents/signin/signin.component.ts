import { Component, Input, OnInit } from '@angular/core';
import {AuthService} from '../../myservices/auth.service'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @Input() pid: any;
  constructor(public service:AuthService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.pid = this.route.snapshot.paramMap.get('pid');
  }

  signin(email:string,password:string)
  {
    this.service.SignIn(email,password,this.pid);
  }  

  forget(email:string)
  {
    this.service.ForgetPass(email);
  }

}
