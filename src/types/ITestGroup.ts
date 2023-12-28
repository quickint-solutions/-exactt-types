import { IBase } from './IBase';

export interface IAdditionalFields {
  key: string;
  type: string;
  required: boolean;
}

export interface ITestGroup extends IBase {
  name: string;
  description?: string;
  prefix?: string;
  laboratoryId: string;
  extraFields?: string[] | [];
  additionalFields?: IAdditionalFields[];
}
