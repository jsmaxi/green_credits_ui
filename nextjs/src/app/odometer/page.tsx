"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CustomConnectButton } from "@/components/connectButton/CustomConnectButton";
import { useAccount } from "wagmi";
import { processOdometerReading } from "../../../contract/writeFunctions/processOdometerReading";

const Odometer = () => {
  const [driver, setDriver] = useState<string>("");
  const [current, setCurrent] = useState<string>("");

  const { address } = useAccount();

  const { write, result, isPending, error } = processOdometerReading(driver, current ? Number(current) : 0);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Submitted:", driver, current);
    if (!address) {
      alert("Please connect your wallet first.");
      return;
    }
    try {
      const hash = await write();
      console.log(`Transaction hash: ${hash}`);
    } catch (error: any) {
      console.log(`Failed to write: ${error}`);
    }
    console.log(result, isPending, error);
  };

  return (
    <div className="container mx-auto p-4 max-w-md bg-gray-50 min-h-screen">
      <div className="flex justify-end mb-4">
        <div className={address ? "text-gray-700" : "text-gray-700 border-2 border-gray-300"}>
          <CustomConnectButton />
        </div>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Odometer Test</h1>
      </div>

      <Card className="border-gray-300 bg-white mb-8">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Driver Address"
                value={driver}
                onChange={(e) => setDriver(e.target.value)}
                className="w-full border-gray-300 focus:ring-gray-500"
              />
            </div>
            <div className="mb-4">
              <Input
                type="number"
                placeholder="Current Odometer"
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
                className="w-full border-gray-300 focus:ring-gray-500"
                min={0}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gray-600 hover:bg-gray-700 flex items-center justify-center text-white"
              disabled={!address}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

      {isPending && (
        <div className="text-center mt-4 mb-4">
          <p>Pending...</p>
        </div>
      )}

      {error && (
        <div className="text-center mt-4 mb-4">
          <p>Error: {error}</p>
        </div>
      )}

      {result && (
        <div className="text-center mt-4 mb-4">
          <p>Success!</p>
        </div>
      )}

      <Link href="/">
        <Button className="w-full bg-gray-600 hover:bg-gray-700 flex items-center justify-center text-white rounded-lg">
          Return to the Dashboard
        </Button>
      </Link>
    </div>
  );
};

export default Odometer;
