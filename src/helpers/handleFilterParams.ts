// utils/handleParams.ts
import { ItemTypeOriginsAndDestinations } from "../components/pages/freight-forwarder/form-helpers/formTypes";

export const handleFilterOriginAndDestinations = (
  values: ItemTypeOriginsAndDestinations[],
  key: string,
  addParams: (params: Record<string, string[]>) => void
) => {
  const originsArray = values.map((item) => item.primaryName); // Collect all values first
  addParams({ [key]: originsArray }); // Pass them all at once
};
