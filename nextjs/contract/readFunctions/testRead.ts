import { contractReadFunction } from "../contractRead";

export function testRead() {
  const result = contractReadFunction("testRead", []);
  return result;
};