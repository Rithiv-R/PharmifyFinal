import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-carditem',
  templateUrl: './shoping-carditem.component.html',
  styleUrls: ['./shoping-carditem.component.css']
})
export class ShopingCarditemComponent implements OnInit {

  @Input() item!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
