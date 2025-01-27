import { Injectable } from '@angular/core';

// export class TranslationSet {
//   public languange: string;
//   public values: {[key: string]: string} = {};
// }

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public languages = ['ger', 'eng'];

  public language = 'ger';

  private dictionary: {} = {
      'ger' : {
          languange: 'ger',
          values: {
              'example' : 'Beispiel',
              'no' : 'nein'
          }
      },
      'eng' : {
          languange: 'eng',
          values: {
              'example' : 'Example',
              'no' : 'no'
          }
      }
  };

  constructor() {
    this.language = 'eng';
   }

  translate(value: string): string {
    // console.log('translate called with value ' + value + ' and language ' + this.language);
    if ( this.dictionary[this.language] != null) {
        return this.dictionary[this.language].values[value];
    }
}

}
