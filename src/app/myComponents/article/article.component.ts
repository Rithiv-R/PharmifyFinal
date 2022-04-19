import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  counter=0;
  counter2=1;
  myarray:any=[
  ];
  mycontent = [
    {
      link:"https://www.heartfoundation.org.au/heart-health-education/keeping-your-heart-healthy",
      image:"https://domf5oio6qrcr.cloudfront.net/medialibrary/7099/f22370f5-856a-44da-86c3-dfb32f2ab1191620726447965.jpg",
      content:"Keeping your heart healthy is something you can work on every day.",
    },
    {
      link:"https://www.helpguide.org/articles/healthy-eating/healthy-eating.htm",
      image:"https://previews.123rf.com/images/mackoflower/mackoflower1508/mackoflower150800090/43127032-veh%C3%ADculos-sanos-alimenticios-tem%C3%A1tica-forman-la-palabra-dieta.jpg?fj=1",
      content:"Confused by all the conflicting nutrition advice out there? These simple tips can show you how to plan, enjoy, and stick to a healthy diet!",
    },
    {
      link:"https://kraffeye.com/blog/8-easy-eye-exercises-to-improve-vision-techniques-and-tips",
      image:"https://www.perfectlensworld.com/img/articles/blinking-eye-exercises.jpg",
      content:"8 Easy Eye Exercises To Improve Vision: Techniques and Tips.",
    },
    {
      link:"https://www.cdc.gov/oralhealth/basics/adult-oral-health/tips.html",
      image:"https://serene-dental.com/wp-content/uploads/2020/06/Florida-Dentist.jpg",
      content:"What Can Adults Do to Maintain Good Oral Health?",
    },
    {
      link:"https://www.aad.org/public/everyday-care/nail-care-secrets/basics/healthy-nail-tips",
      image:"https://static-beautyhigh.stylecaster.com/2015/01/manicure.jpg",
      content:"Nails reflect our overall health, which is why proper nail care is so important. Here are dermatologists' tips for keeping your nails healthy.",
    },
    {
      link:"https://www.kidneyfund.org/living-kidney-disease/healthy-eating-activity/kidney-friendly-eating-plan",
      image:"data:image/jpeg;base64,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",
      content:"Understand how to follow a healthy eating plan for chronic kidney disease (CKD) by limiting certain foods in your diet!",
    },
    {
      link:"https://drprem.com/wellness/what-are-the-key-benefits-of-practicing-yoga/?gclid=Cj0KCQiA3-yQBhD3ARIsAHuHT67FsUWwbrXCwefztfJT19BIGi0wPyPVLNpzeMetejoqH8bkBDlgp1saAsW7EALw_wcB",
      image:"https://www.verywellfit.com/thmb/y4sp4hN319ZUkJWStdPxfGCct0I=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/young-man-practicing-upward-facing-dog-pose-1133155626-06564fa2cd1d474aa4a43241555c32be.jpg",
      content:"Key benefits of practicing Yoga postures irrespective of age.",
    },
    {
      link:"https://raisingchildren.net.au/toddlers/nutrition-fitness/daily-food-guides/babies-toddlers-food-groups",
      image:"https://www.care.com/c/wp-content/uploads/sites/2/2021/04/LaurenGarcia-201941262341546756-2048x1363.jpg",
      content:"Healthy food for babies and toddlers: the five food groups.",
    },
    {
      link:"https://www.webmd.com/migraines-headaches/5-ways-to-get-rid-of-headache",
      image:"https://images.medicinenet.com/images/article/main_image/migraine-headache2.jpg",
      content:"Ways to Get Rid of a Headache Quickly!",
    },
    {
      link:"https://www.healthline.com/health/cold-flu/sore-throat-natural-remedies",
      image:"https://www.travelpharm.com/blog/wp-content/uploads/2020/07/travelpharm-healthguide-SoreThroats-Symptoms-Causes-Treatments-header.jpg",
      content:"12 Natural Remedies for Sore Throat",
    },
    {
      link:"https://www.niddk.nih.gov/health-information/weight-management/healthy-eating-physical-activity-for-life/health-tips-for-pregnant-women",
      image:"https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/pregnant_woman_2_other/1800x1200_pregnant_woman_2_other.jpg?resize=750px:*",
      content:"Health Tips for Pregnant Women!!",
    },
    {
      link:"https://www.captel.com/2019/05/foods-that-promote-hearing-health/",
      image:"https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2020/04/abruptHearingLoss-482858329-770x533-1-745x490.jpg",
      content:"Stock up on these nutritious foods that may also be good for your hearing.",
    },
  ]

  ngOnInit(){
    for(let i=0;i<4;i++)
    {
      this.myarray.push(this.mycontent[i]);
    }
  }

  next()
  {
    if(this.counter<2 && this.counter>=0){
      this.counter = this.counter+1
      this.counter2 = 1;
      for(let i=0;i<4;i++)
      {
        this.myarray.pop()
      }
      for(let i=this.counter*4;i<this.counter*4+4;i++)
      {
        this.myarray.push(this.mycontent[i]);
      } 
    }
    else{
      this.counter2=0
    }
  } 

  previous()
  {
    if(this.counter>0 && this.counter<=3){
      this.counter = this.counter-1
      this.counter2=1
      for(let i=0;i<4;i++)
      {
        this.myarray.pop()
      }
      for(let i=this.counter*4;i<this.counter*4+4;i++)
      {
        this.myarray.push(this.mycontent[i]);
      } 
    }  
  }

  getColor(index :number) : string {
   return '#ffbfbf'
  }

}
