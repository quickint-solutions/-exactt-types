import { IBase } from './IBase';
import { ICustomer } from './ICustomer';
import { IMaster } from './IMaster';
import { IReference } from './IReference';
import { ISampleParameter } from './ISampleParameter';
import { ITestGroup } from './ITestGroup';
import { IUser } from './IUser';

export interface ISample extends IBase {
  laboratoryId?: string;
  customer: string | ICustomer;
  reference: string | IReference;
  master: string | IMaster;
  dueDate: Date;
  labDueDate: Date;
  collectionDate: Date;
  mfgDate: Date;
  expDate: Date;
  sampleId?: string;
  name: string;
  genericName: string;
  testGroup: string | ITestGroup;
  sampleCode?: string;
  brandName?: string;
  manufacture?: string;
  marking?: string;
  supplier: string;
  batchNo?: string;
  batchSize?: string;
  drugLicNo?: string;
  type?: string;
  description?: string;
  rate?: number;
  sac?: string;
  gst?: number;
  igst?: boolean;
  discount?: number;
  paidAmount?: number;
  paymentDueDate?: Date;
  samplePacking?: string;
  sampleQty?: string;
  sampleCondition?: string;
  envCondition?: string;
  servingSize?: string;
  samplingMethod?: string;
  hod: string | IUser;
  collectionBy: string | IUser;
  status?: 'PENDING' | 'INPROCESS' | 'COMPLETED';
  parameters?: ISampleParameter[];
  additionalFields?: any;
  analysisDate?: Date;
  completeDate?: Date;
  reportDate?: Date;
  url?: string;
  reviewedBy: string | IUser;
  authorizedSignature1: string | IUser;
  authorizedSignature2?: string | IUser | undefined;
  refNo?: string;
  sampleLocation?: string;
  expDateForFoodSample?: Date;
  locationOfAnalysis?: string;
  sourceOfWater?: string;
  statement?: string;
  beNo?: string;
  sealOnContainer?: string;
  dateOfDispatch?: Date;
  testMemoAndDate?: string;
  regulationNo?: string;
  sampleDescription?: string;
  physicalAppearance?: string;
  label?: string;
  fassiLogoAndLicenseNo?: string;
  listOfIngratiation?: string;
  nutritionalInformation?: string;
  vagNonVegDetails?: string;
  nameAndAddressOfImporter?: string;
  countryOfOrigin?: string;
  instructionForUsed?: string;
  nameOfPlantSection?: string;
  purposeOfMonitoring?: string;
  emissionSourceMonitor?: string;
  productManufacturedSamplingTime?: string;
  nameOfAuthorizedPerson?: string;
  controlMeasures?: string;
  authorizedPersonAddress?: string;
  recoveryOfMaterial?: string;
  sealOnContainerBISSeal?: string;
  generalSensory?: string;
  CHSRegnNo?: string;
  fugitiveEmission?: string;
  CHACardHolder?: string;
  stackTemp?: string;
  dateAndPlaceOfCollectionOfSample?: string;
  ambientTemperature?: string;
  srNo?: string;
  stackVelocity?: string;
  sealsFixedNo?: string;
  conformsOrNon?: string;
  sealedCoverByThe?: string;
  serviceMode?: string;
  foundTheSampleToBe?: string;
  sampleStatus?: string;
  parametersMonitors?: string;
  statusReasons?: string;
}
