import { Component } from '@angular/core';
import { transactionData } from '../transactions/constants/transactions';
import { Transaction } from '../transactions/models/transaction.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  transactions: Transaction[] = transactionData;

  onFundReceive(transaction: Transaction) {
    this.transactions = [transaction, ...this.transactions];
  }
}
