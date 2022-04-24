import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../myservices/order.service'

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css']
})
export class CartTotalComponent implements OnInit {

  array!:any
  constructor(private service1:OrderService) { }

  ngOnInit(): void {
    this.myfetch();
  }

  myfetch()
  {
    var x = JSON.stringify(localStorage.getItem('userid'));
    this.array = this.service1.getcartvalue(x.slice(1,x.length-1))
  }

}
