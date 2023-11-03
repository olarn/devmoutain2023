export class Transaction {
  constructor(public readonly beginTime: Date, public readonly endTime: Date) {}

  totalMinutes(): number {
    const milliseconds = this.endTime.getTime() - this.beginTime.getTime();
    return milliseconds / (1000 * 60);
  }
}
