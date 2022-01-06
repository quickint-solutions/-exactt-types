export interface IBase {
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
  version?: number;
}

export interface IAddress {
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: number;
}

export interface IBankDetails {
  bank: string;
  branch: string;
  accountName: string;
  accountNumber: string;
  ifscCode: string;
}
