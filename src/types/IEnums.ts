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
    KSZ_SAMPLE: 'KSZ Sample';
    FOOD_MASTER: 'Food Master';
    BSI_REPORT: 'BSI Report';
    W_PDW_AS_PER_FASSI: 'W PDW as per FASSI';
    W_GENERAL: 'W General';
    PDW_GENERAL: 'PDW General';
    PDW_AS_PER_FASSI: 'PDW as per FASSI';
    MUNDRA: 'Mundra';
    FOOD_GENERAL: 'Food General';
    CENTRAL_FSSAI_FORM_Vii_A: 'Central FSSAI form VII A';
  };

  accessType: {
    ACCOUNTING: 'Accounting';
    CUSTOMER: 'Customer';
    REFERENCE: 'Reference';
    PAYMENT: 'Payment';
    TEST_GROUP: 'Test Group';
    RESULT_TEMPLATE: 'Result Template';
    DEPARTMENT: 'Department';
    LABORATORY_SETTING: 'Laboratory Setting';
    MASTER: 'Master';
    SAMPLES: 'Samples';
    STOCK_MANAGEMENT: 'Stock Management';
  };
}
