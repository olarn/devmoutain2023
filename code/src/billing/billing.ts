import { Transaction } from './transaction/transaction';
import { PlanType } from './plan/planType';

export class Billing {
  calculatesMonthlyFee(transactions: Transaction[], plan: PlanType): number {
    let totalMinutes = 0.0;
    for (const transaction of transactions) {
      totalMinutes += transaction.totalMinutes();
    }
    const minimumToPay = 30;
    let fee = 0.0;
    if (plan === PlanType.BASIC) {
      fee = totalMinutes;
    } else if (plan == PlanType.VALUE) {
      if (totalMinutes <= 30) {
        fee = totalMinutes * 0.5;
      } else {
        fee = 15 + (totalMinutes - 30);
      }
    } else {
      throw new Error('Unknown plan type');
    }
    if (fee < minimumToPay) {
      return minimumToPay;
    }
    return fee;
  }
}
