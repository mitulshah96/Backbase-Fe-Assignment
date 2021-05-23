import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currencyTransform' })
export class CurrencyTransformPipe implements PipeTransform {
  transform(value: string) {
    if (value && value.length > 0) {
      let str = [...value.split('')];
      let currency = str[1];
      str[1] = str[0];
      str[0] = currency;
      return str.join('');
    }
  }
}
