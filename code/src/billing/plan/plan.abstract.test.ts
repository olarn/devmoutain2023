import { Transaction } from 'billing/transaction/transaction';
import { BasePlan } from './plan';

describe('Concrete Abstract Billing', () => {
  it('should return 30THB if no transaction', () => {
    const noPlan = new NoPlan();
    expect(noPlan.calculateMinimumFee(0)).toEqual(30);
  });
});

class NoPlan extends BasePlan {
  calculateFee(transaction: Transaction[]): number {
    return 0;
  }
}
