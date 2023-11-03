import { Billing } from '../billing';
import { PlanType } from '../plan/planType';
import { Transaction } from '../transaction/transaction';

describe('Billing for Night plan', () => {
  const allDayAndNightTransactions = [
    new Transaction(new Date('2020-01-01 09:00'), new Date('2020-01-01 09:20')),
    new Transaction(new Date('2020-01-01 11:00'), new Date('2020-01-01 11:20')),
    new Transaction(new Date('2020-01-01 14:00'), new Date('2020-01-01 14:20')),
    new Transaction(new Date('2020-01-01 18:00'), new Date('2020-01-01 18:20')),
    new Transaction(new Date('2020-01-01 22:00'), new Date('2020-01-01 22:20')),
  ];

  it('should return 30THB if no transaction', () => {
    //TODO: Write test case for empty transaction here
  });

  it('should return 30THB if transactions are all night time.', () => {
    //TODO: Write test case for all night time transactions here
  });

  it('should return 60THB if transactions are 60 mins daytime and 40 mins nighttime.', () => {
    //TODO: Write test case for mixed transactions here
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
