"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Award } from "lucide-react";
import { CustomConnectButton } from "@/components/connectButton/CustomConnectButton";
import { useAccount } from "wagmi";
import { withdrawRewards } from "../../../contract/writeFunctions/withdrawRewards";

const ClaimRewards = () => {
  const [availableRewards, setAvailableRewards] = useState(425.5);

  const { address } = useAccount();

  const { write, result, isPending, error } = withdrawRewards();

  const handleWithdraw = async () => {
    console.log("Withdrawing rewards:", availableRewards);
    if (!availableRewards) {
      alert("No rewards available.");
      return;
    }
    if (!address) {
      alert("Please connect your wallet first.");
      return;
    }
    try {
      const hash = await write();
      console.log(`Transaction hash: ${hash}`);
      setAvailableRewards(0);
    } catch (error: any) {
      console.log(`Failed to write: ${error}`);
    }
    console.log(result, isPending, error);
  };

  return (
    <div className="container mx-auto p-4 max-w-md bg-blue-50 min-h-screen">
      <div className="flex justify-end mb-4">
        <div className={address ? "text-blue-700" : "text-blue-700 border-2 border-blue-300"}>
          <CustomConnectButton />
        </div>
      </div>

      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Gift className="text-blue-600" size={64} />
        </div>
        <h1 className="text-2xl font-bold text-blue-800">Claim Rewards</h1>
        <p className="text-blue-600">Your eco-friendly achievements</p>
      </div>

      <Card className="border-blue-300 bg-white">
        <CardContent className="pt-6 text-center">
          <div className="mb-4">
            <div className="text-4xl font-bold text-blue-700 mb-2">${availableRewards.toFixed(2)}</div>
            <div className="text-sm text-blue-500">Available Rewards</div>
          </div>

          <Button
            onClick={handleWithdraw}
            disabled={availableRewards === 0 || !address}
            className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white"
          >
            <Award className="mr-2" size={20} />
            Withdraw
          </Button>
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

      <div className="text-center mt-4 mb-8 text-blue-700 text-sm">
        <p>Your green miles are turning into real rewards!</p>
      </div>

      <Link href="/">
        <Button className="w-full bg-gray-600 hover:bg-gray-700 flex items-center justify-center text-white rounded-lg">
          Return to the Dashboard
        </Button>
      </Link>
    </div>
  );
};

export default ClaimRewards;
