import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CV';
  innerWidth;
  innerHeight;
  scrollPosition;
  constructor (public router: Router) {

  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.scrollPosition = window.pageYOffset;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
  this.innerWidth = window.innerWidth;
  }
  @HostListener('window:scroll', ['$event'])
  onscroll(event) {
    this.scrollPosition = window.pageYOffset;
  }
  scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
