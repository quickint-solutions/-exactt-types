import { IBase } from './IBase';
import { ICustomer } from './ICustomer';
import { ISample } from './ISample';
import { IUser } from './IUser';

export interface IPayment extends IBase {
  customer: string | ICustomer;
  sample: string | ISample;
  paymentMode: string | 'CASH ' | 'ONLINE ' | 'CHEQUE ' | 'UPI';
  collectedBy: string | IUser;
  amount: number;
}
