import { IBase } from './IBase';

interface IUser extends IBase {
  name: string;
  country: string;
  phone: string;
  email: string;
  isVerified: boolean;
  password: string;
}

export default IUser;
