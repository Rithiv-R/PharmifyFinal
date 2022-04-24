import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../myservices/order.service'

@Component({
  selector: 'app-carthome',
  templateUrl: './carthome.component.html',
  styleUrls: ['./carthome.component.css']
})
export class CarthomeComponent implements OnInit {

  constructor(private service1:OrderService) { }

  ngOnInit(): void {
  }

  submit()
  {
    var x = JSON.stringify(localStorage.getItem('userid'));
    this.service1.setsubmit(x.slice(1,x.length-1)) 
  }

}
