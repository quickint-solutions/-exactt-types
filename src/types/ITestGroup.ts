import { IBase } from './IBase';

export interface ITestGroup extends IBase {
  name: string;
  description: string;
  prefix: string;
  laboratoryId: string;
  extraFields?: string[] | [];
}
