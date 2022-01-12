import { IBase } from './IBase';

export interface IAccess extends IBase {
  userId: string;
  laboratoryId: string;
  departmentId: string;
  accessList: {
    master: boolean;
    customer: boolean;
    accounting: boolean;
    samples: boolean;
    stokManagement: boolean;
    laboratorySetting: boolean;
  };
  role: 'ADMIN' | 'RECEPTIONIST' | 'CHEMIST' | 'ACCOUNT' | 'HOD';
}
