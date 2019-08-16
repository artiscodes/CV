import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  readonly URL_DB = '/assets/skills.json';
  readonly param = new HttpParams().set('apiKey', 'DWHX4BuAMXaZUaiwH-wJKDzXTHp_PYPM');
  private skills = new BehaviorSubject<Array<[any]>>([]);
  public skills_list;
  public url;
  constructor(private http: HttpClient, private router: Router) {
    this.getProjects().subscribe(slist => {
      this.skills.next(slist);
      });
      this.getProjectsnObs().subscribe((trans: Array<[any]>) => {
        this.skills_list = trans;
      });
   }


  getProjects(): Observable<Array<[any]>> {
    return this.http.get<Array<[any]>>(this.URL_DB, {params: this.param});
     }
  getProjectsnObs(): Observable<Array<[any]>> {
      return this.skills.asObservable();
    }
}
