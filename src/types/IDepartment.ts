import { IBase } from './IBase';

export default interface IDepartment extends IBase {
  name: string;
  description: string;
  accessList: object;
  laboratoryId: string;
}
