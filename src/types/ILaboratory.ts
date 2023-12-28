import { IBase, IAddress, IBankDetails } from './IBase';

export interface ILaboratory extends IBase {
  logo: string;
  name: string;
  prefix: string;
  contactPerson: string;
  country?: string;
  phone: string;
  email: string;
  website?: string;
  address: IAddress;
  bankingDeatils: IBankDetails;
  gst?: string;
  pan?: string;
  nabl?: string;
  drugLicenceNumber: string;
  type?: string;
  otherLicenceNumber?: string;
  stampImage?: string;
}
