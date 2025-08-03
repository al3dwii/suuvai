// src/components/pricing/PlanCard.tsx

"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button2";
import * as Icons from "@/components/ui/Icons";

import { Plan } from "./planConfig";

interface PlanCardProps {
  plan: Plan;
  onBuy: (planId: string) => void; // Callback prop for buying a package
  currentPlanId: string | null;
}

const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  onBuy,
  currentPlanId,
}) => {
  // Define the Free plan's id
  const freePlanId = "cm4kcbd6t00007ndb3r9dydrc"; // Free plan ID

  // Determine if this is the user's current plan
  const isCurrentPlan = plan.id === currentPlanId;

  // Determine if this is the Free plan
  const isFreePlan = plan.id === freePlanId;

  // Button Label Helpers
  const getButtonLabel = () => {
    if (isFreePlan) {
      return "لوحة التحكم"; 
    } else {
      return "اشترِ الآن"; // Buy Now
    }
  };

  // Button Action Helpers
  const getButtonAction = () => {
    if (isFreePlan || isCurrentPlan) {
      return (
        <Link href="/dashboard">
          <Button className="w-full">
            {getButtonLabel()}
          </Button>
        </Link>
      );
    } else {
      return (
        <Button
          className="w-full"
          onClick={() => {
            console.log(`Buy Now clicked for packageId: ${plan.id}`);
            onBuy(plan.id); // Handle buy action
          }}
        >
          {getButtonLabel()}
        </Button>
      );
    }
  };

  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Highlight Current Plan */}
      {isCurrentPlan && !isFreePlan && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-l px-2 py-1 rounded">
          الباقة الحالية
        </div>
      )}
      <div className="min-h-[150px] bg-blue-200 p-6 flex flex-col justify-between">
        <p className="font-tajawal text-l font-bold p-6 uppercase tracking-wider text-black">
          {plan.title}
        </p>
        <div className="flex flex-row items-baseline">
          <span className="text-3xl m-2 center font-bold font-tajawal">{plan.price}</span>
          <span className="ml-2 text-xl font-medium">{plan.frequency}</span>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-6 p-6">
        <ul className="space-y-2 text-left text-sm font-medium">
          {plan.features.map((feature, idx) => (
            <li className="flex items-start" key={idx}>
              <Icons.Check className="mr-3 h-5 w-5 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
          {plan.limitations.map((limitation, idx) => (
            <li className="flex items-start text-muted-foreground" key={idx}>
              <Icons.Close className="mr-3 h-5 w-5 text-red-500" />
              <span>{limitation}</span>
            </li>
          ))}
        </ul>

        {/* Render the appropriate button based on plan type */}
        {getButtonAction()}
      </div>
    </div>
  );
};

export default PlanCard;

