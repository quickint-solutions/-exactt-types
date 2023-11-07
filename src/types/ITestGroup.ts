import { IBase } from './IBase';

export interface ITestGroup extends IBase {
  name: string;
  description: string;
  prefix: string;
  laboratoryId: string;
  extraFields?: string[] | [];
  additionalFields: { key: string; type: 'text'; required: boolean }[];
}
