import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { SchermataHomeComponent } from './schermata-home/schermata-home.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  { path: 'home', component: SchermataHomeComponent },
  { path: 'ricerca', component: SkillComponent },
  { path: 'categorie', component: CategoriesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}