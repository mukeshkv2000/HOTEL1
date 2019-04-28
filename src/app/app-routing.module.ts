import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodComponent } from './food/food.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import {BookComponent } from './book/book.component';
// const routes: Routes = [];
const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'celebrations', component: CelebrationsComponent},
  { path: 'food' , component: FoodComponent} ,
  {path: 'wedding' , component: WeddingsComponent },
  { path: 'offers', component: OffersComponent},
{ path: 'signin', component: SigninComponent },
{path: 'signup', component : SignupComponent},
{ path: '', component : HomeComponent},
{path: 'lifestyle', component : LifestyleComponent},
{path: 'book', component: BookComponent },
  // { path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
   { path: '**', component: PagenotfoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

