import { IBase } from './IBase';
import { IParameters } from './IMaster';

export interface ISampleParameter extends IParameters, IBase {
  sampleId?: string;
  laboratoryId?: string;
  assignTo?: string;
  approvedBy?: string;
  status?: 'PENDING' | 'INPROCESS' | 'REJECT' | 'COMPLETED';
  result?: any;
  isNagative?: boolean;
  allotmentDate?: Date;
  dueDate?: Date;
}
