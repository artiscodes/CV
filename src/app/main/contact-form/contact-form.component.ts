import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  random1;
  random2;
  result;
  constructor() {
   }

  ngOnInit() {
    this.random1 = (Math.floor(Math.random() * 9) + 1).toString();
    this.random2 = (Math.floor(Math.random() * 9) + 1).toString();

  }

}
