import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor() { }
  myarray:any=[]
  myoffer=[
    {
      'offer':"flat 25% offer on first medicine offer",
      'code':"EFF3EV",
      'img':"https://cms-contents.pharmeasy.in/offer/5fe574de6c7-1.jpg?dim=60x0&dpr=1.25&q=100"
    },
    {
      'offer':"flat 50% offer on hpurchase more than 500",
      'code':"FLAT500",
      'img':"https://cms-contents.pharmeasy.in/offer/79c9e323814-AMAZON.jpg?dim=60x0&dpr=1.25&q=100"
    },
    {
      'offer':"Get 10% offer on Everherb,Liveasy",
      'code':"FLAT10",
      'img':"https://cms-contents.pharmeasy.in/offer/60165886431-ten_per.jpg?dim=60x0&dpr=1.25&q=100"
    },
    {
      'offer':"Flat 25% offer on detol product",
      'code':"DTL025",
      'img':"https://cms-contents.pharmeasy.in/offer/62154d23477-Dettol_Logo.jpg?dim=60x0&dpr=1.25&q=100"
    }
  ]
  c1= {
    'offer':"flat 25% offer on first medicine offer",
    'code':"EFF3EV",
    'img':"https://cms-contents.pharmeasy.in/offer/5fe574de6c7-1.jpg?dim=60x0&dpr=1.25&q=100"
  }
  ngOnInit(): void {

  }

}
