import React from "react";
import Ads from "@/components/ads/Ads";
import JobsSection from "@/components/career/JobsSection";
import MainBanner from "@/components/Banner/mainBanner";
import { CareersBannerData } from "./data";

const Career = () => {
  return (
    <>
      <MainBanner {...CareersBannerData} />
      <Ads />
      <JobsSection />
    </>
  );
};

export default Career;
