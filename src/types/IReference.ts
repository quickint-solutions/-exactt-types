import { IBase } from './IBase';
import { IAddress } from '..';

export interface IReference extends IBase {
  name: string;
  address: IAddress;
  phone: string;
  companyName?: string;
  laboratoryId: string;
}
