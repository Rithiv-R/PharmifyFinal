import { Component, Input, OnInit } from '@angular/core';
import {AuthService} from '../../myservices/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pd-itemcard',
  templateUrl: './pd-itemcard.component.html',
  styleUrls: ['./pd-itemcard.component.css']
})
export class PdItemcardComponent implements OnInit {

  @Input() name!:string;
  @Input() price!:string;
  @Input() photo!:string;
  selectedinput!:string;
  constructor(private service:AuthService,private router:Router,) { }

  ngOnInit(): void {
  }

  selectChangeHandler (event: any) {
    this.selectedinput = event.target.value;
  }

  myorder()
  {
    if(this.service.isLogged)
    {

    }
    else{

    }
  } 

}
