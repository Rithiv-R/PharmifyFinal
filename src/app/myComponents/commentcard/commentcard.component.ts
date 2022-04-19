import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentcard',
  templateUrl: './commentcard.component.html',
  styleUrls: ['./commentcard.component.css']
})
export class CommentcardComponent implements OnInit {

  @Input() comment:string | undefined;
  @Input() name:string | undefined;
  @Input() link:string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
