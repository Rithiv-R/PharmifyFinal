import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductserveService} from '../../myservices/productserve.service'

@Component({
  selector: 'app-producthome',
  templateUrl: './producthome.component.html',
  styleUrls: ['./producthome.component.css']
})
export class ProducthomeComponent implements OnInit {

  @Input() productid!:any;
  mydict!:any;
  constructor(private route: ActivatedRoute,public service:ProductserveService) { }

  ngOnInit(): void {
    this.productid = this.route.snapshot.paramMap.get('id');
    this.mydict = this.service.readproductitem(this.productid);
  }


}
