import { Transaction } from '../transaction/transaction';

export interface Plan {
  calculateFee(transaction: Transaction[]): number;
}

export abstract class BasePlan implements Plan {
  abstract calculateFee(transaction: Transaction[]): number;

  calculateMinimumFee(amount: number): number {
    return amount > 30 ? amount : 30;
  }
}
