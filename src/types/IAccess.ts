import { IBase } from './IBase';

export interface IAccess extends IBase {
  userId: string;
  laboratoryId: string;
  departmentId: string;
  role: 'ADMIN' | 'RECEPTIONIST' | 'CHEMIST' | 'ACCOUNT' | 'HOD';
}
