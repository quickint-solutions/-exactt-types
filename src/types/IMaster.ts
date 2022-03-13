import { IBase } from './IBase';

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

export interface IParameters {
  name: string;
  unit: string;
  requirements: string;
  isNABL: boolean;
  department: string;
  validations: IRangeValidation | IValidResultValidation | IOptionsValidation | ICompliesValidation;
}

export interface IMaster extends IBase {
  masterId?: string;
  sampleName: string;
  genericName: string;
  environmentCondition: string;
  parameters: IParameters[];
}
