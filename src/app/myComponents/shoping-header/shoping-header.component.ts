import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-header',
  templateUrl: './shoping-header.component.html',
  styleUrls: ['./shoping-header.component.css']
})
export class ShopingHeaderComponent implements OnInit {

  @Input() catname!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
