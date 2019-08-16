import { Component, OnInit, HostListener } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu_items = ['about me', 'skills', 'education', 'experience', 'projects',  'contact'];
  distanceToTop;

  constructor(public lang: LanguageService) { }

  ngOnInit() {
    if (window.innerWidth < 600) {this.distanceToTop = '-72'; } else {this.distanceToTop = '-146'; }
  }
  onSelect(item) {
    document.getElementById(item).scrollIntoView(true), window.scrollBy({top: this.distanceToTop, behavior: 'smooth', });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 600) {this.distanceToTop = '-72'; } else {this.distanceToTop = '-146'; }

  }
}
