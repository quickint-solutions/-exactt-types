import { IBase } from './IBase';

export interface IVerification extends IBase {
  code: string;
  userId: string;
}
