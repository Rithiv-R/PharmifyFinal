import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-pd-sideoffer',
  templateUrl: './pd-sideoffer.component.html',
  styleUrls: ['./pd-sideoffer.component.css']
})
export class PdSideofferComponent implements OnInit {

  constructor() { }

  @Input()
  title!: string;
  @Input()
  code!: string;
  @Input()
  link!: string;
  
  ngOnInit(): void {
  }

}
