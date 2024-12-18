import { contractReadFunction } from "../contractRead";

export function getCreditStats(holder: string) {
  const result = contractReadFunction("getCreditStats", [holder]);
  return result;
};