import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories';
import { CategoryService } from '../category.service';

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
    this.categoryService.getCategories('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImZpbGliZXJ0by5yaWNjaUBzbWFydHBlZy5ldSIsImV4cGlyZXMiOjE2MzA3NDE5NjguMzE5MzU5OH0.HQzecGBBq9g8kmry-qUVgP1tZjyH1QmXOn-FA-h4nSw')
    .subscribe(categories=>this.categories = categories);
  }

}
