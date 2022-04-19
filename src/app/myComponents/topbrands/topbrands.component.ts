import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbrands',
  templateUrl: './topbrands.component.html',
  styleUrls: ['./topbrands.component.css']
})
export class TopbrandsComponent implements OnInit {
  counter1=0;
  counter2=6;
  temp1=1;
  myarray:any=[];
  mybrand = [
  {
    image:"https://www.bigbasket.com/media/uploads/p/l/119375_11-horlicks-health-nutrition-drink-chocolate-flavour.jpg",
    name:"HORLICKS"
  },
  {
    image:"https://www.netmeds.com/images/product-v1/600x600/14020/vicks_vaporub_25_ml_0.jpg",
    name:"VICKS"
  },
  {
    image:"https://m.media-amazon.com/images/I/71+k9wvxCIL._SX466_.jpg",
    name:"SENSODYNE"
  },
  {
    image:"https://rukminim1.flixcart.com/image/416/416/j59wyvk0/moisturizer-cream/v/h/9/100-imported-baby-cream-small-johnson-s-original-imaevznnygwxy7yz.jpeg?q=70",
    name:"JOHNSON's"
  },
  {
    image:"https://rukminim1.flixcart.com/image/416/416/kjkbv680-0/diaper/3/n/s/xxl-wonder-pants-diaper-22-huggies-original-imafz3zp7znd3pte.jpeg?q=70",
    name:"HUGGIES"
  },
  {
    image:"https://www.skinpharmacy.in/wp-content/uploads/2019/09/SEBAMED-BABY-CLEANSING-BAR-150G.jpg",
    name:"SEBAMED"
  },
  {
    image:"https://www.himalaya.bg/userfiles/productlargeimages/product_665.jpg",
    name:"KOFOL"
  },
  {
    image:"https://quickers.in/wp-content/uploads/2021/08/51MHrlRbcS._SX679_.jpg",
    name:"DETTOL"
  },
  {
    image:"https://5.imimg.com/data5/HE/KH/MY-7469234/omron-forehead-thermometer-mc-720-500x500.jpg",
    name:"OMRON"
  },
  ]

  constructor() { }

  ngOnInit(): void {
    for(let i=0;i<6;i++)
    {
      this.myarray.push(this.mybrand[i])
    }
  }

  next(){
    if(this.counter2<this.mybrand.length)
    {
      this.temp1=1;
      this.counter1=this.counter1+1
      this.counter2=this.counter2+1
      for(let i=0;i<7;i++)
      {
        this.myarray.pop()
      }
      for(let i=this.counter1;i<this.counter2;i++)
      {
        this.myarray.push(this.mybrand[i])
      }
    }
    else{
      this.temp1=0;
    }
   
  }

  previous(){
    if(this.counter1>0)
    {
      this.temp1=1;
      this.counter1=this.counter1-1
      this.counter2=this.counter2-1
      for(let i=0;i<7;i++)
      {
        this.myarray.pop()
      }
      for(let i=this.counter1;i<this.counter2;i++)
      {
        this.myarray.push(this.mybrand[i])
      }
    }
  }

  getColor(index :number) : string {
    if(index%3==0)
    {
      return '#ccffe1';
    }
    else if (index%2==0)
    {
      return '#f6ffe5';
    }
    else{
      return '#b4defa';
    }
  }


}
