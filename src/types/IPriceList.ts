import { IBase } from './IBase';
import { ICustomer } from './ICustomer';
import { ILaboratory } from './ILaboratory';

export interface IPriceListParameter extends IBase {
  name: string;
  price: number;
}

export interface IPriceList extends IBase {
  customer: string | ICustomer;
  laboratory: string | ILaboratory;
  price: number;
  parameters: IPriceListParameter[];
  allowDiscount: boolean;
}
