import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { Skill, SkillSearchResponse } from './skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
 
  
  skills: Skill[] = []
  link: string =''
  val1:number=0;

  constructor(private http: HttpClient) { }

  getSkills(token: string, searchQuery: string): Observable<SkillSearchResponse> {
    console.log(token);
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    this.link = 'https://skillsapi.itsyourskills.com/search-skills?search_query='+searchQuery+'&offset=0&limit=1000'
    return this.http.get<SkillSearchResponse>(this.link, { headers: headers })
  }

}
