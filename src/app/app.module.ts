import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule } from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { FoodComponent } from './food/food.component';
import { RestoComponent } from './food/resto/resto.component';
import { BarComponent } from './food/bar/bar.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { SpaComponent } from './lifestyle/spa/spa.component';
import { ActivitiesComponent } from './lifestyle/activities/activities.component';
import { ExperiancesComponent } from './lifestyle/experiances/experiances.component';
import { ExcursionComponent } from './lifestyle/excursion/excursion.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { IndianComponent } from './weddings/indian/indian.component';
import { WesternComponent } from './weddings/western/western.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavTabsComponent } from './navigation/nav-tabs/nav-tabs.component';
import { BookComponent } from './book/book.component';
import { SlickModule } from 'ngx-slick';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    FoodComponent,
    RestoComponent,
    BarComponent,
    LifestyleComponent,
    SpaComponent,
    ActivitiesComponent,
    ExperiancesComponent,
    ExcursionComponent,
    WeddingsComponent,
    IndianComponent,
    WesternComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    PagenotfoundComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavTabsComponent,
    BookComponent,
    FooterComponent,

  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    SlickModule.forRoot()
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
