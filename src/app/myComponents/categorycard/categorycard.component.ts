import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-categorycard',
  templateUrl: './categorycard.component.html',
  styleUrls: ['./categorycard.component.css']
})
export class CategorycardComponent implements OnInit {

  constructor() { }

  @Input()
  title!: string;
  @Input()
  link!: string;

  ngOnInit(): void {
  }

}
