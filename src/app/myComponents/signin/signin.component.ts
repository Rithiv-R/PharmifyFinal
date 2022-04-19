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
  }

  signin(email:string,password:string)
  {
    this.pid = this.route.snapshot.paramMap.get('pid');
    this.service.SignIn(email,password);
  }  
}
