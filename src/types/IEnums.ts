export interface IEnums {
  userTypes: {
    ADMIN: 'Admin';
    RECEPTIONIST: 'Receptionist';
    CHEMIST: 'Chemist';
    ACCOUNT: 'Account';
    HOD: 'HOD';
  };
  laboratoryType: {
    PATHOLOGY: 'Pathology';
    FOOD_AND_WATER: 'Food & Water';
    PHARMACEUTICAL: 'Pharmaceutical';
  };
  resultType: {
    KSZ_SAMPLE: 'KSZ_SAMPLE';
    FOOD_MASTER: 'FOOD_MASTER';
    BSI_REPORT: 'BSI_REPORT';
    W_PDW_AS_PER_FASSI: 'W_PDW_AS_PER_FASSI';
    W_GENERAL: 'W_GENERAL';
    PDW_GENERAL: 'PDW_GENERAL';
    PDW_AS_PER_FASSI: 'PDW_AS_PER_FASSI';
    MUNDRA: 'MUNDRA';
    FOOD_GENERAL: 'FOOD_GENERAL';
    CENTRAL_FSSAI_FORM_Vii_A: 'CENTRAL_FSSAI_FORM_Vii_A';
  };
}