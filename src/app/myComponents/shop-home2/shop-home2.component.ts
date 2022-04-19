import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-home2',
  templateUrl: './shop-home2.component.html',
  styleUrls: ['./shop-home2.component.css']
})
export class ShopHome2Component implements OnInit {

  @Input() name!:string;
  @Input() photo!:string;
  @Input() offer!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
