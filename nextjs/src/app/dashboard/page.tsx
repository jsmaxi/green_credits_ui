import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Flame, MapPin, Award } from "lucide-react";

const GreenCreditsDashboard = () => {
  const dashboardData = {
    creditsMinted: 1245,
    creditsBurned: 378,
    milesDriven: 6532,
    milesAwarded: 425,
  };

  return (
    <div className="container mx-auto p-4 max-w-md bg-green-50">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-green-800">Green Credits Dashboard</h1>
        <p className="text-green-600">Your Eco-Driving Impact</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="border-green-300 bg-white rounded-lg cursor-pointer hover:scale-105">
          <CardContent className="pt-6 text-center flex flex-col items-center">
            <Leaf className="text-green-600 mb-2" size={36} />
            <div className="text-3xl font-bold text-green-800">{dashboardData.creditsMinted}</div>
            <div className="text-sm text-green-600">Credits Minted</div>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-white rounded-lg cursor-pointer hover:scale-105">
          <CardContent className="pt-6 text-center flex flex-col items-center">
            <Flame className="text-red-500 mb-2" size={36} />
            <div className="text-3xl font-bold text-red-700">{dashboardData.creditsBurned}</div>
            <div className="text-sm text-red-500">Credits Burned</div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-white rounded-lg cursor-pointer hover:scale-105">
          <CardContent className="pt-6 text-center flex flex-col items-center">
            <MapPin className="text-blue-600 mb-2" size={36} />
            <div className="text-3xl font-bold text-blue-800">{dashboardData.milesDriven}</div>
            <div className="text-sm text-blue-600">Miles Driven</div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-white rounded-lg cursor-pointer hover:scale-105">
          <CardContent className="pt-6 text-center flex flex-col items-center">
            <Award className="text-purple-600 mb-2" size={36} />
            <div className="text-3xl font-bold text-purple-800">{dashboardData.milesAwarded}</div>
            <div className="text-sm text-purple-600">Miles Awarded</div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mb-12">
        <Link href="/register">
          <Button className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center text-white rounded-lg">
            <Leaf className="mr-2" size={20} />
            Register Your Green Journey
          </Button>
        </Link>
      </div>

      <div className="text-center mb-4">
        <Link href="/burn">
          <Button className="w-full bg-orange-600 hover:bg-orange-700 flex items-center justify-center text-white rounded-lg">
            <Flame className="mr-2" size={20} />
            Burn Your Credits
          </Button>
        </Link>
      </div>

      <div className="text-center">
        <Link href="/withdraw">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white rounded-lg">
            <Award className="mr-2" size={20} />
            Claim Your Rewards
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default GreenCreditsDashboard;
