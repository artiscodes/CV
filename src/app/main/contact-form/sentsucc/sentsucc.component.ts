import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-sentsucc',
  templateUrl: './sentsucc.component.html',
  styleUrls: ['./sentsucc.component.scss']
})
export class SentsuccComponent implements OnInit {

  constructor(private router: Router, public lang: LanguageService) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 10000);
  }

}
