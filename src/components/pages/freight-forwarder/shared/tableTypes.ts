export interface ShipmentType {
  id: string;
  origin: string;
  destination: string;
  validFrom: string;
  validTo: string;
  createdDate: string;
  mode: string;
  load: string;
  traficName: string;
  traficNumber: string;
  transmitTime: string;
  via: string;
  status: string;
  currency: string;
  loadsUnits: string[];
  type: string | number;
}
