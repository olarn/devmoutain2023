import { Transaction } from './transaction/transaction';
import { PlanType } from './plan/planType';
import { BasicPlan } from './plan/basicPlan';
import { ValuePlan } from './plan/valuePlan';
import { NightPlan } from './plan/nightPlan';

export class Billing {
  calculatesMonthlyFee(transactions: Transaction[], plan: PlanType): number {
    switch (plan) {
      case PlanType.BASIC:
        return new BasicPlan().calculateFee(transactions);
      case PlanType.VALUE:
        return new ValuePlan().calculateFee(transactions);
      case PlanType.NIGHT_PLAN:
        return new NightPlan().calculateFee(transactions);
      default:
        throw new Error('Unknown plan type');
    }
  }
}
