import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-featurecard',
  templateUrl: './featurecard.component.html',
  styleUrls: ['./featurecard.component.css']
})
export class FeaturecardComponent implements OnInit {

  constructor() { }

  @Input()
  title!: string;

  ngOnInit(): void {
  }

}