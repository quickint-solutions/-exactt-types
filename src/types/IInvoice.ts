import { ISample } from './ISample';

export interface IInvoice {
  id?: string;
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  customer: string;
  samples: ISample[] | string[];
  total: number;
  totalTax: number;
  grandTotal: number;
  paidAmount: number;
  balanceDue: number;
}
