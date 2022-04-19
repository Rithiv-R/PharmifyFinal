import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './myComponents/home/home.component';
import { ProducthomeComponent } from './myComponents/producthome/producthome.component';
import { ShopHome1Component } from './myComponents/shop-home1/shop-home1.component';
import { ShopinghomeComponent } from './myComponents/shopinghome/shopinghome.component';
import { SigninComponent } from './myComponents/signin/signin.component';
import { SignupComponent } from './myComponents/signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'sign-in/:pid',component:SigninComponent},
  {path:'sign-up/:pid',component:SignupComponent},
  {path:'shopcat',component:ShopHome1Component},
  {path: 'shopping/:name', component:ShopinghomeComponent},
  {path:'productadd/:id',component:ProducthomeComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
