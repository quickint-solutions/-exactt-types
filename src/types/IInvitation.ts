import { IBase } from './IBase';

export interface IInvitation extends IBase {
  email: string;
  role: string;
  departmentId: string;
  verificationCode: string;
  verificationExpireDate: Date;
  IsExpired: boolean;
  userId: string;
  laboratoryId?: string;
}
