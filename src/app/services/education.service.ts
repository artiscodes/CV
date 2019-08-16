import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  readonly URL_DB = '/assets/education.json';
  readonly param = new HttpParams().set('apiKey', 'DWHX4BuAMXaZUaiwH-wJKDzXTHp_PYPM');
  private school = new BehaviorSubject<Array<[any]>>([]);
  public school_list;
  public url;
  constructor(private http: HttpClient, private router: Router) {
    this.getProjects().subscribe(plist => {
      this.school.next(plist);
      });
      this.getProjectsnObs().subscribe((trans: Array<[any]>) => {
        this.school_list = trans;
      });
   }


  getProjects(): Observable<Array<[any]>> {
    return this.http.get<Array<[any]>>(this.URL_DB, {params: this.param});
     }
  getProjectsnObs(): Observable<Array<[any]>> {
      return this.school.asObservable();
    }
}
