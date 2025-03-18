import MainBanner from "@/components/Banner/mainBanner";
import React from "react";
import Search from "@/components/common/search/Search";
import OurFaqs from "@/components/Faq/faq";
import Ads from "@/components/ads/Ads";
import { BannerData } from "./data";

const ResumeExamples = () => {
  return (
    <>
      <MainBanner {...BannerData} />
      <Ads />
      <Search />
      {/* <Categories /> */}
      <OurFaqs />
    </>
  );
};

export default ResumeExamples;
