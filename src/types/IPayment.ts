import { IBase } from './IBase';
import { ICustomer } from './ICustomer';
import { IReference } from './IReference';
import { ISample } from './ISample';
import { IUser } from './IUser';

export interface IPayment extends IBase {
  customer: string | ICustomer;
  reference: string | IReference;
  sample: string | ISample;
  paymentMode: 'CASH ' | 'ONLINE ' | 'CHEQUE ' | 'UPI';
  collectedBy: string | IUser;
  amount: number;
  laboratoryId: string;
}
