import { Billing } from '../billing';
import { PlanType } from '../plan/planType';
import { Transaction } from '../transaction/transaction';

describe('Billing for Value plan', () => {
  const allDayTransactions = [
    new Transaction(new Date('2020-01-01 09:00'), new Date('2020-01-01 09:20')),
    new Transaction(new Date('2020-01-01 11:00'), new Date('2020-01-01 11:20')),
    new Transaction(new Date('2020-01-01 14:00'), new Date('2020-01-01 14:20')),
  ];

  it('should return 30THB if no transaction', () => {
    const billing = new Billing();
    const emptyTransaction: Transaction[] = [];
    expect(
      billing.calculatesMonthlyFee(emptyTransaction, PlanType.VALUE)
    ).toEqual(30);
  });

  it('should return 45THB if total transactions are 60 minutes', () => {
    const billing = new Billing();
    expect(
      billing.calculatesMonthlyFee(allDayTransactions, PlanType.VALUE)
    ).toEqual(45);
  });
});
