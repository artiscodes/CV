import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  readonly URL_DB = '/assets/experience.json';
  readonly param = new HttpParams().set('apiKey', 'DWHX4BuAMXaZUaiwH-wJKDzXTHp_PYPM');
  private company = new BehaviorSubject<Array<[any]>>([]);
  public company_list;
  public url;
  constructor(private http: HttpClient, private router: Router) {
    this.getProjects().subscribe(plist => {
      this.company.next(plist);
      this.company_list = this.company.getValue();
      // console.log(this.company.value[0]['id']);
      // console.log(this.company_list[0].responsibility);
      });
      // this.getProjectsnObs().subscribe((trans: Array<[any]>) => {
      //   this.company_list = trans;
      //   // console.log(this.company_list[0]['company']);
      //   console.log(this.company_list);

      // });
   }


  getProjects(): Observable<Array<[any]>> {
    return this.http.get<Array<[any]>>(this.URL_DB, {params: this.param});
     }
  // getProjectsnObs(): Observable<Array<[any]>> {
  //     return this.company.asObservable();
  //   }
}
