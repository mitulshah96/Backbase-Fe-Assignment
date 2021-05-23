import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Pipe({ name: 'itemFilter' })
export class TransactionFilter implements PipeTransform {
  transform(items: Transaction[], searchText: string): Transaction[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();

    return items.filter((it) => {
      return it.beneficiary.toLowerCase().includes(searchText);
    });
  }
}
