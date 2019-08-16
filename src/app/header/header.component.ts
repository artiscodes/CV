import { Component, OnInit, HostListener } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(public lang: LanguageService, public router: Router, private projects: ProjectService) { }
  windowWidth;
  ngOnInit() {
    this.windowWidth = window.innerWidth;
    // this.router.url.indexOf('/projects');
        // window.location.href.indexOf('/projects')
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = window.innerWidth;
  }
}
