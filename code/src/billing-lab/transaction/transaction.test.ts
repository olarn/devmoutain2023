import { Transaction } from './transaction';

describe('Transaction', () => {
  it('should calculate the total hours', () => {
    const transactions = [
      new Transaction(
        new Date('2020-01-01 09:00'),
        new Date('2020-01-01 09:01')
      ),
    ];
    expect(transactions[0].totalMinutes()).toBe(1);
  });
});
