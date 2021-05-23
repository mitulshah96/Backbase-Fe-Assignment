import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { TransactionsComponent } from './components/transaction-list/transaction-list.component';
import { CurrencyTransformPipe } from './filters/currency.filter';
import { TransactionFilter } from './filters/transaction-list.filter';

@NgModule({
  declarations: [
    CurrencyTransformPipe,
    TransactionFilter,
    TransactionItemComponent,
    TransactionsComponent,
  ],
  imports: [SharedModule, BrowserModule, FormsModule],
  exports: [TransactionsComponent],
})
export class TransactionsModule {}
