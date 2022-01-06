import { IBase } from './IBase';

export default interface IVerification extends IBase {
  code: string;
  userId: string;
}
