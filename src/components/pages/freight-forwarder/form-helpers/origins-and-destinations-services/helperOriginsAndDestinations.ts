export interface OriginItem {
  portData: PortData;
  isAirPort: boolean;
}
export interface PortData {
  countryId: string;
  id: string;
  code: string;
  primaryName: string;
  secondaryName: string;
  localizedAutoCompleteName: string;
  portId: string;
}

export interface ConditionalOriginItem {
  id: string;
  countryId: string;
  portId: string;
}
export interface seaPortsOrAirPorts {
  id: string;
  countryId: string;
  portId: string;
  code: string;
  primaryName: string;
  secondaryName: string;
  localizedAutoCompleteName: string;
}

//---------------------------------------- those for input form texts ---------------------------------------
export const getIntialValuesOriginsOrDestinations = (
  OriginItems: OriginItem[]
) => {
  return OriginItems.map((item) => ({
    value: item.portData.localizedAutoCompleteName,
  }));
};

export const getIntialValuesConditionalOriginsOrDestinations = (
  items: { seaPorts?: seaPortsOrAirPorts[]; airPorts?: seaPortsOrAirPorts[] }[]
) => {
  return items.flatMap((entry) => {
    const seaPorts = entry.seaPorts ?? [];
    const airPorts = entry.airPorts ?? [];

    return [...seaPorts, ...airPorts].map((item) => ({
      value: item.localizedAutoCompleteName,
    }));
  });
};

//---------------------------------------- those for input form texts ---------------------------------------

//---------------------------------------- those for input form texts API ---------------------------------------
export const getIntialValuesOriginsOrDestinationsWithPortId = (
  OriginItems: OriginItem[]
) => {
  if (!OriginItems) return [];
  return OriginItems.map((item) => ({
    id: item.portData.id,
    countryId: item.portData.countryId,
    portId: item.portData.portId,
  }));
};

export const getIntialValuesConditionalOriginsOrDestinationsWithPortId = (
  items: { seaPorts?: seaPortsOrAirPorts[]; airPorts?: seaPortsOrAirPorts[] }[]
): ConditionalOriginItem[] => {
  return items.flatMap((entry) => {
    const seaPorts = entry.seaPorts ?? [];
    const airPorts = entry.airPorts ?? [];

    return [...seaPorts, ...airPorts].map((item) => ({
      id: item.id,
      countryId: item.countryId,
      portId: item.portId,
    }));
  });
};
//---------------------------------------- those for input form texts API ---------------------------------------
