export interface Transaction {
  date: Date;
  beneficiary: string;
  mode: string;
  amount: number;
  currencyCode: string;
  credit: boolean;
}
