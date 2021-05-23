import { NgModule } from '@angular/core';
import { TransactionsModule } from '../transactions/transactions.module';
import { FundTransferModule } from '../fund-transfer/fund-transfer.module';
import { SharedModule } from './../shared/shared.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [TransactionsModule, FundTransferModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
