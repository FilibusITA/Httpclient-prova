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
    this.skillService.getSkills('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImZpbGliZXJ0by5yaWNjaUBzbWFydHBlZy5ldSIsImV4cGlyZXMiOjE2MzE4NjUwMTQuMzI4NDE1NH0.xVyeS7lXZBI0m7KI1ofsLxbbK0R6Ubnv_PtNVg04Qiw', this.searchQuery)
      .subscribe(newskills => {
        this.skills = newskills.skills;
      });
  }
  
  /* if (document.getElementById('skill').checked) {
    //aggiungere rating che parte da 0 per  ogni skill
    //una volta aggiunto il rating aggiungere all'if qui sopra un controllo che verifichi il rating sia compreso tra 1 e 5
    //tutte le condizione sono accettate, aggiungere tutto sulla lista a destra

  } else () {
      //dire all'utente che l'input è sbagliato
  } */
 

}
