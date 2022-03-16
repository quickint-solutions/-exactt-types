import { IBase } from './IBase';
import { ICustomer } from './ICustomer';
import { ISampleParameter } from './ISampleParameter';
import { ITestGroup } from './ITestGroup';
import { IUser } from './IUser';

export interface ISample extends IBase {
  laboratoryId: string;
  customer: string | ICustomer;
  dueDate: Date;
  labDueDate: Date;
  collectionDate: Date;
  mfgDate: Date;
  expDate?: Date;
  sampleId?: string;
  name: string;
  genericName: string;
  testGroup: string | ITestGroup;
  sampleCode: string;
  brandName: string;
  manufacture: string;
  marking: string;
  supplier: string;
  batchNo: string;
  batchSize: string;
  drugLicNo: string;
  type: string;
  description?: string;
  samplePacking: string;
  sampleQty: string;
  sampleCondition: string;
  envCondition: string;
  servingSize?: string;
  samplingMethod: string;
  hod: string | IUser;
  collectionBy: string | IUser;
  status?: 'PANDING' | 'INPROCESS' | 'COMPLETED';
  parameters?: ISampleParameter[];
}
