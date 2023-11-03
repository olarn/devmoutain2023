import { Transaction } from './transaction/transaction';
import { PlanType } from './plan/planType';
import { BasicPlan } from './plan/basicPlan';
import { ValuePlan } from './plan/valuePlan';
import { NightPlan } from './plan/nightPlan';

export class Billing {
  calculatesMonthlyFee(transactions: Transaction[], plan: PlanType): number {
    let fee = 0.0;
    switch (plan) {
      case PlanType.BASIC:
        fee = new BasicPlan().calculateFee(transactions);
        break;
      case PlanType.VALUE:
        fee = new ValuePlan().calculateFee(transactions);
        break;
      case PlanType.NIGHT_PLAN:
        fee = new NightPlan().calculateFee(transactions);
        break;
      default:
        throw new Error('Unknown plan type');
    }
    return fee;
  }
}
