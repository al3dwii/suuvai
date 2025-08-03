// src/components/pricing/PricingSection.tsx
'use client'

import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Balancer from "react-wrap-balancer";

import { toast } from 'sonner';
import Loading from '@/components/global/loading';
import PlanCard from './PlanCard';
import { pricingPlans } from './planConfig';

interface PricingSectionProps {
  currentPlanId: string | null;
}

const PricingSection: React.FC<PricingSectionProps> = ({ currentPlanId }) => {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleBuyPackage = async (packageId: string) => {
    if (!isSignedIn) {
      toast.info('Please sign in to purchase packages.');
      router.push('/sign-in');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('/api/buy-package', {
        packageId,
      });
      // Redirect to Stripe Checkout
      window.location.href = response.data.url;
    } catch (error: any) {
      console.error('Purchase error:', error);
      const message =
        error.response?.data?.error || 'Failed to purchase package. Please try again.';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mt-8 flex flex-col items-center text-center">
      <div className="mx-auto mt-10 flex w-full flex-col gap-5">
        <p className="font-tajawal text-4xl font-bold text-black">الباقات</p>
        <h2 className="font-tajawal font-heading text-sm leading-[1.1] md:text-xl text-blue-500">
          الشراء مرة واحدة ولا يتم التجديد تلقائياً
        </h2>
      </div>
      {loading && <Loading />}
      <div className="mx-auto grid max-w-screen-lg gap-5 py-5 md:grid-cols-2 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            onBuy={handleBuyPackage}
            currentPlanId={currentPlanId}
          />
        ))}
      </div>

      <p className="mt-3 text-center text-base text-muted-foreground">
        راسلنا لاي استفسار
        <br />
        <strong>جاهزين للرد والدعم</strong>
        <br />
        <Balancer>
          البريد الالكتروني{" "}
          <br/>
          <a
            className="font-medium text-primary hover:underline"
            href="mailto:admin@arabicocr.net"
          >
            sibawayhLLC@outlook.com
          </a>{" "}
        </Balancer>
      </p>
      {/* الواتساب {" "}
      <br/>
      <p className="mb-3 text-left text-base text-muted-foreground">
        0096561007772
      </p> */}
    </section>
  );
};

export default PricingSection;

