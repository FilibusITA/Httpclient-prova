import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { Categories, PopularCategoriesResponse } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Categories[] = []
  link: string = 'https://skillsapi.itsyourskills.com/popular-categories'

  constructor(private http: HttpClient) { }

  getCategories(token: string): Observable<PopularCategoriesResponse> {
    console.log(token);
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<PopularCategoriesResponse>(this.link, { headers: headers })
  }

}
