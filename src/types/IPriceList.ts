import { IBase } from './IBase';
import { ICustomer } from './ICustomer';
import { ILaboratory } from './ILaboratory';
import { IMaster } from './IMaster';

export interface IPriceListParameter extends IBase {
  name: string;
  price: number;
}
export interface IPriceList extends IBase {
  id?: string;
  customer: string | ICustomer;
  laboratory: string | ILaboratory;
  master: string | IMaster;
  parameters: IPriceListParameter[];
  allowDiscount: boolean;
}
