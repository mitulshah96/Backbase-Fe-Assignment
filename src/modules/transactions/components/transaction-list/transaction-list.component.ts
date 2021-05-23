import { Component, Input } from '@angular/core';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionsComponent {
  searchText: string;
  @Input() transactions: Transaction[];

  onTransactionFilter = (text: string) => (this.searchText = text);
}
