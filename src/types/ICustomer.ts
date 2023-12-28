import { IAddress, IBankDetails } from '..';
import { IBase } from './IBase';

interface IContactDetails {
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  country: string;
}

export interface ICustomer extends IBase {
  laboratoryId?: string;
  name: string;
  email: string;
  phone: string;
  country?: string;
  address?: IAddress[];
  contactDetails?: IContactDetails[];
  bankingDeatils?: IBankDetails;
  pan?: string;
  gst?: string;
  aadhar?: string;
  drugLicenceNumber?: string;
  paymentTerms?: number;
  creditLimit?: number;
}
