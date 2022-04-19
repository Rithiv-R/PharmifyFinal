import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
// Material Form Controls
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './myComponents/header/header.component';
import { NavbarComponent } from './myComponents/navbar/navbar.component';
import { FooterComponent } from './myComponents/footer/footer.component';
import { HomeComponent } from './myComponents/home/home.component';
import { SearchbarComponent } from './myComponents/searchbar/searchbar.component';

import { ArticleComponent } from './myComponents/article/article.component';

import { OffercardComponent } from './myComponents/offercard/offercard.component';
import { OffersComponent } from './myComponents/offers/offers.component';
import { ContactcardComponent } from './myComponents/contactcard/contactcard.component';
import { TopbrandsComponent } from './myComponents/topbrands/topbrands.component';
import { FeaturecardComponent } from './myComponents/featurecard/featurecard.component';
import { FeaturesComponent } from './myComponents/features/features.component';
import { CategorycardComponent } from './myComponents/categorycard/categorycard.component';
import { CategoriesComponent } from './myComponents/categories/categories.component';
import { CommentcardComponent } from './myComponents/commentcard/commentcard.component';
import { CommentsComponent } from './myComponents/comments/comments.component';
import { SubscribeComponent } from './myComponents/subscribe/subscribe.component';
import { MembercardComponent } from './myComponents/membercard/membercard.component';
import { CardviewComponent } from './myComponents/cardview/cardview.component';
import { RouterModule } from  '@angular/router';
import { CarthomeComponent } from './myComponents/carthome/carthome.component';
import { CartItemComponent } from './myComponents/cart-item/cart-item.component';
import { CartItemcardComponent } from './myComponents/cart-itemcard/cart-itemcard.component';
import { CartDetailsComponent } from './myComponents/cart-details/cart-details.component';
import { CartTotalComponent } from './myComponents/cart-total/cart-total.component';
import { CartAddonsComponent } from './myComponents/cart-addons/cart-addons.component';
import { CartPremiumComponent } from './myComponents/cart-premium/cart-premium.component';
import { OfferhomeComponent } from './myComponents/offerhome/offerhome.component';
import { OfferHeadComponent } from './myComponents/offer-head/offer-head.component';
import { OfferCardlistComponent } from './myComponents/offer-cardlist/offer-cardlist.component';
import { OfferCarditemComponent } from './myComponents/offer-carditem/offer-carditem.component';
import { OfferFaqComponent } from './myComponents/offer-faq/offer-faq.component';
import { OfferdetailhomeComponent } from './myComponents/offerdetailhome/offerdetailhome.component';
import { OfferdetailCarditemComponent } from './myComponents/offerdetail-carditem/offerdetail-carditem.component';
import { OfferdetailInfoComponent } from './myComponents/offerdetail-info/offerdetail-info.component';
import { OfferdetailSidebarComponent } from './myComponents/offerdetail-sidebar/offerdetail-sidebar.component';
import { ShophomeComponent } from './myComponents/shophome/shophome.component';
import { ShopHome1Component } from './myComponents/shop-home1/shop-home1.component';
import { ShopHome2Component } from './myComponents/shop-home2/shop-home2.component';
import { ShopHeaderComponent } from './myComponents/shop-header/shop-header.component';
import { ShopSearchComponent } from './myComponents/shop-search/shop-search.component';
import { ShopPrescritionComponent } from './myComponents/shop-prescrition/shop-prescrition.component';
import { ShopOfferComponent } from './myComponents/shop-offer/shop-offer.component';
import { ShopTestimonialsComponent } from './myComponents/shop-testimonials/shop-testimonials.component';
import { ShopFaqComponent } from './myComponents/shop-faq/shop-faq.component';
import { ShopinghomeComponent } from './myComponents/shopinghome/shopinghome.component';
import { ShopingHeaderComponent } from './myComponents/shoping-header/shoping-header.component';
import { ShopingItemgridComponent } from './myComponents/shoping-itemgrid/shoping-itemgrid.component';
import { ShopingSidefilterComponent } from './myComponents/shoping-sidefilter/shoping-sidefilter.component';
import { ShopingCarditemComponent } from './myComponents/shoping-carditem/shoping-carditem.component';
import { ProducthomeComponent } from './myComponents/producthome/producthome.component';
import { PdHeaderComponent } from './myComponents/pd-header/pd-header.component';
import { PdItemcardComponent } from './myComponents/pd-itemcard/pd-itemcard.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { PdSidebarComponent } from './myComponents/pd-sidebar/pd-sidebar.component';
import { PdReviewsComponent } from './myComponents/pd-reviews/pd-reviews.component';
import { PdSideofferComponent } from './myComponents/pd-sideoffer/pd-sideoffer.component';
import { PdDetailsComponent } from './myComponents/pd-details/pd-details.component';
import { SigninComponent } from './myComponents/signin/signin.component';
import { SignupComponent } from './myComponents/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SearchbarComponent,
    ArticleComponent,
    OffercardComponent,
    OffersComponent,
    ContactcardComponent,
    TopbrandsComponent,
    FeaturecardComponent,
    FeaturesComponent,
    CategorycardComponent,
    CategoriesComponent,
    CommentcardComponent,
    CommentsComponent,
    SubscribeComponent,
    MembercardComponent,
    CardviewComponent,
    CarthomeComponent,
    CartItemComponent,
    CartItemcardComponent,
    CartDetailsComponent,
    CartTotalComponent,
    CartAddonsComponent,
    CartPremiumComponent,
    OfferhomeComponent,
    OfferHeadComponent,
    OfferCardlistComponent,
    OfferCarditemComponent,
    OfferFaqComponent,
    OfferdetailhomeComponent,
    OfferdetailCarditemComponent,
    OfferdetailInfoComponent,
    OfferdetailSidebarComponent,
    ShophomeComponent,
    ShopHome1Component,
    ShopHome2Component,
    ShopHeaderComponent,
    ShopSearchComponent,
    ShopPrescritionComponent,
    ShopOfferComponent,
    ShopTestimonialsComponent,
    ShopFaqComponent,
    ShopinghomeComponent,
    ShopingHeaderComponent,
    ShopingItemgridComponent,
    ShopingSidefilterComponent,
    ShopingCarditemComponent,
    ProducthomeComponent,
    PdHeaderComponent,
    PdItemcardComponent,
    PdSidebarComponent,
    PdReviewsComponent,
    PdSideofferComponent,
    PdDetailsComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  exports: [
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
