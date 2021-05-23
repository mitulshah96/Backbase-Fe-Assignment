import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../models/account.model';
import { balanceValidator } from '../validators/balance.validator';

@Component({
  selector: 'fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.scss'],
})
export class FundTransferComponent {
  constructor(private fb: FormBuilder) {}

  @Output() onTransfer: EventEmitter<any> = new EventEmitter();

  isModalVisible: boolean = false;

  account: Account = {
    id: 'BR899876234507',
    name: 'Personal',
    balance: 7000,
    schemeType: 'CAA',
    currencyCode: 'EUR',
  };

  fundTransferForm = this.fb.group({
    beneficiary: ['', Validators.required],
    mode: 'Online Transfer',
    date: new Date(),
    currencyCode: 'EUR',
    credit: false,
    amount: ['', [Validators.required, balanceValidator(this.account.balance)]],
  });

  get f() {
    return this.fundTransferForm.controls;
  }

  onSubmit(form: FormGroup) {
    Object.keys(this.f).forEach((field) => {
      const control = this.f[field];
      control.markAsTouched({ onlySelf: true });
    });

    if (form.valid) {
      this.isModalVisible = true;
    }
  }

  onModalClose() {
    this.isModalVisible = false;
  }

  onTransferFund() {
    this.account.balance -= this.f['amount'].value;
    this.isModalVisible = false;
    this.onTransfer.emit(this.fundTransferForm.value);
    this.fundTransferForm.reset();
  }
}
