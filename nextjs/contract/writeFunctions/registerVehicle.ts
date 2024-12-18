import { contractWriteFunction } from "../contractWrite";

export function registerVehicle(owner: string, vin: string) {
    const result = contractWriteFunction("registerVehicle", [owner, vin]);
    return result;
};