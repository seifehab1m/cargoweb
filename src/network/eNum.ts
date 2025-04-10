export const TransportMode = {
  All: 0,
  Express: 1, // Express delivery
  Air: 2, // Air freight
  LCL: 3, // Less than Container Load (shipping)
  FCL: 4, // Full Container Load (shipping)
  LTL: 5, // Less than Truckload (road freight)
  FTL: 6, // Full Truckload (road freight)
};
export const LoadUnit = {
  Boxes: 1,
  Pallets: 2,
  Container20Dry: 3,
  Container40Dry: 4,
  Container40HCDry: 5,
  Container45HCDry: 6,
  Container20Refrigerated: 7,
  Container40Refrigerated: 8,
  Container20OpenTop: 9,
  Container40OpenTop: 10,
  Container20FlatRack: 11,
  Container40FlatRack: 12,
  Container20IsoTank: 13,
  Container40IsoTank: 14,
};

export const UnitOfMeasurementOptions = {
  PerFlat: 1,
  PerPercentage: 2,
  PerUnit: 3,
  PerKglb: 4,
  PerCbmCft: 5,
  PerWeightMeasure: 6,
  PerTEU: 7,
  PerTon: 8,
  PerContainer: 9,
  PerDrivingKmMile: 10,
};

export const CurrencyOptions = {
  USD: 1,
  SAR: 2,
};

export const executedLegs = {
  Pickup: 1,
  Delivery: 2,
  MainLeg: 3,
  Origin: 4,
  Destination: 5,
};

export const ChargeType = {
  ActualWeight: 1,
  ChargeableWeight: 2,
};

export const dimFactorType = {
  Ccmkg: 1,
};

// enum for fee structure
export const percentageCalculationType = {
  fee: 1,
  quoteTotal: 2,
};

export const rolesType = {
  user: 1,
  admin: 2,
  superAdmin: 3,
};

export const officeType = {
  officeOne: 1,
  officeTwo: 2,
};

export const carrierType = {
  Air: 1,
  Ocean: 2,
  Trucking: 3,
  Rail: 4,
};

export const insuranceFeeType = {
  InsuranceFee: 1,
  InsuranceFeeWithPremium: 2,
};
