import { contractWriteFunction } from "../contractWrite";

export function processOdometerReading(driver: string, currentOdometer: number) {
    const result = contractWriteFunction("processOdometerReading", [driver, currentOdometer]);
    return result;
};