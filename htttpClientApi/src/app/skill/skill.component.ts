import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RATING_VALUE_ACCESSOR } from 'primeng/rating';
import { Skill } from './skill';
import { SkillService } from './skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
  
    
})

export class SkillComponent implements OnInit {
  y= 0;
  searchQuery: string = '';
  skills: Skill[] = []
  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    

  }

  loadSkills() {
    console.log("search:",this.searchQuery)
    this.skillService.getSkills('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImZpbGliZXJ0by5yaWNjaUBzbWFydHBlZy5ldSIsImV4cGlyZXMiOjE2MzE2MDU1NDYuNTI1Mzk1Nn0.b1MTaKzKVVr9BA3_N7BN4-9bRUD5AjMEtHee3VN6qs8', this.searchQuery)
      .subscribe(newskills => 
         this.skills = newskills.skills
        );
  }

}
