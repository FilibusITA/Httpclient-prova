import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RATING_VALUE_ACCESSOR } from 'primeng/rating';
import { Skill } from './skill';
import { SkillService } from './skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']


})



export class SkillComponent implements OnInit {
  y = 0;
  searchQuery: string = '';
  skills: Skill[] = [];
  selectedSkill: any; //Skill

  constructor(private skillService: SkillService) {


  }

  ngOnInit(): void {


  }


  loadSkills() {
    console.log("search:", this.searchQuery)
    this.skillService.getSkills('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImZpbGliZXJ0by5yaWNjaUBzbWFydHBlZy5ldSIsImV4cGlyZXMiOjE2MzE3MTY2ODMuMTYyMjc0Nn0.HnAmNgmcZB1YcW5r55emixCvAcJQQ5oao4_r7M3VpdE', this.searchQuery)
      .subscribe(newskills => {
        this.skills = newskills.skills;
      });
  }

}
