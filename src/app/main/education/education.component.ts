import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  angular_offer = ['offert-angular-1', 'offert-angular-2', 'offert-angular-3'];
  excel_offer = ['offert-excel-1'];

  constructor(private router: Router, public education: EducationService) { }

  ngOnInit() {
  }

}
