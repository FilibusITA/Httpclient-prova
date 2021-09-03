import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { Categories } from './categories';
import { Skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Categories[] = []
  link: string = 'https://skillsapi.itsyourskills.com/popular-categories'

  constructor(private http: HttpClient) { }

  getCategories(token: string): Observable<Categories[]> {
    console.log(token);
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Categories[]>(this.link, { headers: headers })
  }

}
