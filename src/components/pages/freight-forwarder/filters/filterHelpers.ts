import { handleFilterOriginAndDestinations } from "@/src/helpers/handleFilterParams";
import { ItemTypeOriginsAndDestinations } from "../form-helpers/formTypes";

export const getFilterOptionItems = (pathName: string): string[] => {
  if (pathName.startsWith("/services")) {
    return ServiceInitialItems;
  } else if (pathName.startsWith("/local-charge")) {
    return LocalChargeInitialItems;
  } else if (pathName.startsWith("/users")) {
    return usersInitialItems;
  } else if (pathName.startsWith("/roles")) {
    return rolesInitialItems;
  } else if (pathName.startsWith("/general-charge")) {
    return GeneralChargeInitialItems;
  } else if (pathName.startsWith("/carriers")) {
    return carriersInitialItems;
  } else if (pathName.startsWith("/terms-and-conditions")) {
    return termsAndConditionsInitialItems;
  } else if (pathName.startsWith("/demurrage-and-detention")) {
    return deumrrageAndDetentionItems;
  } else if (pathName.startsWith("/insurance")) {
    return insuranceItems;
  } else if (pathName.startsWith("/tarrif")) {
    return tarrifItems;
  }
  return [];
};

export const handleFilteruri = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,
  values: Record<string, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,
  addParams: any,
  origins?: ItemTypeOriginsAndDestinations[],
  destinations?: ItemTypeOriginsAndDestinations[]
) => {
  Object.entries(values).forEach(([key, value]) => {
    if (
      value === undefined ||
      value === null ||
      value === "" ||
      value === " " ||
      value.length === 0
    )
      return;

    if (Array.isArray(value) && value.length > 0) {
      addParams({ [key]: value });
    } else {
      addParams({ [key]: [value] });
    }
  });

  if (origins) handleFilterOriginAndDestinations(origins, "origins", addParams);
  if (destinations)
    handleFilterOriginAndDestinations(destinations, "destinations", addParams);
};

export const getApiTableColumns = (pathName: string): string => {
  if (pathName.startsWith("/services")) {
    return "/tazamun-freight-forwarder/api/v1/Services/search";
  }
  if (pathName.startsWith("/local-charge")) {
    return "/tazamun-freight-forwarder/api/v1/LocalCharges/search";
  }
  if (pathName.startsWith("/general-charge")) {
    return "/tazamun-freight-forwarder/api/v1/GeneralCharges/search";
  }
  if (pathName.startsWith("/tarrifs")) {
    return "/tazamun-freight-forwarder/api/v1/Tariff/search";
  }
  if (pathName.startsWith("/carriers")) {
    return "/tazamun-freight-forwarder/api/v1/Carriers/search";
  }

  return " ";
};

const ServiceInitialItems = [
  "Origin",
  "Destination",
  "Valid From",
  "Valid To",
  "Mode",
  "Load Unit",
  "Traffic Name",
  "Via",
];

const LocalChargeInitialItems = [
  "Fee Code",
  "conditional origins",
  "conditional destinations",
  "Valid From",
  "Valid To",
  "Mode",
  "Country",
];

const GeneralChargeInitialItems = [
  "Fee Code",
  "mode",
  "Valid From",
  "Valid To",
  "Load",
  "carrier",
  "commodities",
];

const usersInitialItems = [
  "Created",
  "Full name",
  "Email",
  "Office",
  "Phone",
  "Role",
  "Status",
];

const rolesInitialItems = ["Created", "Role Of name", "No Of users"];

const carriersInitialItems = [
  "Carrier Name",
  "Carrier Code",
  "Type",
  "Country",
];

const termsAndConditionsInitialItems = [
  "Created",
  "Full name",
  "Description",
  "Mode",
  "Origin",
  "Destination",
  "Activated",
];

const deumrrageAndDetentionItems = [
  "Created",
  "Role name",
  "Description",
  "Demurrage Free time (days)",
  "Activated",
];

const insuranceItems = [
  "Created",
  "Policy Name",
  "Description",
  "Pricing",
  "Activated",
];

const tarrifItems = [
  "Tarrif Name",
  "Contract Number",
  "Created",
  "Valid From",
  "Valid To",
  "Mode",
  "carrier",
  "Via",
];
