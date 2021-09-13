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
    this.categoryService.getCategories('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImZpbGliZXJ0by5yaWNjaUBzbWFydHBlZy5ldSIsImV4cGlyZXMiOjE2MzE2MDU1NDYuNTI1Mzk1Nn0.b1MTaKzKVVr9BA3_N7BN4-9bRUD5AjMEtHee3VN6qs8')
    .subscribe(newCategories=>this.categories = newCategories.popular_categories);
  }

}
