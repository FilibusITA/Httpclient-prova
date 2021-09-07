import { Component, OnInit } from '@angular/core';
import { Skill } from './skill';
import { SkillService } from './skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  searchQuery: string = '';
  skills: Skill[] = []
  constructor(private skillService: SkillService) { }

  ngOnInit(): void {


  }

  loadSkills() {
    console.log("search:",this.searchQuery)
    this.skillService.getSkills('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImZpbGliZXJ0by5yaWNjaUBzbWFydHBlZy5ldSIsImV4cGlyZXMiOjE2MzEwOTExMDQuOTg0Mjc2OH0.3SpMhS2bpw0bZZ33D7oez2T_o4jhBW75q3z2wc2l7sI', this.searchQuery)
      .subscribe(newskills => 
         this.skills = newskills.skills
        );
  }

}
