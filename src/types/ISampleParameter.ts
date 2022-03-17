import { IBase } from './IBase';
import { IParameters } from './IMaster';

export interface ISampleParameter extends IParameters, IBase {
  sampleId?: string;
  laboratoryId?: string;
  assignTo?: string;
  approvedBy?: string;
  status?: 'PANDING' | 'INPROCESS' | 'REJECT' | 'COMPLETED';
  method?: string;
  result?: any;
  isNagative?: boolean;
}
