import { Component, OnInit } from '@angular/core';
import { Categories } from './categories';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Categories[] = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  loadCategories() {
    this.categoryService.getCategories('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImZpbGliZXJ0by5yaWNjaUBzbWFydHBlZy5ldSIsImV4cGlyZXMiOjE2MzEwOTExMDQuOTg0Mjc2OH0.3SpMhS2bpw0bZZ33D7oez2T_o4jhBW75q3z2wc2l7sI')
    .subscribe(newCategories=>this.categories = newCategories.popular_categories);
  }

}
