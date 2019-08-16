import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  readonly URL_DB = '/assets/projects.json';
  readonly param = new HttpParams().set('apiKey', 'DWHX4BuAMXaZUaiwH-wJKDzXTHp_PYPM');
  private project = new BehaviorSubject<Array<[any]>>([]);
  public projects_list;
  public url;
  constructor(private http: HttpClient, private router: Router) {
    this.getProjects().subscribe(plist => {
      this. project.next(plist);
      });
      this.getProjectsnObs().subscribe((trans: Array<[any]>) => {
        this.projects_list = trans;
      });
      this.url = router.url.indexOf('/projects');
      // console.log(this.url);
   }


  getProjects(): Observable<Array<[any]>> {
    return this.http.get<Array<[any]>>(this.URL_DB, {params: this.param});
     }
  getProjectsnObs(): Observable<Array<[any]>> {
      return this.project.asObservable();
    }
}
