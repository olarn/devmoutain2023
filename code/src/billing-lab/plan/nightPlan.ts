import { Transaction } from '../transaction/transaction';
import { PlanCalculator } from './plan';

export class NightPlan extends PlanCalculator {
  calculateFee(transactions: Transaction[]): number {
    const totalMinutes = this.dayTimeTransactions(transactions).reduce(
      (acc, transaction: Transaction) => {
        return acc + transaction.totalMinutes();
      },
      0
    );
    return super.calculateMinimumFee(totalMinutes);
  }

  private dayTimeTransactions(transactions: Transaction[]): Transaction[] {
    return transactions.filter((transaction) => {
      return (
        transaction.beginTime <= new Date('2020-01-01 17:59:59') &&
        transaction.beginTime >= new Date('2020-01-01 6:00:00')
      );
    });
  }
}
