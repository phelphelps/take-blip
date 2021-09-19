import { Pipe, PipeTransform } from "@angular/core";
import { EUA, BRAZIL } from '../../shared/constants/language-codes';

@Pipe({name: 'getLanguage'})

export class GetLanguagePipe implements PipeTransform {

  transform(languageCode: string) {
    const languageMap: { [key: string]: any } = new Map();
    languageMap.set(EUA.languageCode, EUA.countryAndLanguage)
    languageMap.set(BRAZIL.languageCode, BRAZIL.countryAndLanguage)
    return languageMap.get(languageCode);
  }
}
