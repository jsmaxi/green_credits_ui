"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Award } from "lucide-react";
import { CustomConnectButton } from "@/components/connectButton/CustomConnectButton";
import { useAccount } from "wagmi";
import { withdrawRewards } from "../../../contract/writeFunctions/withdrawRewards";
import { getCreditStats } from "../../../contract/readFunctions/getCreditStats";

interface Stats {
  balance: number;
  minted: number;
  burned: number;
  pendingRewards: number;
  vin: string;
}

function createStats(balance: number, minted: number, burned: number, pendingRewards: number, vin: string): Stats {
  return { balance, minted, burned, pendingRewards, vin };
}

const ClaimRewards = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loadingStats, setLoadingStats] = useState(false);
  const [statsError, setStatsError] = useState<string | null>(null);
  const [reload, setReload] = useState<boolean>(false);

  const { address } = useAccount();

  const { isFetching: isFetchingStats, refetch: refetchStats, error: errorStats } = getCreditStats(address ?? "");

  const { write, result, isPending, error } = withdrawRewards();

  useEffect(() => {
    const fetchStats = async () => {
      if (!address) return;

      setLoadingStats(true);
      setStatsError(null);

      try {
        const { data } = await refetchStats();
        const array = data as any[];
        const stats = array
          ? createStats(
              array[0] as number,
              array[1] as number,
              array[2] as number,
              array[3] as number,
              array[4] as string,
            )
          : null;
        setStats(stats);
        console.log("stats", data);
      } catch (error) {
        console.error("Failed to fetch user stats:", error);
        setStatsError("Failed to fetch user stats.");
      } finally {
        setLoadingStats(false);
      }
    };

    fetchStats();
    console.log(isFetchingStats, errorStats);
  }, [address, reload]);

  const handleWithdraw = async () => {
    console.log("Withdrawing rewards:", stats?.pendingRewards);
    if (!stats?.pendingRewards) {
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
      setReload(!reload);
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

      <Card className="border-blue-300 mb-4">
        <CardContent className="pt-6 text-center">
          <div className="mb-4">
            <div className="text-2xl font-bold text-blue-700 mb-2">{stats && stats.vin ? stats.vin : "N/A"}</div>
            <div className="text-sm text-blue-500">VIN</div>
            <div className="text-2xl font-bold text-blue-700 mb-2 mt-4">
              ${stats && stats.balance ? stats.balance.toFixed(2) : Number(0)}
            </div>
            <div className="text-sm text-blue-500">Balance</div>
            <div className="text-2xl font-bold text-blue-700 mb-2 mt-4">
              ${stats && stats.minted ? stats.minted.toFixed(2) : Number(0)}
            </div>
            <div className="text-sm text-blue-500">Minted</div>
            <div className="text-2xl font-bold text-blue-700 mb-2 mt-4">
              ${stats && stats.burned ? stats.burned.toFixed(2) : Number(0)}
            </div>
            <div className="text-sm text-blue-500">Burned</div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-300 bg-white">
        <CardContent className="pt-6 text-center">
          <div className="mb-4">
            <div className="text-4xl font-bold text-blue-700 mb-2">
              ${stats && stats.pendingRewards ? stats.pendingRewards.toFixed(2) : Number(0)}
            </div>
            <div className="text-sm text-blue-500">Available Rewards</div>
            {loadingStats && <div className="text-sm text-blue-500">Loading Rewards...</div>}
            {statsError && <div className="text-sm text-blue-500">Rewards Loading Error: {statsError}</div>}
          </div>

          <Button
            onClick={handleWithdraw}
            disabled={!stats?.pendingRewards || stats.pendingRewards === 0 || !address}
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
