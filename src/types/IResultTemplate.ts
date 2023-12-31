import { IBase } from './IBase';

export interface IResultTemplate extends IBase {
  name: string;
  header: string;
  body: string;
  footer: string;
  laboratoryId?: string;
}
