"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Flame, Target } from "lucide-react";

const BurnCredits = () => {
  const [creditAmount, setCreditAmount] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Credits to Burn:", creditAmount);
  };

  return (
    <div className="container mx-auto p-4 max-w-md bg-orange-50 min-h-screen">
      <div className="flex justify-end mb-4">
        <Button variant="outline" className="text-orange-700 border-orange-300">
          Connect
        </Button>
      </div>

      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Flame className="text-orange-600" size={64} />
        </div>
        <h1 className="text-2xl font-bold text-orange-800">Burn Credit</h1>
        <p className="text-orange-600">Convert your green credits</p>
      </div>

      <Card className="border-orange-300 bg-white">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                type="number"
                placeholder="Credit Amount"
                value={creditAmount}
                onChange={(e) => setCreditAmount(e.target.value)}
                className="w-full border-orange-300 focus:ring-orange-500"
                min="0"
                step="1"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 flex items-center justify-center text-white"
            >
              <Target className="mr-2" size={20} />
              Burn
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="text-center mt-4 mb-8 text-orange-700 text-sm">
        <p>Burning credits helps offset your carbon footprint</p>
      </div>

      <Link href="/">
        <Button className="w-full bg-gray-600 hover:bg-gray-700 flex items-center justify-center text-white rounded-lg">
          Return to the Dashboard
        </Button>
      </Link>
    </div>
  );
};

export default BurnCredits;
