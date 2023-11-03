import { Transaction } from '../transaction/transaction';

export interface Plan {
  calculateFee(transaction: Transaction[]): number;
}

export abstract class PlanCalculator implements Plan {
  calculateMinimumFee(amount: number): number {
    return amount > 30 ? amount : 30;
  }

  abstract calculateFee(transaction: Transaction[]): number;
}
