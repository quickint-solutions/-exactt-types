import { IBase } from './IBase';

export interface IPageSetup extends IBase {
  margin: number;
  footerMargin: number;
  headerMargin: number;
  printReportWithHeader: boolean;
}
