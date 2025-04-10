export interface ItemTypeOriginsAndDestinations {
   id: string;
  code: string;
  primaryName: string;
  secondaryName: string;
  localizedAutoCompleteName: string;
  LocationData?: string;
  portId?: string;
  countryId?: string;
}

export interface TREESELECTTYPE {
  value: string;
  title: string;
  selectable?: boolean;
  children?: TREESELECTTYPE[];
  fullData?: ItemTypeOriginsAndDestinations;
}

export interface TreeSelectProps {
  name: string;
  label: string;
  required?: boolean;
  setOptions?: (origins: ItemTypeOriginsAndDestinations[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intailValue?: any;
}
