import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'ricerca', component: SkillComponent },
  { path: 'categorie', component: CategoriesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}