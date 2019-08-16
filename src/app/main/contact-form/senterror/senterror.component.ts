import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-senterror',
  templateUrl: './senterror.component.html',
  styleUrls: ['./senterror.component.scss']
})
export class SenterrorComponent implements OnInit {

  constructor(private router: Router, public lang: LanguageService) { }

  ngOnInit() {
    setTimeout(() => {
    this.router.navigate(['/']);
  }, 10000);
  }

}
