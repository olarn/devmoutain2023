import { Billing } from '../billing';
import { PlanType } from '../plan/planType';

describe('Billing for Unknown plan', () => {
  it('should throw error if plan is unknown', () => {
    const billing = new Billing();
    expect(() => {
      billing.calculatesMonthlyFee([], PlanType.UNKNOWN);
    }).toThrowError('Unknown plan type');
  });
});
