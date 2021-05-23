import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FundTransferComponent } from './components/fund-transfer.component';

@NgModule({
  declarations: [FundTransferComponent],
  imports: [BrowserModule, ReactiveFormsModule, SharedModule],
  exports: [FundTransferComponent],
})
export class FundTransferModule {}
