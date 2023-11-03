import { Transaction } from '../transaction/transaction';
import { PlanCalculator } from './plan';

export class ValuePlan extends PlanCalculator {
  calculateFee(transactions: Transaction[]): number {
    let totalMinutes = 0.0;
    for (const transaction of transactions) {
      totalMinutes += transaction.totalMinutes();
    }
    if (totalMinutes <= 30) {
      totalMinutes = totalMinutes * 0.5;
    } else {
      totalMinutes = 15 + (totalMinutes - 30);
    }
    return super.calculateMinimumFee(totalMinutes);
  }
}
