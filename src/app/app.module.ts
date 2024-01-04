import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { PoliticesComponent } from './components/politics/politices/politices.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { CardComponent } from './components/dashboard/card/card.component';
import { ScienceComponent } from './components/science/science.component';
import { CultureComponent } from './components/culture/culture.component';
import { SciencesComponent } from './components/science/sciences/sciences.component';
import { SportsComponent } from './components/sports/sports.component';
import { SportComponent } from './components/sports/sport/sport.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { provideRoutes, ROUTES } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
     PoliticsComponent,
    PoliticesComponent,
    CardComponent,
    ScienceComponent,
    CultureComponent,
    SciencesComponent,
    SportsComponent,
    SportComponent,
    ContactComponent,
    LoginComponent,
    FavouritesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule,
  
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
