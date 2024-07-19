"use client";
import { Button } from '@/components/ui/button';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';

function Billing() {
 

  return (
    <div>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h2 className='text-center font-bold text-3xl my-3'>Upgrade With Monthly Plan</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          {/* Free Plan */}
          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">Free Plan</h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">0$</strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                {/* List item SVG */}
                <span className="text-gray-700">10,000 Words/Month</span>
              </li>
              <li className="flex items-center gap-1">
                {/* List item SVG */}
                <span className="text-gray-700">50+ Content Templates</span>
              </li>
              <li className="flex items-center gap-1">
                {/* List item SVG */}
                <span className="text-gray-700">Unlimited Download & Copy</span>
              </li>
              <li className="flex items-center gap-1">
                {/* List item SVG */}
                <span className="text-gray-700">1 Month of History</span>
              </li>
            </ul>
          </div>

          {/* Monthly Plan */}
          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">Monthly Plan</h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">9.99$</strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                {/* List item SVG */}
                <span className="text-gray-700">100,000 Words/Month</span>
              </li>
              <li className="flex items-center gap-1">
                {/* List item SVG */}
                <span className="text-gray-700">50+ Template Access</span>
              </li>
              <li className="flex items-center gap-1">
                {/* List item SVG */}
                <span className="text-gray-700">Unlimited Download & Copy</span>
              </li>
              <li className="flex items-center gap-1">
                {/* List item SVG */}
                <span className="text-gray-700">1 Year of History</span>
              </li>
            </ul>

            <Button
             
              className='w-full rounded-full mt-5 p-6'
              variant='outline'
            >
             
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
