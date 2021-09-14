import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillComponent } from './skill/skill.component';
import { CategoriesComponent } from './categories/categories.component'
//import {RatingModule} from 'primeng/rating';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TabViewModule} from 'primeng/tabview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingModule } from 'ngx-bootstrap/rating';
import { HomeComponent } from './home/home.component';
import { BassoComponent } from './basso/basso.component';
import { SchermataHomeComponent } from './schermata-home/schermata-home.component';
import {RadioButtonModule} from 'primeng-lts/radiobutton';
import { ProfiloUtenteComponent } from './profilo-utente/profilo-utente.component';
import {ButtonModule} from 'primeng-lts/button';

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    CategoriesComponent,
    HomeComponent,
    BassoComponent,
    SchermataHomeComponent,
    ProfiloUtenteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RatingModule,
    SplitButtonModule,
    TabViewModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
