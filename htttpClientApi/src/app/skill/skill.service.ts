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
  link: string = 'https://skillsapi.itsyourskills.com/search-skills?search_query=java&offset=0&limit=20'

  constructor(private http: HttpClient) { }

  getSkills(token: string): Observable<SkillSearchResponse> {
    console.log(token);
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<SkillSearchResponse>(this.link, { headers: headers })
  }

}
