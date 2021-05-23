import { AbstractControl } from '@angular/forms';

export function balanceValidator(balance: number) {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value !== null && control.value > balance) {
      return { balanceValidator: true };
    }
    return null;
  };
}
