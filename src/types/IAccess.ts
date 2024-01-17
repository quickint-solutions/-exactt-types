import { IBase } from './IBase';

export interface IAccess extends IBase {
  userId: string;
  laboratoryId: string;
  departmentId: string;
  accessList: {
    master: boolean;
    customer: boolean;
    reference: boolean;
    payment: boolean;
    testGroup: boolean;
    resultTemplate: boolean;
    department: boolean;
    accounting: boolean;
    samples: boolean;
    stokManagement: boolean;
    laboratorySetting: boolean;
  };
  role: string;
}
