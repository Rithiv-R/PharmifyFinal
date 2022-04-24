import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutushomeComponent } from './myComponents/aboutushome/aboutushome.component';
import { CarthomeComponent } from './myComponents/carthome/carthome.component';
import { ContacthomeComponent } from './myComponents/contacthome/contacthome.component';
import { HomeComponent } from './myComponents/home/home.component';
import { ProducthomeComponent } from './myComponents/producthome/producthome.component';
import { ReceipthomeComponent } from './myComponents/receipthome/receipthome.component';
import { ShopHome1Component } from './myComponents/shop-home1/shop-home1.component';
import { ShopinghomeComponent } from './myComponents/shopinghome/shopinghome.component';
import { SigninComponent } from './myComponents/signin/signin.component';
import { Signin1Component } from './myComponents/signin1/signin1.component';
import { SignupComponent } from './myComponents/signup/signup.component';
import { Signup1Component } from './myComponents/signup1/signup1.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'receipt',component:ReceipthomeComponent},
  {path:'sign-in/:pid',component:SigninComponent},
  {path:'sign-in1',component:Signin1Component},
  {path:'sign-up/:pid',component:SignupComponent},
  {path:'sign-up1',component:Signup1Component},
  {path:'shopcat',component:ShopHome1Component},
  {path: 'shopping/:name', component:ShopinghomeComponent},
  {path:'productadd/:id',component:ProducthomeComponent},
  {path:'home',component:HomeComponent},
  {path:'cart',component:CarthomeComponent},
  {path:'contactus',component:ContacthomeComponent},
  {path:'aboutus',component:AboutushomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
