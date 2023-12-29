import { IBase } from './IBase';

export interface IUser extends IBase {
  name: string;
  country: string;
  phone?: string;
  email?: string;
  isVerified: boolean;
  password: string;
}
