import { ISample } from './ISample';

export interface IInvoice {
  id?: string;
  invoiceNumber: string;
  invoiceDate: Date;
  dueDate: Date;
  customer: string;
  samples: ISample[] | string[];
  total: number;
  totalTax: number;
  grandTotal: number;
  igst: boolean;
}
