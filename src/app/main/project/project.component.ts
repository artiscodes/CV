import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewInit {
  windowWidth;
  slides;
  btnBackMargin;
  public projectId;
  constructor(private route: ActivatedRoute, private router: Router, public projects: ProjectService) {
    // const xxx = this.projects.projects_list[0].slides;
    // console.log(xxx);
    // this.slides = Array(5);
   }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.projectId = id;
    this.projects.getProjects().subscribe(() => {
    // if (this.projects.projects_list[this.projectId - 1].slides = undefined) { return; }
    this.slides = Array(this.projects.projects_list[this.projectId - 1].slides);
    this.windowWidth = window.innerWidth;
    this.btnBackMargin = 25 + ((this.windowWidth - 1366) / 2);
    });
    window.scrollTo(0, 0);


  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = window.innerWidth;
    this.btnBackMargin = 25 + ((this.windowWidth - 1366) / 2);
  }
  ngAfterViewInit(): void {
  }

}
