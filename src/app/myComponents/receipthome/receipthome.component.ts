import { MaybeForwardRefExpression } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { GeoqueryService} from 'src/app/myservices/geoquery.service';
import { OrderService } from 'src/app/myservices/order.service';


@Component({
  selector: 'app-receipthome',
  templateUrl: './receipthome.component.html',
  styleUrls: ['./receipthome.component.css']
})
export class ReceipthomeComponent implements OnInit {

  myarr!:any[]
  constructor(public service1:GeoqueryService,public service:OrderService) { }

  ngOnInit(): void {
   this.myarr = this.service1.mysearch();
  }

  confirm(myid:string)
  {
    this.service.placeorder(myid)
  }

}
