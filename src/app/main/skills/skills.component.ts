import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  rate;
  numberOfSkills;
  constructor(  public skills: SkillsService) {
    // for (let i = 0;  i < this.numberOfSkills; i++) {
    // this.rate = Array(this.skills.skills_list[i].rate); }

   }

  ngOnInit() {
    this.skills.getProjectsnObs().subscribe((trans: Array<[any]>) => {
      this.numberOfSkills = trans;
      // console.log(this.numberOfSkills.length);
    });
  }

}
