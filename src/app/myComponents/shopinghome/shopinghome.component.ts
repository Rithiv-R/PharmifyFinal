import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ShopitemService} from '../../myservices/shopitem.service'

@Component({
  selector: 'app-shopinghome',
  templateUrl: './shopinghome.component.html',
  styleUrls: ['./shopinghome.component.css']
})
export class ShopinghomeComponent implements OnInit {

  @Input() categoryname!:any;
  itemarray:any;
  constructor(private route: ActivatedRoute,public service:ShopitemService) {
  }

  ngOnInit(): void {
    this.categoryname = this.route.snapshot.paramMap.get('name');
    this.itemarray = this.service.readproducts(this.categoryname);
  }

}
