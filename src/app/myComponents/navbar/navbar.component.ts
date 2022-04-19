import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../myservices/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:AuthService) { }

  ngOnInit(): void {
  }

  signout(){
    this.service.SignOut();
  }

}
