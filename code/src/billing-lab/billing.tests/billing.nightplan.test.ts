import { Billing } from '../billing';
import { PlanType } from '../plan/planType';
import { Transaction } from '../transaction/transaction';

describe('Billing for Night plan. Free from 6pm to 6am. 1 THB/min thereafter. Min 30 THB/month.', () => {
  const allDayAndNightTransactions = [
    // day time 6am - 6pm
    new Transaction(new Date('2020-01-01 09:00'), new Date('2020-01-01 09:20')),
    new Transaction(new Date('2020-01-01 11:00'), new Date('2020-01-01 11:20')),
    new Transaction(new Date('2020-01-01 14:00'), new Date('2020-01-01 14:20')),

    // night time 6pm - 6am
    new Transaction(new Date('2020-01-01 18:00'), new Date('2020-01-01 18:20')),
    new Transaction(new Date('2020-01-01 22:00'), new Date('2020-01-01 22:20')),
  ];

  it('should return 30THB if no transaction', () => {
    const billing = new Billing();
    const transactions: Transaction[] = [];
    const plan = PlanType.NIGHT_PLAN;

    const actual = billing.calculatesMonthlyFee(transactions, plan);

    expect(actual).toBe(30);
  });

  it('should return 30THB if transactions are all night time.', () => {
    const billing = new Billing();
    const transactions = nightTimeTransactions();
    const plan = PlanType.NIGHT_PLAN;

    const actual = billing.calculatesMonthlyFee(transactions, plan);

    expect(actual).toBe(30);
  });

  it('should return 60THB if transactions are 60 mins daytime and 40 mins nighttime.', () => {
    const billing = new Billing();
    const transactions = allDayAndNightTransactions;
    const plan = PlanType.NIGHT_PLAN;

    const actual = billing.calculatesMonthlyFee(transactions, plan);

    expect(actual).toBe(60);
  });

  // helper functions ==============================================================

  function nightTimeTransactions(): Transaction[] {
    return allDayAndNightTransactions.filter((transaction) => {
      return (
        transaction.beginTime >= new Date('2020-01-01 18:00:00') &&
        transaction.beginTime <= new Date('2020-01-01 23:50:59')
      );
    });
  }

  function dayTimeTransactions(): Transaction[] {
    return allDayAndNightTransactions.filter((transaction) => {
      return (
        transaction.beginTime <= new Date('2020-01-01 17:59:59') &&
        transaction.beginTime >= new Date('2020-01-01 6:00:00')
      );
    });
  }
});
