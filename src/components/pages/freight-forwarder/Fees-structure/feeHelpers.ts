export const getAppliedMode = (modeType: string) => {
  if (["1", "2", "3"].includes(modeType)) return "allModes";
  if (["4", "5", "6"].includes(modeType)) return "airLclLTLModes";
  if (["7", "8", "9", "10"].includes(modeType)) return "FCLMode";
  return null; // Default case if modeType doesn't match any category
};
