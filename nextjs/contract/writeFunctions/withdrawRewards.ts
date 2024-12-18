import { contractWriteFunction } from "../contractWrite";

export function withdrawRewards() {
    const result = contractWriteFunction("withdrawRewards", []);
    return result;
};