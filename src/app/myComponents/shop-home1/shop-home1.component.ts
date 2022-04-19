import { Component, OnInit } from '@angular/core';
import {ShopserveService} from '../../myservices/shopserve.service'

@Component({
  selector: 'app-shop-home1',
  templateUrl: './shop-home1.component.html',
  styleUrls: ['./shop-home1.component.css']
})
export class ShopHome1Component implements OnInit {

  myarray!:any;
  constructor(private service:ShopserveService) { }

  ngOnInit(): void {
    this.service.readcategories().subscribe(val=>this.myarray=val);
  }

  add()
  {
    this.service.adder();
  }
}
