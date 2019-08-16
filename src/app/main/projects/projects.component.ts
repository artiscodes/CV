import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
id;

  constructor(private router: Router, public projects: ProjectService) {
   }

ngOnInit() { }

onSelect(project) {
  this.router.navigate(['/projects', project.id]);
}

}
