import { contractWriteFunction } from "../contractWrite";

export function burnCredit(amount: number) {
    const result = contractWriteFunction("burnCredit", [amount]);
    return result;
};