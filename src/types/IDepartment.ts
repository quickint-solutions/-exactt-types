import { IBase } from './IBase';

export interface IDepartment extends IBase {
  name: string;
  description: string;
  laboratoryId: string;
}
