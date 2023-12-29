import { IBase } from './IBase';

export interface ITestResult extends IBase {
  result: string;
  description: string;
}
