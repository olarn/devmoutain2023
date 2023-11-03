export enum PlanType {
  UNKNOWN = 'Unknown',
  BASIC = '1 THB per minute. Minimum pay 30THB/month.',
  VALUE = '0.5 THB/min for first 30 minutes. 1 THB/min thereafter. Min pay 30THB/month.',

  // new requirements
  NIGHT_PACK = 'free from 6pm to 6am. 1 THB/min thereafter. Min 30 THB/month.',
  BIZ_VALUE = 'free from 9am to 6pm. 1 THB/min thereafter. Min 30 THB/month.',
}
