import { Transaction } from '../transaction/transaction';

export interface Plan {
  calculateFee(transaction: Transaction[]): number;
}
