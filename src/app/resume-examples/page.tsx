import MainBanner from "@/components/Banner/mainBanner";
import React from "react";
import Search from "@/components/common/search/Search";
import OurFaqs from "@/components/Faq/faq";
import Ads from "@/components/ads/Ads";
import { BannerData } from "./data";
import ExampleCategories from "@/components/ExampleCategories/ExampleCategories";

const ResumeExamples = () => {
  return (
    <>
      <MainBanner {...BannerData} />
      <Ads />
      <Search />
      <ExampleCategories />
      <OurFaqs />
    </>
  );
};

export default ResumeExamples;
