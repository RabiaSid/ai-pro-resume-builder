"use client";

import PackageCard from "@/components/common/card/packageCard/PackageCard";
import OurFaqs from "@/components/Faq/faq";
import CoinsPurchase from "@/components/pricing/CoinsPurchase";
import PackageCardSkeleton from "@/components/pricing/PackageCardSkeleton";
import React, { useEffect, useRef, useState } from "react";

interface User {
  package_id: number;
  // Add other properties if needed
}

const pricing = () => {
  const [packages, setPackages] = useState<any[]>([]);
  const [packageDetailText, setPackageDetailText] = useState<any>("");
  const [scroll_checking, set_scroll_checking] = useState(0);

  // Define user2 with the correct type
  const user2: User = {
    package_id: 1, // Example: User is currently on the Free package
  };

  // Dummy subscription data
  const subscription = {
    end_date: "2023-12-31", // Example: Subscription ends on December 31, 2023
  };

  const dummyPackages = [
    {
      id: 1,
      name: "Free",
      duration: 30, // 30 days
      price: 0,
      description: `
        <ul>
          <li>Unlimited PDF downloads</li>
          <li>5 spell and grammar checks</li>
          <li>Basic resume sections and templates</li>
          <li>Manual cover letter generation</li>
        </ul>
      `,
    },
    {
      id: 2,
      name: "Standard",
      duration: 90, // 90 days
      price: 29.99,
      description: `
        <ul>
          <li>Unlimited PDF downloads</li>
          <li>20 spell and grammar checks</li>
          <li>Advanced AI chat support</li>
          <li>2 premium templates</li>
          <li>AI-based cover letter generation</li>
        </ul>
      `,
    },
    {
      id: 3,
      name: "Premium",
      duration: 120,
      price: 99.99,
      description: `
        <ul>
          <li>Unlimited PDF downloads</li>
          <li>50 spell and grammar checks</li>
          <li>5 premium templates</li>
          <li>Access to global job opportunities</li>
          <li>Real-time AI suggestions</li>
          <li>20 resume parser tokens</li>
        </ul>
      `,
    },
  ];

  const detailSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (scroll_checking === 1) {
      // Scroll to the element if the ref is set
      detailSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    set_scroll_checking(1);
  }, [packageDetailText]);

  return (
    <>
      <div className="w-full">
        <div className="container m-auto py-6 sm:py-10 px-4 sm:px-0">
          {/* Content */}

          <div className="flex flex-col gap-10">
            {/* Basic Heading */}
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className="font-Lexend font-bold text-xl text-center sm:text-2xl">
                Get the Perfect Plan for Your Career Goals
              </h1>
              <span className="font-Lexend text-left">
                Find the perfect plan to create standout resumes and cover
                letters. AI Pro Resume offers incredible features and
                fascinating tools that allow you to create standout documents.
                Explore our professional packages that possess top-notch
                templates, AI-based suggestions, spell & grammar checkers, and
                Resume parser tools. Build your professional resume and cover
                letter that passes ATS scanners and assists you in landing your
                dream interview. Select the perfect package for your needs.
              </span>
              <span className="font-Lexend text-left">
                You have the flexibility to purchase a single premium resume or
                cover letter template at an affordable price. By opting for a
                package, you can enjoy unlimited access to multiple premium
                templates at no additional cost. Additionally, premium cover
                letter and resume creation services are available individually
                on the service page. Our separate pricing gives you more options
                to meet your specific needs.
              </span>
            </div>
            {/* Cards */}
            <div className="flex flex-wrap gap-4 items-center justify-center">
              {dummyPackages?.length > 0 ? (
                <>
                  {dummyPackages?.map((p, idx) => {
                    return (
                      <PackageCard
                        id={p.id}
                        key={idx}
                        daysAccess={p.duration}
                        packageName={p.name}
                        price={p.price}
                        packagefeatures={p.description}
                        userCurrentId={user2?.package_id}
                        currentPackageEndDate={subscription?.end_date}
                        setPackageDetailText={setPackageDetailText}
                      />
                    );
                  })}
                </>
              ) : (
                <>
                  {[...Array(3)].map((_, index) => (
                    <PackageCardSkeleton key={index} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>

        <h1
          // ref={detailSectionRef}
          className="container m-auto px-2 text-left flex flex-wrap my-5 items-center justify-center font-Lexend text-primary-black"
        >
          {packageDetailText}
        </h1>
        <div id="coins_purchase">
          <CoinsPurchase />
        </div>

        <OurFaqs />
      </div>
    </>
  );
};

export default pricing;
