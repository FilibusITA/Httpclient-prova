import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills:Skill[]=[]
  constructor(private skillService: SkillService) { }
  
  ngOnInit(): void {
    
    
  }

  loadSkills() {
    this.skillService.getSkills('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImZpbGliZXJ0by5yaWNjaUBzbWFydHBlZy5ldSIsImV4cGlyZXMiOjE2MzA3NDE5NjguMzE5MzU5OH0.HQzecGBBq9g8kmry-qUVgP1tZjyH1QmXOn-FA-h4nSw')
    .subscribe(skills=>this.skills=skills);
  }

}
