export type countryType = {
  id: string;
  localizedAutoCompleteName: string;
};
export interface CarrierType {
  id: string;
  primaryName: string;
  code: string;
  createdOn: string;
  office: string;
  email: string;
  phone: string;
  status: string|number;
  logo: string;
  countryId: string;
  mode: string;
  country: countryType;
}
