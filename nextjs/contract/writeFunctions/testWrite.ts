import { contractWriteFunction } from "../contractWrite";

export function testWrite() {
    const result = contractWriteFunction("testWrite", []);
    return result;
};