import { IBase, IAddress, IBankDetails } from './IBase';

export default interface ILaboratory extends IBase {
  _id: string;
  name: string;
  contactPerson: string;
  country: string;
  phone: string;
  email: string;
  website: string;
  address: IAddress;
  bankingDeatils: IBankDetails;
  gst: string;
  pan: string;
  nabl: string;
  type: string;
  otherLicenceNumber: string;
}
