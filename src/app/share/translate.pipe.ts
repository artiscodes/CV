import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { LanguageService } from '../services/language.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private translationService: TranslationService, private languageService: LanguageService) {}

  transform(value: any, args?: any): any {
    // return null;
    // console.log(value);
    return this.languageService.translate(value);
  }

}
