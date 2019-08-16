import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  // readonly URL_DB = 'assets/text/menu-v1.json';
  readonly URL_DB = '/assets/text/menu-v1.json';
  // readonly URL_DB = 'https://api.mlab.com/api/1/databases/ar-code/collections/languages';
  readonly param = new HttpParams().set('apiKey', 'DWHX4BuAMXaZUaiwH-wJKDzXTHp_PYPM');
  language;
  public languages = ['eng', 'pl'];
  private translation = new BehaviorSubject<Array<[any][any]>>([]);
  private translation_list;
  constructor(private http: HttpClient) {
    this.language = 'pl';
    this.getTranslation().subscribe(plist => {
      this.translation.next(plist);
      // this.translation_list = this.translation.getValue();
      // this.user = this.translation_list[0]['eng'].values['no'];
      // console.log(this.translation);
      // console.log(this.translation_list[0]['eng'].values['no']);
      this.getTranslationObs().subscribe((trans: Array<[any][any]>) => {
        this.translation_list = trans;
        // console.log(this.translation_list);
    });
      });
      // this.getTranslationObs().subscribe((trans: Array<[any][any]>) => {
      //   this.translation_list = trans;

   }
  getTranslation(): Observable<Array<[any][any]>> {
    return this.http.get<Array<[any][any]>>(this.URL_DB, {params: this.param});
     }
  getTranslationObs(): Observable<Array<[any][any]>> {
      return this.translation.asObservable();
    }

     translate(value: string): string {
      // console.log('translate called with value ' + value + ' and language ' + this.language);
      if ( this.translation_list !== undefined) {
          // return this.translation_list[0][this.language].values[value];
          return this.translation_list[this.language].values[value];
      } else {return null; }

  }

  // getTranslation() {
  //   return this.http.get<Array<[]>>(this.URL_DB, {params: this.param,
  //   headers: new HttpHeaders({'Content-Type' : 'application/json'})})
  //   .subscribe((data: Array<[]>) => {
  //   console.log(data);
  //   this.translation_list = data;
  //   this.password = data[0]['ger'].values['no'];
  //   console.log(this.password);
  //     });
  //    }
  change_lang(value: String) {
    this.language = value;
  }
}
