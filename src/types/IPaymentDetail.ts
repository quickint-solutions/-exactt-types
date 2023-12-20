import { IBase } from './IBase';
import { ICustomer } from './ICustomer';
import { ILaboratory } from './ILaboratory';
import { ISample } from './ISample';

export interface IPaymentDetails extends IBase {
  sample: string | ISample;
  customer: string | ICustomer;
  laboratory: string | ILaboratory;
}
