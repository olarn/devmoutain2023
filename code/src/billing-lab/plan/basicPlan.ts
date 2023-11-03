import { Transaction } from '../transaction/transaction';
import { PlanCalculator } from './plan';

export class BasicPlan extends PlanCalculator {
  calculateFee(transactions: Transaction[]): number {
    let totalMinutes = 0.0;
    for (const transaction of transactions) {
      totalMinutes += transaction.totalMinutes();
    }
    return super.calculateMinimumFee(totalMinutes);
  }
}
