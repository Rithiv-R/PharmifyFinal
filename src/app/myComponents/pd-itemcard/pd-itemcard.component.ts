import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pd-itemcard',
  templateUrl: './pd-itemcard.component.html',
  styleUrls: ['./pd-itemcard.component.css']
})
export class PdItemcardComponent implements OnInit {

  @Input() name!:string;
  @Input() price!:string;
  @Input() photo!:string;
  constructor() { }

  ngOnInit(): void {
  }

  myorder()
  {
    
  }

}
