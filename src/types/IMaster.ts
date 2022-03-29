import { IBase } from './IBase';
import { IDepartment } from './IDepartment';

interface IRangeValidation {
  type: 'range';
  min: number;
  max: number;
}

interface IValidResultValidation {
  type: 'valid';
  validResult: string;
  invalidResult: string;
}

interface IOptionsValidation {
  type: 'options';
  validOptions: string[];
  invalidOptions: string[];
  allowMuiltiple: boolean;
}

interface ICompliesValidation {
  type: 'complies';
}

export type IValidation = IRangeValidation | IValidResultValidation | IOptionsValidation | ICompliesValidation;
export interface IParameters {
  name: string;
  unit: string;
  requirements: string;
  isNABL: boolean;
  department: string | IDepartment;
  validations: IValidation;
}

export interface IMaster extends IBase {
  masterId?: string;
  sampleName: string;
  genericName: string;
  environmentCondition: string;
  testingMethod: string;
  laboratoryId: string;
  parameters: IParameters[];
}
