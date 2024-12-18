"use client";

import { testnetContractAddress } from "./ABI";

export function resolveNetworkContract(chainId: number) {
    const defaultValue = "UNKNOWN";
    switch (chainId) {
      case 296:
        return testnetContractAddress;
      default:
        return defaultValue;
    }
  }