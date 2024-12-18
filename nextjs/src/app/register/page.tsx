"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CarFront, Leaf } from "lucide-react";
import { CustomConnectButton } from "@/components/connectButton/CustomConnectButton";
import { useAccount } from "wagmi";
import { registerVehicle } from "../../../contract/writeFunctions/registerVehicle";

const CarRegistration = () => {
  const [vinCode, setVinCode] = useState("");

  const { address } = useAccount();

  const { write, result, isPending, error } = registerVehicle(address ?? "", vinCode);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Submitted VIN:", vinCode);
    if (!vinCode) {
      alert("Please enter valid VIN code.");
      return;
    }
    if (!address) {
      alert("Please connect your wallet first.");
      return;
    }
    try {
      const hash = await write();
      console.log(`Transaction hash: ${hash}`);
      setVinCode("");
    } catch (error: any) {
      console.log(`Failed to write: ${error}`);
    }
    console.log(result, isPending, error);
  };

  return (
    <div className="container mx-auto p-4 max-w-md bg-green-50 min-h-screen">
      <div className="flex justify-end mb-4">
        <div className={address ? "text-green-700" : "text-green-700 border-2 border-green-300"}>
          <CustomConnectButton />
        </div>
      </div>

      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <CarFront className="text-green-600" size={64} />
        </div>
        <h1 className="text-2xl font-bold text-green-800">Register Car</h1>
        <p className="text-green-600">Enter your vehicle's VIN code</p>
      </div>

      <Card className="border-green-300 bg-white">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="VIN Code"
                value={vinCode}
                onChange={(e) => setVinCode(e.target.value)}
                className="w-full border-green-300 focus:ring-green-500"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center text-white"
              disabled={!vinCode || !address}
            >
              <Leaf className="mr-2" size={20} />
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

      <div className="text-center mt-4 mb-8 text-green-700 text-sm">
        <p>By registering, you're helping reduce carbon emissions</p>
      </div>

      <Link href="/">
        <Button className="w-full bg-gray-600 hover:bg-gray-700 flex items-center justify-center text-white rounded-lg">
          Return to the Dashboard
        </Button>
      </Link>
    </div>
  );
};

export default CarRegistration;
