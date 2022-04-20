import { Component, Input, OnInit } from '@angular/core';
import {OrderService} from '../../myservices/order.service'

@Component({
  selector: 'app-cart-itemcard',
  templateUrl: './cart-itemcard.component.html',
  styleUrls: ['./cart-itemcard.component.css']
})
export class CartItemcardComponent implements OnInit {

  @Input() item:any;
  mydict!:any;
  constructor(private service:OrderService){}

  ngOnInit(): void {
    this.myfetch()
  }

  myfetch(){
    this.service.getcartdetails(this.item);
  }

}
